import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/home/Home'
import About from '../views/about/About'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
    )
}

export default Routes