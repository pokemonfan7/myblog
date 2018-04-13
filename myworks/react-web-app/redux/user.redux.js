

const ERROR_MSG='ERROR_MSG'
const AUTH_SUCCESS='AUTH_SUCCESS'


const initState={
	isAuth:false,
	user:'',
	pwd:'',
	msg:'',
	age:'',
	sex:'',
	title:'',
	desc:'',
	avatar:'',
	redirectTo:''
}
//reducer
export function user(state=initState,action){
	switch(action.type){
		case AUTH_SUCCESS:
		  return {...state,isAuth:true,msg:'',...action.payload}
		case ERROR_MSG:
		  return {...state,isAuth:false,msg:action.msg}
		default:
		  return state
	}
}
//action
function authSuccess(data){
	return {type:AUTH_SUCCESS,payload:data}
}
function errorMsg(msg){
	return {type:ERROR_MSG,msg:msg}
}



export function login({user,pwd}){
	if(!user||!pwd){
		return errorMsg('用户名密码必须输入')
	}
	return errorMsg('请注册')
}
//authSuccess({user,pwd,redirectTo:'/userinfo'})
export function register({user,pwd,repeatpwd}){
	if(!user||!pwd){
		return errorMsg('用户名密码必须输入')
	}
	if(pwd!==repeatpwd){
		return errorMsg('密码与确认密码不同')
	}
	return authSuccess({user,pwd,redirectTo:'/user'})

}



export function userinfo({age,sex,title,desc,avatar}){
	return authSuccess({age,sex,title,desc,avatar,redirectTo:'/userinfo'})
}






