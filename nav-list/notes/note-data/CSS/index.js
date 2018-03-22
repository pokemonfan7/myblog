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

            if(scollTop===0)
            {
                clearInterval(Timer);
            }
            bSys=true;
        },10);

    };

};





