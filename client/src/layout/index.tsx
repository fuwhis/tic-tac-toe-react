import { GameBoard } from '../components'

function GameLayout() {
  return (
    <>
      <section className='app-section' style={{ display: 'flex', flexDirection: 'row' }}>
        {/* <SideBar /> */}
        <section className='content-section' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {/* <Header /> */}
          <main>
            <GameBoard />
          </main>
          {/* <Footer /> */}
        </section>
      </section>
    </>
  )
}

export default GameLayout
