import { Button } from '../../shared'
import useGameFacade from '../../facades/gameFacade'
import useSocketFacade from '../../facades/socketFacade'
import Board from '../board'
import styles from './game.module.scss'

const Game = () => {
  const { emit } = useSocketFacade()
  const {
    board,
    xIsNext,
    winner,
    isDraw,
    playerSymbol,
    state,
    scores,
    history,
    makeMove,
    resetGame
  } = useGameFacade()

  const expectedSymbol = xIsNext ? 'X' : 'O'
  const canPlayTurn = playerSymbol === expectedSymbol

  const handleClick = (index: number) => {
    const result = makeMove(index)
    if (!result.moved || !playerSymbol) {
      return
    }

    emit('update_game', { index, symbol: playerSymbol })
    if (result.winnerSymbol || result.isDraw) {
      emit('game_win', { winnerSymbol: result.winnerSymbol ?? null, isDraw: Boolean(result.isDraw) })
    }
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
      <div className={styles.score_section}>
        <h3>Score</h3>
        {scores.length === 0 ? (
          <div className={styles.empty_text}>No score yet.</div>
        ) : (
          <ul className={styles.score_list}>
            {scores.map((score) => (
              <li key={score.playerName}>
                {score.playerName}: {score.wins}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.history_section}>
        <h3>Game History</h3>
        <table className={styles.history_table}>
          <thead>
            <tr>
              <th>Thời gian chơi</th>
              <th>Ghép trận</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan={3} className={styles.empty_text}>Chưa có dữ liệu.</td>
              </tr>
            ) : (
              history.map((item, index) => (
                <tr key={`${item.playedAt}-${index}`}>
                  <td>{new Date(item.playedAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' })}</td>
                  <td>{item.match}</td>
                  <td>{item.winner}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Game
