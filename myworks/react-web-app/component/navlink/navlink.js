import React,{ Component } from 'react'
import { TabBar } from 'antd-mobile'
import {withRouter} from 'react-router-dom' 

class NavLink extends Component{
    
    render(){
        const navList=this.props.data
		const pathname=this.props.location.pathname
        return (
            <TabBar>
                {navList.map(v=>
                (<TabBar.Item 
                    key={v.path} 
                    title={v.text} 
                    icon={{uri: require(`./navimg/${v.icon}.png`)}}
                    selectedIcon={{uri: require(`./navimg/${v.icon}-active.png`)}}
                    selected={pathname===v.path}
                    onPress={()=>this.props.history.push(v.path)}
                >
                </TabBar.Item>)
                )  
                }
            </TabBar>
        )
    }
}

export default withRouter(NavLink)