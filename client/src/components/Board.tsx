import React from 'react'
import { BoardProps } from '../types/game-types'
import Cell from './Cell'

const Board: React.FC<BoardProps> = ({ cells, onClick }) => {
  return (
    <div className='game-board'>
      {cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => onClick(index)}
          cellStyle={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}
        />
      ))}
    </div>
  )
}

export default Board
