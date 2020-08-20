import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../../pages/Landing'
import AboutUs from '../../pages/AboutUs'

export default function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            {/* <Route path='/about' exact component={AboutUs} /> */}
            <Route path="/about" exact component={Landing} />
            <Route component={Landing} />
        </Switch>
    )
}
