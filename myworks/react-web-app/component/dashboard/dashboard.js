import React,{ Component } from 'react'
import { NavBar } from 'antd-mobile'
import  NavLink from '../navlink/navlink'
import { Switch, Route } from 'react-router-dom'
import Userinfo from '../userinfo/userinfo'
import Article from '../article/article'
import Myinfo from '../myinfo/myinfo'

class Dashboard extends Component{
	
  render(){
      const pathname=this.props.location.pathname
    const navList=[
        {
            path:'/userinfo',
            text:'userinfo',
            icon:'boss',
            title:'用户',
            component:Userinfo
        },
        {
            path:'/article',
            text:'article',
            icon:'job',
            title:'文章',
            component:Article
        },
        {
            path:'/myinfo',
            text:'myinfo',
            icon:'user',
            title:'个人信息',
            component:Myinfo
        }
    ]
      return (
          <div>
          <NavBar className="fixed-header" mode="dard">{navList.find(v=>v.path===pathname).title}</NavBar>
          <div>
		    <Switch>
			{
				navList.map(v=>(<Route key={v.path} path={v.path} component={v.component} />))
			}
			</Switch>
		  </div>

          <NavLink data={navList}></NavLink>
          </div>
      )
  }
}


export default Dashboard