//ajax加载列表
(function() {
    var oUl = document.getElementById("list-body-container");
    var aJax = new XMLHttpRequest();
    aJax.open("GET", "https://5ab1cc2362a6ae001408c195.mockapi.io/blog-list", true);
    aJax.onreadystatechange = function () {
        if (aJax.readyState === 4 && aJax.status === 200) {
            console.log(aJax.responseText);
            var blogList = JSON.parse(aJax.responseText);
            console.log(blogList);
            blogList.reverse().forEach(function (v) {
                var oLi = document.createElement("li");
                var oA = document.createElement("a");
                var oP = document.createElement("p");
                var spanAuthor = document.createElement("span");
                var spanDate = document.createElement("span");
                var spanDesc = document.createElement("span");
                var aClass = document.createElement("a");
                spanAuthor.innerHTML = v.author;
                spanDate.innerHTML = v.date;
                spanDesc.innerHTML = v.desc;
                aClass.innerHTML = v.class;
                oP.appendChild(spanAuthor);
                oP.appendChild(spanDate);
                oP.appendChild(spanDesc);
                oP.appendChild(aClass);
                oA.innerHTML = v.title;
                oA.href = v.url;
                oA.target = "_blank";
                oLi.appendChild(oA);
                oLi.appendChild(oP);
                oUl.append(oLi);
            })
        }
    };
    aJax.send();
})();
//书籍滚动
(function(){
    var oUl=document.getElementsByClassName('figure-list')[0];
    var timer=null,isSpeed=1;
    oUl.innerHTML+=oUl.innerHTML;
    function toMove() {
        // console.log(oUl.offsetHeight);
        oUl.style.top=oUl.offsetTop-isSpeed+'px';
        if(oUl.offsetTop<-(oUl.offsetHeight+35))
        {
            oUl.style.top='0px';
        }
    }
    timer=setInterval(toMove,20);
    oUl.addEventListener("mouseover",function(){clearInterval(timer)});
    oUl.addEventListener("mouseout",function(){timer=setInterval(toMove,20)});
})();
//点击回到顶部
(function(){
    var aBtn=document.getElementById('backToTop');
    var bSys=true;
    var Timer=null;
    //检测用户滚动
    window.addEventListener("scroll",function()
    {
        if(!bSys)
        {
            clearInterval(Timer);
        }
        bSys=false;
    });
    aBtn.addEventListener("click",function()
    {
        Timer=setInterval(function(){
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            var isSpeed=Math.floor(-scrollTop/10);
            oTop=document.documentElement.scrollTop=document.body.scrollTop=scrollTop+isSpeed;

            if(scrollTop===0)
            {
                clearInterval(Timer);
            }
            bSys=true;
        },10);
    });
})();
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
    back.addEventListener("click",outDialog);
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
        document.cookie="login="+true+";expires="+exp.toGMTString();
        document.cookie="user="+"Alexz"+";expires="+exp.toGMTString();
    }
    function outDialog(){
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

