import { useState } from 'react'
import { Button, Typography } from '../../shared'
import JoinRoomComponent from '../join-room'
import styles from './home.module.scss'

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleStartGame = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <div className={styles.home}>
      <h1>Welcome to Tic-Tac-Toe</h1>
      <Typography color='solid_mint.1'>Challenge a friend in this classic game of strategy and skill!</Typography>
      <Button buttonColor='primary' buttonSize='md' onClick={handleStartGame} className={styles.start_game_button}>
        Start Game
      </Button>
      {isModalVisible && <JoinRoomComponent onClose={handleCloseModal} />}
    </div>
  )
}

export default Home
