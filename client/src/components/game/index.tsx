import { Button } from '../../shared'
import useGameFacade from '../../facades/gameFacade'
import useSocketFacade from '../../facades/socketFacade'
import Board from '../board'
import styles from './game.module.scss'

const Game = () => {
  const { emit } = useSocketFacade()
  const { board, xIsNext, winner, isDraw, playerSymbol, state, makeMove, resetGame } = useGameFacade()

  const expectedSymbol = xIsNext ? 'X' : 'O'
  const canPlayTurn = playerSymbol === expectedSymbol

  const handleClick = (index: number) => {
    const moved = makeMove(index)
    if (!moved || !playerSymbol) {
      return
    }

    emit('update_game', { index, symbol: playerSymbol })
  }

  const handleResetGame = () => {
    resetGame()
  }

  const statusText = winner
    ? `Winner is ${winner}`
    : isDraw
      ? 'End game!'
      : `Next player: ${expectedSymbol}`

  return (
    <div className='game'>
      <div className={styles.game_info}>
        You are: {playerSymbol ?? 'N/A'} | State: {state}
      </div>
      {!winner && !isDraw && (
        <div className={styles.game_info}>
          {canPlayTurn ? 'Your turn' : 'Opponent turn'}
        </div>
      )}
      <Board cells={board} onClick={handleClick} />
      <div className={styles.game_info}>{statusText}</div>
      <Button buttonColor='primary' buttonSize='md' onClick={handleResetGame} disabled={!isDraw && winner === null}>
        Reset game
      </Button>
    </div>
  )
}

export default Game
