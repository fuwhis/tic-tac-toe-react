import { useRoutes } from 'react-router-dom'
import GameLayout from '../layout'

const Routes = () => {
  const routes = useRoutes([
    {
      element: <GameLayout />,
      children: []
    }
  ])

  return routes
}

export default Routes
