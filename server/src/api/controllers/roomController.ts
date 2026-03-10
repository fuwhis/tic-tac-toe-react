import { ConnectedSocket, MessageBody, OnMessage, SocketController, SocketIO } from "socket-controllers"
import { Server, Socket } from "socket.io"

@SocketController()
export class RoomController {
  private getRoomId(socket: Socket): string | null {
    const socketRooms = Array.from(socket.rooms.values()).filter((r) => r !== socket.id)
    return socketRooms[0] ?? null
  }

  @OnMessage("join_game")
  public async joinGame(@SocketIO() io: Server, @ConnectedSocket() socket: Socket, @MessageBody() message: any) {
    const roomId = String(message?.roomId ?? "").trim()
    const username = String(message?.username ?? "").trim()

    if (!roomId || !username) {
      socket.emit("room_join_error", { error: "Username and room ID are required." })
      return
    }

    const existingRoomId = this.getRoomId(socket)
    if (existingRoomId) {
      socket.emit("room_join_error", { error: "You are already in a game room." })
      return
    }

    const connectedSockets = io.sockets.adapter.rooms.get(roomId)
    if (connectedSockets && connectedSockets.size >= 2) {
      socket.emit("room_join_error", {
        error: "Room is full please choose another room to play"
      })
      return
    }

    socket.data.username = username
    socket.data.roomId = roomId
    await socket.join(roomId)
    console.log(`--user: ${username} joined room: ${roomId}`)

    const updatedRoom = io.sockets.adapter.rooms.get(roomId)
    const playerCount = updatedRoom ? updatedRoom.size : 0
    const symbol = playerCount === 1 ? "X" : "O"

    socket.emit("room_joined", { roomId, username, symbol })
    if (playerCount === 1) {
      io.to(roomId).emit("waiting_for_player", {
        roomId,
        message: "Waiting for another player..."
      })
    } else if (playerCount === 2) {
      const roomSockets = Array.from(updatedRoom || [])
      const players = roomSockets.map((socketId) => {
        const currentSocket = io.sockets.sockets.get(socketId)
        return {
          id: socketId,
          username: currentSocket?.data?.username || `Player-${socketId.slice(0, 4)}`
        }
      })

      io.to(roomId).emit("start_game", {
        roomId,
        message: "Both players have joined. Starting the game...",
        players
      })
    }
  }
}
