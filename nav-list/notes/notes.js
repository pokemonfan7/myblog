(function(){
    var noteHead = document.getElementById("note-head");
    var noteNav = noteHead.getElementsByTagName("a");
    var noteBody = document.getElementById("note-body");
    var noteList = noteBody.getElementsByClassName("node-body-container");
    var i=0,len=noteNav.length;
    for(i=0;i<len;i++){
        noteNav[i].index=i;
        noteNav[i].addEventListener("click",function(){
            for(i=0;i<len;i++){
                noteNav[i].className='';
                noteList[i].style.display='none';
            }
            console.log(this.index);
            noteList[this.index].style.display='block';
            this.className='active';
        });
    }
})();