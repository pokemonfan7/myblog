import React,{ Component } from 'react'
import { NavBar, InputItem, TextareaItem, WhiteSpace, Button } from 'antd-mobile'
import AvatarS from '../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux'
import { userinfo } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'


class User extends Component{
	constructor(props){
		super(props)
		this.state={
			age:'',
			sex:'',
			title:'',
			desc:''
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleConfirm=this.handleConfirm.bind(this)
	}
	handleChange(key,val){
    this.setState({
			[key]:val
		})
	}
	
	handleConfirm(){
		this.props.userinfo(this.state)
	}

	render(){
		const path=this.props.location.pathname
		const redirect=this.props.user.redirectTo
		return (
		  <React.Fragment>
		    {redirect&&redirect!==path?<Redirect to={redirect} />:null}
			<NavBar mode="dark">user</NavBar> 
			<AvatarS selectAvatar={(imgname)=>{this.setState({avatar:imgname})}} />	
            <WhiteSpace />
			<InputItem onChange={(v)=>this.handleChange('age',v)}>
			  年龄
			</InputItem>	
			<WhiteSpace />	
			<InputItem onChange={(v)=>this.handleChange('sex',v)}>
			  性别
			</InputItem>
			<WhiteSpace />
			<InputItem onChange={(v)=>this.handleChange('title',v)}>
			  职业
			</InputItem>	
			<WhiteSpace />
			<TextareaItem 
			  onChange={(v)=>this.handleChange('desc',v)}
				rows={3}
				autoHeight
				title="个人介绍"
			>
			</TextareaItem>
			<Button type="primary" onClick={this.handleConfirm}>确认</Button>
		  </React.Fragment>
		)
	}
}

const mapStateToProps=(state)=>{return {user:state.user}}
const mapDispatchToProps={userinfo}
User = connect(mapStateToProps,mapDispatchToProps)(User)


export default User