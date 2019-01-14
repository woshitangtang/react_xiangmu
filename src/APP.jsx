import React from 'react'
import ReactDOM from 'react-dom'
import Proptypes from 'prop-types'
import {Route} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'



export default class APP extends React.Component {
    render() {
        return (
            <div>
                <Route path="/admin" component={Admin}/>
                <Route path="/login" component={Login}/>
            </div>
        )
    }
}