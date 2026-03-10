import React from 'react'
import { useRoutes } from 'react-router-dom'
import Game from '../components/game'
import Home from '../components/home'
import Layout from '../layout'

const Routes: React.FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'game', element: <Game /> }
      ]
    }
  ])

  return routes
}

export default Routes
