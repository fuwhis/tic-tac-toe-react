export type PlayerSymbol = 'X' | 'O'

export type PlayerInfo = {
  id: string
  username: string
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
  winner: PlayerSymbol | null
  isDraw: boolean
}

export type RoomErrorPayload = {
  error: string
}

export type SocketEventMap = {
  join_game: { username: string; roomId: string }
  update_game: MovePayload
  game_win: WinPayload
  room_joined: RoomJoinedPayload
  waiting_for_player: WaitingPayload
  start_game: StartGamePayload
  room_join_error: RoomErrorPayload
  on_game_update: MovePayload
  on_game_win: WinPayload
  player_left: WaitingPayload
}
