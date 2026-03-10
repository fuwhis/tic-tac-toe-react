import { GAME_STATE } from "../constants/common"
import useGameStore from "../store/gameStore"
import { GameHistoryItem, PlayerInfo, PlayerSymbol, ScoreItem } from "../types/socket-types"
import { CellValue } from "../types/game-types"

type MoveResult = {
  moved: boolean
  symbol?: PlayerSymbol
  winnerSymbol?: PlayerSymbol | null
  isDraw?: boolean
}

type GameFacade = {
  board: CellValue[]
  xIsNext: boolean
  winner: string | null
  isDraw: boolean
  roomId: string | null
  username: string | null
  playerSymbol: PlayerSymbol | null
  players: PlayerInfo[]
  scores: ScoreItem[]
  history: GameHistoryItem[]
  initRoom: (params: { roomId: string; username: string; symbol: PlayerSymbol }) => void
  setPlayers: (players: PlayerInfo[]) => void
  makeMove: (index: number) => MoveResult
  applyRemoteMove: (index: number, symbol: PlayerSymbol) => void
  setScores: (scores: ScoreItem[]) => void
  setHistory: (history: GameHistoryItem[]) => void
  setWaiting: () => void
  setReady: () => void
  resetGame: () => void
  setGameState: (state: GAME_STATE) => void
  state: GAME_STATE
}

const useGameFacade = (): GameFacade => {
  const {
    board,
    xIsNext,
    winner,
    isDraw,
    state,
    roomId,
    username,
    playerSymbol,
    players,
    scores,
    history,
    initRoom,
    setPlayers,
    makeMove,
    applyRemoteMove,
    setScores,
    setHistory,
    setWaiting,
    setReady,
    resetGame,
    setGameState
  } = useGameStore()

  return {
    board,
    xIsNext,
    winner,
    isDraw,
    roomId,
    username,
    playerSymbol,
    players,
    scores,
    history,
    initRoom,
    setPlayers,
    state,
    makeMove,
    applyRemoteMove,
    setScores,
    setHistory,
    setWaiting,
    setReady,
    resetGame,
    setGameState,
  }
}

export default useGameFacade
