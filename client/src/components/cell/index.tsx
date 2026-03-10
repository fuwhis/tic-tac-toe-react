import { CellProps } from '../../types/game-types'
import styles from './game-cell.module.scss'

const Cell = ({ value, onClick, cellStyle }: CellProps) => {
  return (
    <div className={`${styles.game_cell} ${cellStyle}`} onClick={onClick}>
      {value}
    </div>
  )
}

export default Cell
