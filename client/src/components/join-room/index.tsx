import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { GAME_STATE } from '../../constants/common'
import useGameFacade from '../../facades/gameFacade'
import useSocketFacade from '../../facades/socketFacade'

interface RoomFormProps {
  onClose: () => void
}

const JoinRoomComponent = ({ onClose }: RoomFormProps) => {
  const { emit } = useSocketFacade()
  const { setGameState } = useGameFacade()

  const handleOpenForm = () => {
    let usernameInput: HTMLInputElement
    let roomIdInput: HTMLInputElement

    Swal.fire<any>({
      title: 'Enter Room ID to Join the Game',
      html: `
        <input type="text" id="username" class="swal2-input" placeholder="Type username">
        <input type="text" id="room_id" class="swal2-input" placeholder="Room ID">
      `,
      confirmButtonText: 'Join',
      focusConfirm: false,
      didOpen: () => {
        const popup = Swal.getPopup()!
        usernameInput = popup.querySelector('#username') as HTMLInputElement
        roomIdInput = popup.querySelector('#room_id') as HTMLInputElement

        usernameInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
        // passwordInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
        roomIdInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
      },
      // didClose: () => {
      //   // used when user click cancel button but not type on any input field
      // },
      preConfirm: () => {
        const roomId = roomIdInput.value.trim()
        const username = usernameInput.value.trim()
        // const password = passwordInput.value
        if (!username || !roomId) {
          Swal.showValidationMessage(`Please enter Username and Room name`)
          return null // Returning null to indicate validation failed
        }
        return { username, roomId }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const { username, roomId } = result.value!
        emit('join_game', { username, roomId: String(roomId) })
        setGameState(GAME_STATE.JOINING)
      }

      onClose()
    })
  }

  useEffect(() => {
    handleOpenForm()
  }, [onClose, emit, setGameState])

  return null
}

export default JoinRoomComponent
