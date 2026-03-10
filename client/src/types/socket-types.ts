export type PlayerSymbol = 'X' | 'O'

export type PlayerInfo = {
  id: string
  username: string
  symbol?: PlayerSymbol
}

export type RoomJoinedPayload = {
  roomId: string
  username: string
  symbol: PlayerSymbol
}

export type WaitingPayload = {
  roomId: string
  message: string
}

export type StartGamePayload = {
  roomId: string
  message: string
  players: PlayerInfo[]
}

export type MovePayload = {
  index: number
  symbol: PlayerSymbol
}

export type WinPayload = {
  winnerSymbol: PlayerSymbol | null
  winnerName?: string
  isDraw: boolean
  scores?: ScoreItem[]
  history?: GameHistoryItem[]
}

export type RoomErrorPayload = {
  error: string
}

export type ScoreItem = {
  playerName: string
  wins: number
}

export type GameHistoryItem = {
  playedAt: string
  match: string
  winner: string
}

export type SocketEventMap = {
  join_game: { username: string; roomId: string }
  update_game: MovePayload
  game_win: { winnerSymbol: PlayerSymbol | null; isDraw: boolean }
  get_game_history: { limit?: number }
  room_joined: RoomJoinedPayload
  waiting_for_player: WaitingPayload
  start_game: StartGamePayload
  room_join_error: RoomErrorPayload
  on_game_update: MovePayload
  on_game_win: WinPayload
  player_left: WaitingPayload
  game_history: { items: GameHistoryItem[] }
}
