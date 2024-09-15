import { io, Socket } from "socket.io-client"
import { EventsMap } from "../types/socket-types"

class SocketService {
  public socket: Socket<EventsMap> | null = null

  public connect(url: string): Promise<Socket<EventsMap>> {
    return new Promise((resolve, reject) => {
      this.socket = io(url)

      if (!this.socket) {
        reject(this.socket)
      }

      this.socket.on("connect", () => {
        console.log("Connect to server")
        resolve(this.socket as Socket<EventsMap>)
      })

      this.socket.on("connect_error", (err) => {
        console.error("Connection error:", err)
        reject(err)
      })
    })
  }

  public emit(event: keyof EventsMap, data: any): void {
    if (this.socket) {
      this.socket.emit(event, data)
    } else {
      console.error("Socket not connected.")
    }
  }

  public on(event: any, callback: (data: any) => void): void {
    if (this.socket) {
      this.socket.on(event, callback)
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
