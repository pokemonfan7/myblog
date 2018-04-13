import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Result, List, Brief, WhiteSpace } from 'antd-mobile'
import { Redirect } from 'react-router-dom'

class Myinfo extends Component{
	
	render(){
		const props=this.props.user.avatar
		const Item=List.Item
		const Brief=Item.Brief
		return props?(
		
		<React.Fragment>
		  {this.props.user.isAuth?null:<Redirect to={this.props.user.redirectTo} />}
		  <Result 
		    img={<img src={require(`../img/${this.props.user.avatar}.png`)} style={{width:40}} alt="" />} 
			title={this.props.user.user}
		  />
		  <List renderHeader={()=>'简介'}>
		    <Item>
			  年龄
			  <Brief>{this.props.user.age}</Brief>
			</Item>
			<Item>
			  性别
			  <Brief>{this.props.user.sex}</Brief>
			</Item>
			<Item>
			  职业
			  <Brief>{this.props.user.title}</Brief>
			</Item>
			<Item>
			  个人介绍
			  <Brief>{this.props.user.desc}</Brief>
			</Item>
		  </List>
		  <WhiteSpace />
		</React.Fragment>
		):null
		
	}
}

const mapStateToProps=(state)=>{return {user:state.user}}
const mapDispatchToProps={}
Myinfo = connect(mapStateToProps,mapDispatchToProps)(Myinfo)

export default Myinfo