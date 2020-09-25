import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'

import App from './containers/App/App';

const Routes = (props) => {
    console.log(props)
    return (
        <Switch {...props} >
            <Route path="/" component={App} />
        </Switch>
    )
}

export default withRouter(Routes)
