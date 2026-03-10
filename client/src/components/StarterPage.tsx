import React from 'react'

const StarterPage: React.FC = () => {
  return (
    <div className='starter-page'>
      <h1>Welcome to Tic-Tac-Toe</h1>
      <div className='starter-options'>
        <button onClick={() => console.log('Start a new game')}>Start New Game</button>
        <button onClick={() => console.log('Join a game')}>Join Game</button>
        <button onClick={() => console.log('Watch a game')}>Watch Game</button>
      </div>
    </div>
  )
}

export default StarterPage
