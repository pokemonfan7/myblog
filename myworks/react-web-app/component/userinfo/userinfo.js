import React,{ Component } from 'react'
import './userinfo.css'

class Userinfo extends Component{
	render(){
		return (
		<React.Fragment>
		  <main>
<div className="m_userinfo">
    <div className="m_infotop">
        <div className="m_img">
            <img src={require("./fw.png")} alt="" />
        </div>
        <div className="m_infor">
            <ul>
                <li><a href="">77</a>照片</li>
                <li><a href="">456</a>粉丝</li>
                <li><a href="">213</a>关注</li>
            </ul>
            <a href="" className="infoset">编辑资料</a>
        </div>
    </div>
    <p className="info_p">凤王是一种类似凤凰和孔雀的宝可梦。其羽毛多数为金色和红色，尾羽为黄色，身体暗面的羽毛为白色，
        双翼顶端的羽毛呈绿色。凤王的双翼呈棱镜形，这使得其在飞行时能够于身后形成彩虹。</p>
</div>
    <ul className="img_list" id="imgList">
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/1.jpg" /></li>      
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/2.jpg" /></li>
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/3.jpg" /></li>
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/4.jpg" /></li>
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/5.jpg" /></li>
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/6.jpg" /></li>
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/7.jpg" /></li>
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/8.jpg" /></li>
        <li><img src={require("./images/1.jpg")} alt="" data-src="images/9.jpg" /></li>
    </ul>
</main>
		</React.Fragment>
		)
	}
}

export default Userinfo