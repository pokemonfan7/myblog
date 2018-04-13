import React,{ Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, Button }from 'antd-mobile'
import {login} from '../../redux/user.redux'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../../index.css'



class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			user:'',
			pwd:''
		}
		this.register=this.register.bind(this)
		this.handleLogin=this.handleLogin.bind(this)
		this.handleChange=this.handleChange.bind(this)
	}
	
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	
	handleLogin(){
		this.props.login(this.state)
	}
	
	register(){
		console.log(this.props)
		this.props.history.push('/register')
	}
	
	render(){
		return (
		  <div>
		    {this.props.user.redirectTo?<Redirect to={this.props.user.redirectTo} />:null}
		    <Logo />
			{this.props.user.msg?<p className="error-msg">{this.props.user.msg}</p>:null}
			
			  <List>
			    <InputItem
				  onChange={v=>this.handleChange('user',v)}
				>
				用户
				</InputItem>
				<WhiteSpace />
				<InputItem
				  type="password"
				  onChange={v=>this.handleChange('pwd',v)}
				>
				密码
				</InputItem>
			  </List>
			  <WhiteSpace />
			  <Button type="primary" onClick={this.handleLogin}>登录</Button>
			  <WhiteSpace />
			  <Button onClick={this.register} type="primary">注册</Button>
			
		  </div>
		)
	}
}


const mapStateToProps=(state)=>{return {user:state.user}}
const mapDispatchToProps={login}
Login = connect(mapStateToProps,mapDispatchToProps)(Login)

export default Login

//使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。
//mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。
//也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。