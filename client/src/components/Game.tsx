import React, { useReducer } from 'react'
import { calculateWinner } from '../utils'
import Board from './Board'
import './GameStyles.css'
import { GameAction, GameState } from './types'

const initialState: GameState = {
  board: Array(9).fill(null),
  xIsNext: true
}

const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case 'CLICK':
      const { board, xIsNext } = state
      const boardCopy = [...board]
      const winner = calculateWinner(board)

      if (winner || boardCopy[action.index]) {
        return state
      }

      // Update the board and toggle player
      boardCopy[action.index] = xIsNext ? 'X' : 'O'

      return {
        ...state,
        board: boardCopy,
        xIsNext: !xIsNext
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

const Game: React.FC = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const { board, xIsNext } = state
  const winner = calculateWinner(board)
  const isDraw = board.every((cell) => cell !== null) && !winner

  const handleClick = (index: number) => {
    dispatch({ type: 'CLICK', index })
  }

  const handleResetGame = () => {
    // In case, reset game then the game just only start by 'X'
    // setXIsNext(true)
    dispatch({ type: 'RESET' })
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
