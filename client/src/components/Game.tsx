import React, { useState } from 'react'
import { io } from 'socket.io-client'
import { calculateWinner } from '../utils'
import Board from './Board'
import './GameStyles.css'
import { CellValue } from './types'

const socket = io('https://server-domain.com')

const Game: React.FC = () => {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const winner = calculateWinner(board)
  const isDraw = board.every((cell) => cell !== null) && !winner

  const handleClick = (index: number) => {
    const boardCopy = [...board]
    // in case: appear winner or current cell is clicked, -> return
    if (winner || boardCopy[index]) {
      return
    }

    // on position click, return 'X' or 'O'
    boardCopy[index] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXIsNext((xIsNext) => !xIsNext)
  }

  const handleResetGame = () => {
    setBoard(Array(9).fill(null))
    // In case, reset game then the game just only start by 'X'
    // setXIsNext(true)
  }

  return (
    <div className='game'>
      <Board cells={board} onClick={handleClick} />
      {winner ? (
        <div className='game-info'>Winner is {winner}</div>
      ) : isDraw ? (
        <div className='game-info'>End game!</div>
      ) : (
        <div className='game-info'>Next player: {xIsNext ? 'X' : 'O'}</div>
      )}
      <button onClick={handleResetGame} disabled={!isDraw && winner === null}>
        Reset game
      </button>
    </div>
  )
}

export default Game
