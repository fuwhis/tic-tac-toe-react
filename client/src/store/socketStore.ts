import { create } from "zustand"
import socketService from "../services/socket-service"
import { SocketEventMap } from '../types/socket-types'

type SocketState = {
  socketConnected: boolean,
  connectSocket: (url: string) => Promise<void>,
  emitEvent: <K extends keyof SocketEventMap>(event: K, data: SocketEventMap[K]) => void,
  listenToEvent: <K extends keyof SocketEventMap>(event: K, callback: (data: SocketEventMap[K]) => void) => void,
  removeEventListener: <K extends keyof SocketEventMap>(event: K, callback: (data: SocketEventMap[K]) => void) => void,
  disconnectSocket: () => void
}

// const rooms = {
//   "123": ["lupvsdjflksdjfkdsfj", "fskdfjsdkfjdksjfdskf"]
// }

const useSocketStore = create<SocketState>((set) => ({
  socketConnected: false,

  connectSocket: async (url: string) => {
    try {
      const socket = await socketService.connect(url)
      if (socket.connected === true) {
        set({ socketConnected: true })
      }
      console.log('[ZUSTAND_SOCKET]: Connected to the socket server')
    } catch (err) {
      console.error('[ZUSTAND_SOCKET]: Socket connection failed:', err)
      set({ socketConnected: false })
    }
  },

  emitEvent: (event, data) => {
    console.log('emit store---', event, data)
    socketService.emit(event, data)
  },

  listenToEvent: (event, callback) => {
    socketService.on(event, callback)
  },

  removeEventListener: (event, callback) => {
    socketService.off(event, callback)
  },

  disconnectSocket: () => {
    socketService.disconnect()
    set({ socketConnected: false })
    console.log('[ZUSTAND_SOCKET]Socket disconnected')
  }
}))

export default useSocketStore
