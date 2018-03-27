function getdata(data) {
    var searchResult = document.getElementById("suggest_result");
    var suggest = document.getElementById("suggest");
    var d = data.AS.Results[0].Suggests;
    console.log(d);
    var html = '';
    for(var i = 0; i < d.length; i++)
    {
        html += '<li>' + d[i].Txt + '</li>';
    }
    searchResult.innerHTML = html;
    suggest.style.display = "block";
}
document.addEventListener("click",function(){
    var suggest = document.getElementById("suggest");
    suggest.style.display = "none";
});
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
