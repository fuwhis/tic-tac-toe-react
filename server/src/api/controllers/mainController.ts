import { ConnectedSocket, OnConnect, SocketController, SocketIO } from 'socket-controllers'
import { Server, Socket } from 'socket.io'


@SocketController()
export class MainController {
  // @OnConnect()
  // connection(@ConnectedSocket() socket: Socket) {
  //   console.log(`Client connected: ${socket.id}`)
  // }

  // @OnDisconnect()
  // disconnect(@ConnectedSocket() socket: Socket) {
  //   console.log(`Client disconnected: ${socket.id}`)
  // }

  // @OnMessage('message')
  // handleMessage(@MessageBody() message: string, @ConnectedSocket() socket: Socket, @SocketIO() io: Socket) {
  //   console.log(`Message received: ${message}`)
  //   socket.emit('response', `Received your message: ${message}`)
  // }

  @OnConnect()
  public onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
    console.log(`New socket connection: `, socket.id)

    socket.on("custom_event", (data: any) => {
      console.log("Data: ", data)
    })
  }
}


