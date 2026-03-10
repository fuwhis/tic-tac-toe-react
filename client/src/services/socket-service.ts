import { io, Socket } from "socket.io-client"
import { SocketEventMap } from "../types/socket-types"

class SocketService {
  public socket: Socket | null = null

  public connect(url: string): Promise<Socket> {
    return new Promise((resolve, reject) => {
      if (this.socket?.connected) {
        resolve(this.socket)
        return
      }

      this.socket = io(url)

      if (!this.socket) {
        reject(this.socket)
        return
      }

      this.socket.on("connect", () => {
        console.log("Connect to server")
        resolve(this.socket as Socket)
      })

      this.socket.on("connect_error", (err) => {
        console.error("Connection error:", err)
        reject(err)
      })
    })
  }

  public emit<K extends keyof SocketEventMap>(event: K, data: SocketEventMap[K]): void {
    if (this.socket) {
      this.socket.emit(event, data)
    } else {
      console.error("Socket not connected.")
    }
  }

  public on<K extends keyof SocketEventMap>(event: K, callback: (data: SocketEventMap[K]) => void): void {
    if (this.socket) {
      this.socket.on(event, callback)
    }
  }

  public off<K extends keyof SocketEventMap>(event: K, callback: (data: SocketEventMap[K]) => void): void {
    if (this.socket) {
      this.socket.off(event, callback)
    }
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
  }

  public isConnect(): boolean {
    return this.socket !== null && this.socket.connected
  }
}

export default new SocketService()
