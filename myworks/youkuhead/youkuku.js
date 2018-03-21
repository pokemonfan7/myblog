window.onload=function()
{
    var oHeader=document.getElementsByTagName('header')[0];
    var oDiv=document.getElementById('titlelist');
    var oUl=oDiv.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var j=0;
    var i=0;
    var ttimer=null;


    function toMovee(){
        for(i=0;i<aLi.length;i++)
        {
            aLi[i].className='';
        }
        j>5?j=0:j++;
        aLi[j].className='active';
        oHeader.style.background = "url(images/"+j+".jpg) center center no-repeat";
        /*switch(j)
        {
        case 0:
            oHeader.style.background = "url(images/5.jpg) center center no-repeat";
            break;
        case 1:
            oHeader.style.background = "url(images/1.jpg) center center no-repeat";
            break;
        case 2:
            oHeader.style.background = "url(images/2.jpg) center center no-repeat";
            break;
        case 3:
            oHeader.style.background = "url(images/3.jpg) center center no-repeat";
            break;
        case 4:
            oHeader.style.background = "url(images/4.jpg) center center no-repeat";
            break;
        case 5:
            oHeader.style.background = "url(images/0.jpg) center center no-repeat";
            break;
        case 6:
            oHeader.style.background = "url(images/6.jpg) center center no-repeat";
            break;
        default:
            break;
        }*/
        }
    ttimer=setInterval(toMovee,3000);



    for(i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function()
        {
            j=this.index;
            /*switch(j)
            {
                case 0:
                    oHeader.style.background = "url(images/5.jpg) center center no-repeat";
                    break;
                case 1:
                    oHeader.style.background = "url(images/1.jpg) center center no-repeat";
                    break;
                case 2:
                    oHeader.style.background = "url(images/2.jpg) center center no-repeat";
                    break;
                case 3:
                    oHeader.style.background = "url(images/3.jpg) center center no-repeat";
                    break;
                case 4:
                    oHeader.style.background = "url(images/4.jpg) center center no-repeat";
                    break;
                case 5:
                    oHeader.style.background = "url(images/0.jpg) center center no-repeat";
                    break;
                case 6:
                    oHeader.style.background = "url(images/6.jpg) center center no-repeat";
                    break;
                default:
                    break;
            }*/
            oHeader.style.background = "url(images/"+j+".jpg) center center no-repeat";
            //that=this;
            clearInterval(ttimer);
            for(i=0;i<aLi.length;i++)
            {
                aLi[i].className='';
            }
            this.className='active';
        };
    }

    for(i=0;i<aLi.length;i++) {
        aLi[i].index=i;
        aLi[i].onmouseout = function () {
            j=this.index;
            ttimer=setInterval(toMovee,3000);
        };
    }
};

