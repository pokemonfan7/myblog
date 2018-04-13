import React,{ Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, Button }from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import '../../index.css'

class Register extends Component{
	constructor(props){
		super(props);
		this.state={
			use:'',
			pwd:'',
			repeatpwd:''
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleRegister=this.handleRegister.bind(this)
		
	}
	
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	
	handleRegister(){
		this.props.register(this.state)
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
				>用户名</InputItem>
				<WhiteSpace />
				<InputItem
				  type="password"
				  onChange={v=>this.handleChange('pwd',v)}
				>密码</InputItem>
				<WhiteSpace />
				<InputItem
				  type="password"
				  onChange={v=>this.handleChange('repeatpwd',v)}
				>确认密码</InputItem>
                <WhiteSpace />
				<Button type="primary" onClick={this.handleRegister}>注册</Button>
			</List>
		  </div>
		)
	}
}

const mapStateToProps=(state)=>{return {user:state.user}}
const mapDispatchToProps={register}
Register = connect(mapStateToProps,mapDispatchToProps)(Register)

export default Register