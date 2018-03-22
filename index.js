var oUl=document.getElementById("list-body-container");
var aJax = new XMLHttpRequest();
aJax.open("GET","https://5ab1cc2362a6ae001408c195.mockapi.io/blog-list",true);
aJax.onreadystatechange=function(){
    if(aJax.readyState===4&&aJax.status===200){
        console.log(aJax.responseText);
        var blogList=JSON.parse(aJax.responseText);
        console.log(blogList);
        blogList.reverse().forEach(function(v){
            var oLi=document.createElement("li");
            var oA=document.createElement("a");
            var oP=document.createElement("p");
            var spanAuthor=document.createElement("span");
            var spanDate=document.createElement("span");
            var spanDesc=document.createElement("span");
            var aClass=document.createElement("a");
            spanAuthor.innerHTML=v.author;
            spanDate.innerHTML=v.date;
            spanDesc.innerHTML=v.desc;
            aClass.innerHTML=v.class;
            oP.appendChild(spanAuthor);
            oP.appendChild(spanDate);
            oP.appendChild(spanDesc);
            oP.appendChild(aClass);
            oA.innerHTML=v.title;
            oA.href=v.url;
            oA.target="_blank";
            oLi.appendChild(oA);
            oLi.appendChild(oP);
            oUl.append(oLi);
        })
    }
}
aJax.send();

window.onload=function()
{
    var aBtn=document.getElementById('backToTop');
    var bSys=true;
    var Timer=null;
    //检测用户滚动
    window.onscroll=function()
    {
        if(!bSys)
        {
            clearInterval(Timer);
        }
        bSys=false;
    };
    aBtn.onclick=function()
    {
        Timer=setInterval(function(){
            var scollTop=document.documentElement.scrollTop||document.body.scrollTop;
            var isSpeed=Math.floor(-scollTop/10);
            oTop=document.documentElement.scrollTop=document.body.scrollTop=scollTop+isSpeed;

            if(scollTop==0)
            {
                clearInterval(Timer);
            }
            bSys=true;
        },10);

    };

};





