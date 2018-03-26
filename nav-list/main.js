//登录注册
(function(){
    var login=document.getElementById("login");
    var register=document.getElementById("register");
    var dialogLogin=document.getElementById("dialog-login");
    var dialogRegister=document.getElementById("dialog-register");
    var loginBtn=document.getElementById("login-btn");
    var registerBtn=document.getElementById("register-btn");
    var loginForm=document.getElementById("login-form");
    var registerForm=document.getElementById("register-form");
    var back=document.getElementById("back");
    login.addEventListener("click",loginDialog);
    register.addEventListener("click",registerDialog);
    dialogLogin.addEventListener("click",toggleDialog);
    dialogRegister.addEventListener("click",toggleDialog);
    loginBtn.addEventListener("click",logIn);
    registerBtn.addEventListener("click",logIn);
    back.addEventListener("click",closeDialog);
    function loginDialog(e){
        e.preventDefault();
        back.style.display="block";
        loginForm.style.display="block";
    }
    function registerDialog(e){
        e.preventDefault();
        back.style.display="block";
        registerForm.style.display="block";
    }
    function toggleDialog(e){
        e.preventDefault();
        if(loginForm.style.display==="block"){
            loginForm.style.display="none";
            registerForm.style.display="block";
        }else{
            loginForm.style.display="block";
            registerForm.style.display="none";
        }
    }
    function logIn(e){
        e.preventDefault();
        var oUl=document.getElementsByClassName("nav-right")[0];
        var oLi=document.createElement("li");
        var oA=document.createElement("a");
        oLi.className="fr";
        oA.className="login";
        oA.innerHTML="已登录";
        login.style.display="none";
        register.style.display="none";
        loginForm.style.display="none";
        registerForm.style.display="none";
        back.style.display="none";
        oLi.appendChild(oA);
        oUl.appendChild(oLi);
        //cookie
        var exp = new Date();
        exp.setTime(exp.getTime() + 60 * 1000 * 60); //1小时
        document.cookie="login="+true+";expires="+exp.toGMTString()+';path=/;domain=pokemonfan7.github.io';
        document.cookie="user="+"Alexz"+";expires="+exp.toGMTString()+';path=/;domain=pokemonfan7.github.io';
    }
    function closeDialog(){
        back.style.display="none";
        loginForm.style.display="none";
        registerForm.style.display="none";
    }

    //检查是否有登录的cookie
    function getCookie(name){
        var strCookie = document.cookie;
        var arrCookie = strCookie.split(";");
        var len=arrCookie.length;
        for(var i=0;i<len;i++){
            var arr=arrCookie[i].split("=");
            if(arr[0]===name){
                return arr[1];
            }
        }
        return "";
    }
    (function(){
        if(getCookie("login")==="true"){
            var oUl=document.getElementsByClassName("nav-right")[0];
            var oLi=document.createElement("li");
            var oA=document.createElement("a");
            oLi.className="fr";
            oA.className="login";
            oA.innerHTML="已登录";
            login.style.display="none";
            register.style.display="none";
            loginForm.style.display="none";
            registerForm.style.display="none";
            back.style.display="none";
            oLi.appendChild(oA);
            oUl.appendChild(oLi);
        }
    })();
})();
//dialog居中
(function(){
    var login=document.getElementById("login");
    var register=document.getElementById("register");
    var loginForm=document.getElementById("login-form");
    var registerForm=document.getElementById("register-form");
    var back=document.getElementById("back");
    var loginFormWidth=parseInt(window.getComputedStyle(loginForm).width);
    var loginFormHeight=parseInt(window.getComputedStyle(loginForm).height);
    var registerFormWidth=parseInt(window.getComputedStyle(registerForm).width);
    var registerFormHeight=parseInt(window.getComputedStyle(registerForm).height);
    //dialog一直居中
    function center(obj){
        var screenHeight=document.documentElement.clientHeight;
        var screenWidth=document.documentElement.clientWidth;
        var scrollTop=document.documentElement.scrollTop;
        var objLeft=(screenWidth-parseInt(window.getComputedStyle(obj).width))/2;
        var objTop=(screenHeight-parseInt(window.getComputedStyle(obj).height))/2+scrollTop;
        obj.style.left=objLeft+"px";
        obj.style.top=objTop+"px";
    }
    function backCenter(obj){
        var scrollTop=document.documentElement.scrollTop;
        obj.style.top=scrollTop+"px";
    }
    backCenter(back);
    center(loginForm);
    center(registerForm);
    window.addEventListener("scroll",function(){
        var screenHeight=document.documentElement.clientHeight;
        var screenWidth=document.documentElement.clientWidth;
        var scrollTop=document.documentElement.scrollTop;
        var loginFormLeft=(screenWidth-loginFormWidth)/2;
        var loginFormTop=(screenHeight-loginFormHeight)/2+scrollTop;
        var registerFormLeft=(screenWidth-registerFormWidth)/2;
        var registerFormTop=(screenHeight-registerFormHeight)/2+scrollTop;
        back.style.top=scrollTop+"px";
        loginForm.style.left=loginFormLeft+"px";
        loginForm.style.top=loginFormTop+"px";
        registerForm.style.left=registerFormLeft+"px";
        registerForm.style.top=registerFormTop+"px";
    });
    window.addEventListener("resize",function(){
        var screenHeight=document.documentElement.clientHeight;
        var screenWidth=document.documentElement.clientWidth;
        var scrollTop=document.documentElement.scrollTop;
        var loginFormLeft=(screenWidth-loginFormWidth)/2;
        var loginFormTop=(screenHeight-loginFormHeight)/2+scrollTop;
        var registerFormLeft=(screenWidth-registerFormWidth)/2;
        var registerFormTop=(screenHeight-registerFormHeight)/2+scrollTop;
        back.style.top=scrollTop+"px";
        loginForm.style.left=loginFormLeft+"px";
        loginForm.style.top=loginFormTop+"px";
        registerForm.style.left=registerFormLeft+"px";
        registerForm.style.top=registerFormTop+"px";
    });
})();