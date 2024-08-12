const { Server } = require('socket.io')


const io = new Server("http://localhost:3000")

io.on("connect", (socket) => {
  console.log('first', socket)
})
