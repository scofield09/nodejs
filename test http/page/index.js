window.onload = function(){
    xrh =new XMLHttpRequest();
    xrh.open('GET','./getdata',true);
    xrh.send(null);
    xrh.onreadystatechange = function(){
        if(xrh.readyState == 4&&xrh.status == 200){
            console.log(xrh.responseText);
        }
    }
}