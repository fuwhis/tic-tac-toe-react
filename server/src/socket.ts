import { useSocketServer } from 'socket-controllers'
import { Server } from "socket.io"

export default (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*"
    },
  })

  io.on("connection", (socket) => {
    console.log('connection_id', socket.id)
  })

  useSocketServer(io, {
    controllers: [__dirname + "/api/controllers/*.ts"]
  })

  return io
}
