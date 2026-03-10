import { GAME_STATE } from "../constants/common"
import useGameStore from "../store/gameStore"
import { PlayerInfo, PlayerSymbol } from "../types/socket-types"
import { CellValue } from "../types/game-types"

type GameFacade = {
  board: CellValue[]
  xIsNext: boolean
  winner: string | null
  isDraw: boolean
  roomId: string | null
  username: string | null
  playerSymbol: PlayerSymbol | null
  players: PlayerInfo[]
  initRoom: (params: { roomId: string; username: string; symbol: PlayerSymbol }) => void
  setPlayers: (players: PlayerInfo[]) => void
  makeMove: (index: number) => boolean
  applyRemoteMove: (index: number, symbol: PlayerSymbol) => void
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
    initRoom,
    setPlayers,
    makeMove,
    applyRemoteMove,
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
    initRoom,
    setPlayers,
    state,
    makeMove,
    applyRemoteMove,
    setWaiting,
    setReady,
    resetGame,
    setGameState,
  }
}

export default useGameFacade
