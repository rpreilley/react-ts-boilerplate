import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/home/Home'
import About from '../views/about/About'
import HomeIcon from '@material-ui/icons/HomeSharp'
import InfoIcon from '@material-ui/icons/InfoSharp'

interface IRoute {
  name: string
  icon?: React.ComponentType
  path: string
  component: React.ComponentClass
}

export const routes: Array<IRoute> = [
  {
    name: 'Home',
    icon: HomeIcon,
    path: '/',
    component: Home
  },
  {
    name: 'About',
    icon: InfoIcon,
    path: '/about',
    component: About
  }
]

const Routes: React.FC = () => {
    return (
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            key={route.name}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    )
}

export default Routes