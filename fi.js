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
  career(data.CareerObjective);
}
)
var child=document.querySelector(".child1");

function details(det) {
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);

var name=document.createElement("name");
name.textContent=det.name;
child.appendChild(name);

var phoneno=document.createElement("phoneno");
phoneno.textContent=det.phoneno;
child.appendChild(phoneno);

var mail=document.createElement("a");
mail.href = "mailto:yogithasruthi@gmail.com";
mail.textContent=det.email;
child.appendChild(mail);

var add=document.createElement("add");
add.textContent="Address";
child.appendChild(add);

var hr=document.createElement("hr");
child.appendChild(hr);

var address=document.createElement("a");
address.textContent=det.Address;
child.appendChild(address);

}
var child1=document.querySelector(".child2");
function career(careerinfo){
  var info=document.createElement("p");
  info.textContent=careerinfo.info;
  child1.appendChild(info);
}
