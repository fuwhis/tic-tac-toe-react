import { useState } from 'react'

const JoinRoomComponent = () => {
  const [username, setUsername] = useState('')

  const handleInput = (event: any) => {
    const input = event.target.value
    return input
  }

  return (
    <div>
      <input type='text' placeholder='Input username' onChange={handleInput} />
    </div>
  )
}

export default JoinRoomComponent
