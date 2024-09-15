export type EventsMap = {
  message: (data: string) => void
  gameUpdate: (data: { player: string; score: number }) => void
}
