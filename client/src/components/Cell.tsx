import React from 'react'
import { CellProps } from '../types/game-types'

const Cell: React.FC<CellProps> = ({ value, onClick, cellStyle }) => {
  return (
    <div className={`game-cell ${cellStyle}`} onClick={onClick}>
      {value}
    </div>
  )
}

export default Cell
