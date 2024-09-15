import { useState } from 'react'

const JoinRoomComponent = () => {
  const [username, setUsername] = useState('')
  return (
    <div>
      <input type='text' placeholder='Input username' />
    </div>
  )
}

export default JoinRoomComponent
