import { create } from 'zustand'
import { GAME_STATE } from '../constants/common'
import { CellValue } from '../types/game-types'
import { calculateWinner } from '../utils'
import { GameHistoryItem, PlayerInfo, PlayerSymbol, ScoreItem } from '../types/socket-types'

type MoveResult = {
  moved: boolean
  symbol?: PlayerSymbol
  winnerSymbol?: PlayerSymbol | null
  isDraw?: boolean
}

type GameState = {
  board: CellValue[]
  xIsNext: boolean
  winner: string | null
  isDraw: boolean
  state: GAME_STATE
  roomId: string | null
  username: string | null
  playerSymbol: PlayerSymbol | null
  players: PlayerInfo[]
  scores: ScoreItem[]
  history: GameHistoryItem[]
  setGameState: (state: GAME_STATE) => void
}

type GameAction = {
  initRoom: (params: { roomId: string; username: string; symbol: PlayerSymbol }) => void
  setPlayers: (players: PlayerInfo[]) => void
  makeMove: (index: number) => MoveResult
  applyRemoteMove: (index: number, symbol: PlayerSymbol) => void
  setScores: (scores: ScoreItem[]) => void
  setHistory: (history: GameHistoryItem[]) => void
  setWaiting: () => void
  setReady: () => void
  resetGame: () => void
}

const useGameStore = create<GameState & GameAction>((set, get) => ({
  board: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  isDraw: false,
  state: GAME_STATE.NOT_STARTED,
  roomId: null,
  username: null,
  playerSymbol: null,
  players: [],
  scores: [],
  history: [],

  initRoom: ({ roomId, username, symbol }) => set({
    roomId,
    username,
    playerSymbol: symbol,
    state: GAME_STATE.JOINING
  }),

  setPlayers: (players) => set({ players }),

  setWaiting: () => set({ state: GAME_STATE.WAITING_FOR_PLAYER }),
  setReady: () => set({ state: GAME_STATE.READY }),

  makeMove: (index) => {
    const { board, xIsNext, winner, playerSymbol, state } = get()
    const boardCopy = [...board]
    const expectedSymbol: PlayerSymbol = xIsNext ? 'X' : 'O'

    if (
      state !== GAME_STATE.READY &&
      state !== GAME_STATE.IN_PROGRESS
    ) {
      return { moved: false }
    }

    if (!playerSymbol || playerSymbol !== expectedSymbol || winner || boardCopy[index]) {
      return { moved: false }
    }

    boardCopy[index] = expectedSymbol

    const winnerPlayer = calculateWinner(boardCopy as CellValue[])
    const isDraw = boardCopy.every((cell) => cell !== null) && !winnerPlayer

    set({
      board: boardCopy,
      xIsNext: !xIsNext,
      winner: winnerPlayer,
      isDraw,
      state: winnerPlayer || isDraw ? GAME_STATE.GAME_OVER : GAME_STATE.IN_PROGRESS
    })

    return {
      moved: true,
      symbol: expectedSymbol,
      winnerSymbol: winnerPlayer as PlayerSymbol | null,
      isDraw
    }
  },

  applyRemoteMove: (index, symbol) => {
    const { board, winner, state } = get()
    const boardCopy = [...board]

    if (
      state !== GAME_STATE.READY &&
      state !== GAME_STATE.IN_PROGRESS &&
      state !== GAME_STATE.GAME_OVER
    ) {
      return
    }

    if (winner || boardCopy[index]) {
      return
    }

    boardCopy[index] = symbol
    const winnerPlayer = calculateWinner(boardCopy as CellValue[])
    const isDraw = boardCopy.every((cell) => cell !== null) && !winnerPlayer

    set({
      board: boardCopy,
      xIsNext: symbol !== 'X',
      winner: winnerPlayer,
      isDraw,
      state: winnerPlayer || isDraw ? GAME_STATE.GAME_OVER : GAME_STATE.IN_PROGRESS
    })
  },

  setScores: (scores) => set({ scores }),
  setHistory: (history) => set({ history }),

  resetGame: () => set({
    board: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    isDraw: false,
    state: GAME_STATE.READY
  }),

  setGameState: (state: GAME_STATE) => set({
    state: state
  })
}))

export default useGameStore
