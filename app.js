var oUl=document.getElementById("list-body-container");
var aJax = new XMLHttpRequest();
aJax.open("GET","https://5ab1cc2362a6ae001408c195.mockapi.io/blog-list",true);
aJax.onreadystatechange=function(){
    if(aJax.readyState===4&&aJax.status===200){
        console.log(aJax.responseText);
        var blogList=JSON.parse(aJax.responseText);
        console.log(blogList);
        blogList.forEach(function(v){
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
            oUl.insertBefore(oLi,oUl.childNodes[0]);
        })
    }
}
aJax.send();







