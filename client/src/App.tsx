import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '~/assets/scss/global.scss'
import { Spinner } from './components'
import { GAME_STATE } from './constants/common'
import useGameFacade from './facades/gameFacade'
import useSocketFacade from './facades/socketFacade'
import Routes from './routes'
import { MovePayload, RoomErrorPayload, RoomJoinedPayload, StartGamePayload, WaitingPayload, WinPayload } from './types/socket-types'

function App() {
  const [_isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { connect, onEvent, offEvent } = useSocketFacade()
  const {
    state,
    initRoom,
    setWaiting,
    setReady,
    setPlayers,
    resetGame,
    applyRemoteMove,
    setGameState
  } = useGameFacade()

  useEffect(() => {
    if (state === GAME_STATE.WAITING_FOR_PLAYER) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [state])

  useEffect(() => {
    connect(import.meta.env.VITE_SERVER_PORT)
  }, [connect])

  useEffect(() => {
    const handleRoomJoined = (payload: RoomJoinedPayload) => {
      initRoom(payload)
      setWaiting()
      navigate('/game')
    }

    const handleWaiting = (_payload: WaitingPayload) => {
      setWaiting()
    }

    const handleStartGame = (payload: StartGamePayload) => {
      setPlayers(payload.players)
      resetGame()
      setReady()
      setGameState(GAME_STATE.IN_PROGRESS)
    }

    const handleRoomError = (payload: RoomErrorPayload) => {
      Swal.fire({
        icon: 'error',
        title: 'Unable to join room',
        text: payload.error
      })
      setGameState(GAME_STATE.NOT_STARTED)
      navigate('/')
    }

    const handleGameUpdate = (payload: MovePayload) => {
      applyRemoteMove(payload.index, payload.symbol)
    }

    const handleGameWin = (_payload: WinPayload) => {
      setGameState(GAME_STATE.GAME_OVER)
    }

    const handlePlayerLeft = (payload: WaitingPayload) => {
      Swal.fire({
        icon: 'info',
        title: 'Player disconnected',
        text: payload.message
      })
      resetGame()
      setWaiting()
    }

    onEvent('room_joined', handleRoomJoined)
    onEvent('waiting_for_player', handleWaiting)
    onEvent('start_game', handleStartGame)
    onEvent('room_join_error', handleRoomError)
    onEvent('on_game_update', handleGameUpdate)
    onEvent('on_game_win', handleGameWin)
    onEvent('player_left', handlePlayerLeft)

    return () => {
      offEvent('room_joined', handleRoomJoined)
      offEvent('waiting_for_player', handleWaiting)
      offEvent('start_game', handleStartGame)
      offEvent('room_join_error', handleRoomError)
      offEvent('on_game_update', handleGameUpdate)
      offEvent('on_game_win', handleGameWin)
      offEvent('player_left', handlePlayerLeft)
    }
  }, [applyRemoteMove, initRoom, navigate, offEvent, onEvent, resetGame, setGameState, setPlayers, setReady, setWaiting])

  return (
    <>
      <Routes />
      <Spinner isLoading={_isLoading} />
    </>
  )
}

export default App
