import React from 'react'
import ReactDOM from 'react-dom'
import Proptypes from 'prop-types'
import logo from '../../seeent/img/logo.png'
import './index.less'
import {Form,Button,Icon,Input} from 'antd'

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
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
    }
}
class LoginForm extends React.Component{
    checkMsg = (rule,value,callback)=>{

        if(!value){
            callback('必须输入密码')
        }else if(value.length < 4 || value.length >8){
            callback('密码是4-8位')
        }else {
            callback()
        }
    }

    clickHandle = ()=>{
        this.props.form.validateFields((error,values)=>{

            if(!error){
                alert(values)
            }else {
                this.props.form.resetFields()
            }
        })
        // const userName = this.props.form.getFieldValue('userName')
        // alert(userName)
    }


    render(){
        const {getFieldDecorator} = this.props.form
         return (
            <Form className="login-form">
                <Form.Item>
                    {
                        getFieldDecorator('userName',{
                            initialValue:'admin',
                            rules:[
                                {required:true,message:'必须输入用户名'},
                                {min:4,message:'不少于4个字符'}
                                ]

                        })(<Input placeholder="請輸入用戶名" prefix={<Icon type="user"/>}/>)
                    }

                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('',{
                            initialValue:'123',
                            rules:[{validator:this.checkMsg}]

                        })(<Input type="password" placeholder="請輸入密碼" prefix={<Icon type="lock"/>}/>)
                    }

                </Form.Item>
                <Form.Item>
                    <Button className='login-form-button' type="primary" onClick={this.clickHandle}>登录</Button>
                </Form.Item>
            </Form>
        )
    }
}

LoginForm = Form.create()(LoginForm)
