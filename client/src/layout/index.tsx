import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <div className='app'>
      {/* <Header /> */}
      <main>
        <Outlet /> {/* This will render the current route component */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
