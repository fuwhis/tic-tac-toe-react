import React, { useState } from 'react'
import { calculateWinner } from '../utils'
import Board from './Board'
import './GameStyles.css'
import { CellValue } from './types'

const Game: React.FC = () => {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const winner = calculateWinner(board)

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
    <div>
      <Board cells={board} onClick={handleClick} />
      {winner && <div className='game-winner-lb'>Winner is {winner}</div>}
      <button onClick={handleResetGame}>Reset game</button>
    </div>
  )
}

export default Game
