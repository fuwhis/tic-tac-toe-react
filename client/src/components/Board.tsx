import React from 'react'
import Cell from './Cell'
import { BoardProps } from './types'

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
