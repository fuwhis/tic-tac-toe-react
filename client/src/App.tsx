import { useEffect, useState } from 'react'
import './App.scss'
import Game from './components/Game'
import socketService from './services/socket-service'

function App() {
  const [connect, setConnect] = useState(false)

  /**
   * Establish connecting function
   */
  const connectSocket = async () => {
    try {
      const socket = await socketService.connect(import.meta.env.VITE_SERVER_PORT)

      if (socket.connected === true) {
        setConnect(true)
      }
      console.log('watching---', socket)
    } catch (error) {
      console.error('Error: ', error)
    }
  }

  useEffect(() => {
    connectSocket()
  }, [connect])

  return (
    <div className='app'>
      <h2>TIC TAC TOE</h2>
      <Game />
    </div>
  )
}

export default App
