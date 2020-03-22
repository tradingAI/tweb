import { IsLoggedIn } from 'client/session'
import Login from 'components/session/Login'
import Index from 'components/index/Index'
import React from 'react';
import { Route } from 'react-router-dom'
import { URLRoot} from 'common'

interface State {
    failed: boolean
}

export default class App extends React.Component<{}, State> {
    componentDidMount() {
    }

    render() {
        return (
            (!IsLoggedIn()) ? (
                <Route exact={true} path={URLRoot} component={Login} />
            ) : (
                <Route path={URLRoot} component={Index}/>
            )
        )
    }
}
