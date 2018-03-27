$(document).ready(function() {
   $('#search_input').on('keyup',function(){
  		var searchText=$(this).val();
		var getdata=function (data){
		var d = data.AS.Results[0].Suggests;
        var html = "";
        // 将从服务器拿到的数据拼接成完整的html标签
        for (var i = 0; i < d.length; i++) {
             html += '<li>' + d[i].Txt + '</li>';
         }
		$('#suggest_result').html(html);
		$('#suggest').show();
			};
    $.ajax({
    	type:"GET",
    	url:"https://api.bing.com/qsonhs.aspx?type=cb&cb=getdata&q=" +searchText,
    	dataType: "jsonp",
    	async:false,
    	jsonp: "getdata",
    	jsonpCallback: "getdata",
	    success: function (data) {
	          getdata(data);
	       }
        });
    });
  	// 用户点击其他位置搜索框消失 提高用户体验
  $(document).on('click',function(){
  	$('#suggest').fadeOut(300);
  });
  // 事件代理 同事给多个元素绑定事件 并且这些节点是通过js动态生成的一般会用事件代理
  //jquery的delegate()方法
  // delegate() 方法为指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数
  //使用 delegate() 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。
    $('#suggest').delegate('li','click', function () {  
            var keyword=$(this).text();  
           location.href='http://cn.bing.com/search?q='+keyword;  
        });  
    }); 
// function getdata(data) {
    // var searchResult = document.getElementById("suggest_result");
    // var suggest = document.getElementById("suggest");
    // var d = data.AS.Results[0].Suggests;
    // console.log(d);
    // var html = '';
    // for(var i = 0; i < d.length; i++)
    // {
        // html += '<li>' + d[i].Txt + '</li>';
    // }
    // searchResult.innerHTML = html;
    // suggest.style.display = "block";
// }


// document.addEventListener("click",function(){
    // var suggest = document.getElementById("suggest");
    // suggest.style.display = "none";
// });
// window.addEventListener("load",function(){
//     var searchInput = document.getElementById("search_input");
//     var searchResult = document.getElementById("suggest_result");
//     var suggest = document.getElementById("suggest");
//     searchInput.addEventListener("keyup",function(){
//         var searchText = searchInput.value;
//         function getdata(data) {
//             var d = data.AS.Results[0].Suggests;
//             console.log(d);
//             var html = '';
//             for(var i = 0; i < d.length; i++)
//             {
//                 html += '<li>' + d[i].Txt + '</li>';
//             }
//             searchResult.innerHTML = html;
//             suggest.style.display = "block";
//         }
//         var script=document.createElement("script");
//         script.src="http://api.bing.com/qsonhs.aspx?type=cb&cb=getdata&q="+searchText;
//         document.getElementsByTagName("body")[0].appendChild(script);
//     });
//
//
// });
