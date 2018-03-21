window.onload=function()
{
    function head()
    {
    var oUl=document.getElementById("animation_left");
    var aLi=oUl.getElementsByTagName("li");
    var oTab=document.getElementById("tab");
    var aTabDiv=oTab.getElementsByTagName("div")[0];
    var oDiv=document.getElementById("animation_right");
    var aImg=oDiv.getElementsByTagName("img");
    var timer=null;
    var i=0;
    var j=0;
    var m=0;
    var n=0;
    function toMove()
    {
        for(i=0;i<aLi.length;i++)
        {
            aLi[i].className="";
        }
        j++;
        if(j===aLi.length)
        {
            j=0;
        }
        aLi[j].className="active";
        aTabDiv.style.top=j*60+"px";
        m=j+1;
        fn(0,2,"top",275,150,80,"-font.png",m);
        fn(1,3,"right",-180,-90,-30,".png",m);
		n=j;
        //fnMove2();
        //aImg[2].src="img/tab-"+(j+1)+"-font.png";
        //aImg[1].src="img/tab-"+(j+1)+".png";
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

    }
    timer=setInterval(toMove,2000);

    for(i=0;i<aLi.length;i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            clearInterval(timer);
            for (i = 0; i < aLi.length; i++) {
                aLi[i].className = "";
            }
            this.className = "active";
            aTabDiv.style.top = this.index * 60 + "px";
            m = this.index + 1;
            //aImg[0].src = "img/tab-" + m + "-font.png";
            //aImg[1].src = "img/tab-" + m + ".png";
            //aImg[2].src = "img/tab-" + m + "-font.png";
            //aImg[3].src = "img/tab-" + m + ".png";

            if (this.index !== n) {
                fn(0, 2, "top", 275, 150, 80, "-font.png", m);
                fn(1, 3, "right", -180, -90, -30, ".png", m);
            }
            n = this.index;

        };
        aLi[i].onmouseout = function () {
            j = this.index;
            m = j + 1;
            timer = setInterval(toMove, 2000);
        };

        /*
    function fnMove1()
    {
        if(m!==n) {
            aImg[2].src = "img/tab-" + m + "-font.png";
            aImg[0].style.top = 150 + "px";
            aImg[0].style.opacity = "1";
            aImg[2].style.top = 275 + "px";
            aImg[2].style.opacity = "0";
            aImg[0].style.transition = "";
            aImg[2].style.transition = "";

            setTimeout(
                function () {
                    aImg[0].style.transition = ".3s";
                    aImg[2].style.transition = ".3s";
                    aImg[0].style.top = 80 + "px";
                    aImg[2].style.top = 150 + "px";
                    aImg[0].style.opacity = "0";
                    aImg[2].style.opacity = "1";

                    setTimeout(function() {
                        aImg[0].src = "img/tab-" + m + "-font.png";
                    }, 300)
                }, 50)
        }
    }
    function fnMove2()
    {
        if(m!==n) {
            aImg[3].src = "img/tab-" + m + ".png";
            aImg[1].style.right = -90 + "px";
            aImg[1].style.opacity = "1";
            aImg[3].style.right = -180 + "px";
            aImg[3].style.opacity = "0";
            aImg[1].style.transition = "";
            aImg[3].style.transition = "";

            setTimeout(
                function () {
                    aImg[1].style.transition = ".3s";
                    aImg[3].style.transition = ".3s";
                    aImg[1].style.right = -30 + "px";
                    aImg[3].style.right = -90 + "px";
                    aImg[1].style.opacity = "0";
                    aImg[3].style.opacity = "1";

                    setTimeout(function() {
                        aImg[1].src = "img/tab-" + m + ".png";
                    }, 300)
                }, 50)
        }
    }
    *///fnMove1&fnMove2合并为fn
        function fn(a,b,attr,num1,num2,num3,png,m)
        {
            aImg[b].src = "img/tab-" + m + png;
            aImg[a].style[attr] = num2 + "px";
            aImg[a].style.opacity = "1";
            aImg[b].style[attr] = num1 + "px";
            aImg[b].style.opacity = "0";
            aImg[a].style.transition = "";
            aImg[b].style.transition = "";

            setTimeout(
                function () {
                    aImg[a].style.transition = ".3s";
                    aImg[b].style.transition = ".3s";
                    aImg[a].style[attr] = num3 + "px";
                    aImg[b].style[attr] = num2 + "px";
                    aImg[a].style.opacity = "0";
                    aImg[b].style.opacity = "1";

                    setTimeout(function() {
                        aImg[a].src = "img/tab-" + m + png;
                    }, 300)
                }, 50)
        }
    }
    }
    head();

    //<!--清净安心，从体验开始-->
    var oClean = document.getElementById("clean");
    var aImgClean = oClean.getElementsByTagName("img");

    function Clean() {
        for (var i = 1; i < aImgClean.length; i++) {
            aImgClean[i].onmouseover = function () {
                this.style.width = 210 + "px";
            };
            aImgClean[i].onmouseout = function () {
                this.style.width = 200 + "px";
            };
        }
    }


    //<!--节约空间，一键解决-->
    var oSaveSpace=document.getElementById("savespace");
    var oSaveSpacel=oSaveSpace.getElementsByClassName("savespace_l")[0];
    var oSaveSpacer=oSaveSpace.getElementsByClassName("savespace_r")[0];
    var aLil=oSaveSpacel.getElementsByTagName("li");
    var aLir=oSaveSpacer.getElementsByTagName("li");
    var timer2=null;
    var k=0;
    function saveMove()
    {
        for (var i = 0; i < aLil.length; i++) {
            aLil[i].style.opacity = "0";
            aLir[i].style.borderColor="#e9ebea";
        }
        k++;
        if(k===aLil.length)
        {
            k=0;
        }
        aLil[k].style.opacity = "1";
        aLir[k].style.borderColor="#06ae61";
    }
    //<!--管理自如 得心应手-->
    var oManage=document.getElementById("manage");
    //<!--手机空间 轻松释放-->
    var oMobilespace=document.getElementById("mobilespace");
    //<!--方寸信息 了如指掌-->
    var oSquare=document.getElementById("square");
    //<!--包罗万象 以小见大-->
    var oPrettymuch=document.getElementById("prettymuch");
    var oImgbox=document.getElementById("imgbox");
    //<!--以微知著 一清二楚-->
    var oCrystal=document.getElementById("crystal");
    var oInCrystal=oCrystal.getElementsByClassName("incrystal")[0];

    //滚动显现
    function Run(parent,son,i,attr,s)
    {
        Object=parent.getElementsByTagName(son)[i];
        Object.style[attr]="0";
        Object.style.opacity="1";
        Object.style.transition=s;
    }
    function ImgRun(parent,son,i,attr,t,s)
    {
        Object=parent.getElementsByTagName(son)[i];
        Object.style[attr]=t+"px";
        Object.style.opacity="1";
        Object.style.transition=s;
    }
    window.onscroll=function() {
        var oScroll = document.body.scrollTop || document.documentElement.scrollTop;

        function Scroll() {
            var o = null;
            if (oScroll > 640)
            {
                function comeOut(i, iSec)
                {
                    o = setTimeout(function ()
                    {
                        aImgClean[i].style.width = 200 + "px";
                        aImgClean[i].style.margin = "0";
                    }, iSec)
                }

                comeOut(1, 0);
                comeOut(2, 200);
                comeOut(3, 400);
                comeOut(4, 600);
                o = setTimeout(Clean, 600);
            }
        }
        Scroll();
        if (oScroll > 1000)
        {
            Run(oSaveSpace, "div", 0, "left", "1.5s");
            Run(oSaveSpacer, "h3", 0, "top", ".7s");
            Run(oSaveSpacer, "ul", 0, "bottom", ".7s");
            Run(oSaveSpacer, "p", 0, "bottom", ".7s");
            clearInterval(timer2);
            timer2 = setInterval(saveMove, 2000);
        }
        if (oScroll > 1700)
        {
            Run(oManage, "div", 1, "right", "1.5s");
            Run(oManage, "h3", 0, "top", ".7s");
            Run(oManage, "ul", 0, "bottom", ".7s");
        }
        if (oScroll > 2500)
        {
            Run(oMobilespace, "div", 0, "left", "1.5s");
            Run(oMobilespace, "h3", 0, "top", ".7s");
            Run(oMobilespace, "p", 0, "bottom", ".7s");
        }
        if (oScroll > 3100)
        {
            Run(oSquare, "div", 1, "right", "1.5s");
            Run(oSquare, "h3", 0, "top", ".7s");
            Run(oSquare, "p", 0, "bottom", ".7s");
        }
        if (oScroll > 3800)
        {
            Run(oPrettymuch, "h3", 0, "top", ".7s");
            Run(oPrettymuch, "p", 0, "bottom", ".7s");
            ImgRun(oImgbox, "img", 0, "right",384, "1s");
            ImgRun(oImgbox, "img", 1, "right",284, "2s");
            ImgRun(oImgbox, "img", 2, "right",41, "2.1s");
        }
        if (oScroll>4400)
        {
            Run(oInCrystal,"h3",0,"top",".7s");
            Run(oInCrystal,"p",0,"bottom",".7s");
            ImgRun(oInCrystal,"img",3,"top",70,"1.5s");
            setTimeout(function() {
                    ImgRun(oInCrystal, "img", 1, "top", 100, "1.5s");
                    ImgRun(oInCrystal, "img", 1, "left", 0, "1.5s");
                }
                ,800);
            setTimeout(function() {
                    ImgRun(oInCrystal, "img", 2, "top", 100, "1.2s");
                }
                ,800);
        }
    }
};

