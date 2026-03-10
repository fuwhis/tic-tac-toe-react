import { ConnectedSocket, OnMessage, SocketController } from "socket-controllers"
import { Socket } from "socket.io"

@SocketController()
export class GameController {
  private getSocketGameRoom(socket: Socket): string | null {
    const socketRooms = Array.from(socket.rooms.values()).filter((r) => r !== socket.id)
    return socketRooms[0] ?? null
  }

  @OnMessage("update_game")
  public async updateGame(@ConnectedSocket() socket: Socket, message: any) {
    const gameRoom = this.getSocketGameRoom(socket)
    if (!gameRoom) {
      socket.emit("room_join_error", { error: "You are not in a game room." })
      return
    }

    socket.to(gameRoom).emit("on_game_update", message)
  }

  @OnMessage("game_win")
  public async gameWin(@ConnectedSocket() socket: Socket, message: any) {
    const gameRoom = this.getSocketGameRoom(socket)
    if (!gameRoom) {
      socket.emit("room_join_error", { error: "You are not in a game room." })
      return
    }

    socket.to(gameRoom).emit("on_game_win", message)
  }
}
