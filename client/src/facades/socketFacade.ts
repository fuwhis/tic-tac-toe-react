import { useCallback } from "react"
import useSocketStore from "../store/socketStore"
import { SocketEventMap } from "../types/socket-types"

const useSocketFacade = () => {
  const { connectSocket, emitEvent, listenToEvent, removeEventListener, disconnectSocket } = useSocketStore()

  const connect = useCallback(async (url: string) => {
    await connectSocket(url)
  }, [connectSocket])

  const emit = useCallback(<K extends keyof SocketEventMap>(event: K, data: SocketEventMap[K]) => {
    emitEvent(event, data)
  }, [emitEvent])

  const onEvent = useCallback(<K extends keyof SocketEventMap>(event: K, callback: (data: SocketEventMap[K]) => void) => {
    listenToEvent(event, callback)
  }, [listenToEvent])

  const offEvent = useCallback(<K extends keyof SocketEventMap>(event: K, callback: (data: SocketEventMap[K]) => void) => {
    removeEventListener(event, callback)
  }, [removeEventListener])

  const disconnect = useCallback(() => {
    disconnectSocket()
  }, [disconnectSocket])

  return {
    connect,
    emit,
    onEvent,
    offEvent,
    disconnect
  }
}

export default useSocketFacade
