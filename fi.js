function getfile(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 & xhr.status=="200"){
    callback(xhr.responseText);
  }
};
  xhr.send(null);
}
getfile("key.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
}
)
var child=document.querySelector(".child1");

function details(det) {
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);
}
