import React from 'react'
import ReactDOM from 'react-dom'
import Proptypes from 'prop-types'
import logo from '../../seeent/img/logo.png'
import './index.less'

export default class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="尚硅谷后台管理系统"/>
                    React后台管理系统2222
                </div>
                <div className="login-content">
                    <div className="login-box">
                        <div className="title">用户登陆</div>
                    </div>
                </div>
            </div>
        )
    }
}
class LoginForm extends React.Component{
    render(){
        return (
            <div></div>
        )
    }
}
