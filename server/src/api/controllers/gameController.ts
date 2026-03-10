import { ConnectedSocket, MessageBody, OnMessage, SocketController, SocketIO } from "socket-controllers"
import { Server, Socket } from "socket.io"
import { getRecentGames, getScoresByPlayers, saveGameResult } from "../../db/sqlite"

type GameWinMessage = {
  winnerSymbol: "X" | "O" | null
  isDraw: boolean
}

@SocketController()
export class GameController {
  private getSocketGameRoom(socket: Socket): string | null {
    const socketRooms = Array.from(socket.rooms.values()).filter((r) => r !== socket.id)
    return socketRooms[0] ?? null
  }

  @OnMessage("update_game")
  public async updateGame(@ConnectedSocket() socket: Socket, @MessageBody() message: any) {
    const gameRoom = this.getSocketGameRoom(socket)
    if (!gameRoom) {
      socket.emit("room_join_error", { error: "You are not in a game room." })
      return
    }

    const index = Number(message?.index)
    const symbol = message?.symbol
    if (!Number.isInteger(index) || index < 0 || index > 8 || (symbol !== "X" && symbol !== "O")) {
      socket.emit("room_join_error", { error: "Invalid game move payload." })
      return
    }

    socket.to(gameRoom).emit("on_game_update", message)
  }

  @OnMessage("game_win")
  public async gameWin(@SocketIO() io: Server, @ConnectedSocket() socket: Socket, @MessageBody() message: GameWinMessage) {
    const gameRoom = this.getSocketGameRoom(socket)
    if (!gameRoom) {
      socket.emit("room_join_error", { error: "You are not in a game room." })
      return
    }

    const roomSocketIds = Array.from(io.sockets.adapter.rooms.get(gameRoom) || [])
    const players = roomSocketIds
      .map((socketId) => io.sockets.sockets.get(socketId))
      .filter(Boolean)
      .map((clientSocket) => ({
        username: String(clientSocket?.data?.username || ""),
        symbol: clientSocket?.data?.symbol === "O" ? "O" : "X"
      }))
      .sort((a, b) => (a.symbol === "X" ? 0 : 1) - (b.symbol === "X" ? 0 : 1))

    if (players.length < 2) {
      socket.emit("room_join_error", { error: "Cannot resolve players in room." })
      return
    }

    const winnerSymbol = message?.winnerSymbol === "X" || message?.winnerSymbol === "O" ? message.winnerSymbol : null
    const isDraw = Boolean(message?.isDraw)
    const winnerName = isDraw
      ? "Draw"
      : players.find((player) => player.symbol === winnerSymbol)?.username || "Unknown"

    const playedAt = new Date().toISOString()
    saveGameResult({
      playedAt,
      player1: players[0].username,
      player2: players[1].username,
      winner: winnerName
    })

    const scores = getScoresByPlayers([players[0].username, players[1].username])
    const history = getRecentGames(20)

    io.to(gameRoom).emit("on_game_win", {
      winnerName,
      winnerSymbol,
      isDraw,
      scores,
      history
    })
  }

  @OnMessage("get_game_history")
  public async getGameHistory(@ConnectedSocket() socket: Socket, @MessageBody() message: any) {
    const limit = Number(message?.limit)
    const normalizedLimit = Number.isInteger(limit) && limit > 0 ? Math.min(limit, 100) : 20
    const history = getRecentGames(normalizedLimit)
    socket.emit("game_history", { items: history })
  }
}
