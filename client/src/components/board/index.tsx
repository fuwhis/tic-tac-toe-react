import { BoardProps } from '../../types/game-types'
import Cell from '../cell'
import styles from './game-board.module.scss'

const Board = ({ cells, onClick }: BoardProps) => {
  return (
    <div className={styles.game_board}>
      {cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => onClick(index)}
          cellStyle={item === 'X' ? styles.is_x : item === 'O' ? styles.is_o : ''}
        />
      ))}
    </div>
  )
}

export default Board
