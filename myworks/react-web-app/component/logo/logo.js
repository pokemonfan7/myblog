import React,{ Component } from 'react'
import logoImg from './logo.jpg'
import './logo.css'

class Logo extends Component{
	
	render(){
		return (
		  <div className="logo-container">
		    <img className="logo-jpg" src={logoImg} alt="" />
		  </div>
		)
	}
}

export default Logo