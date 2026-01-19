var banner=document.getElementById("banner")
var clock=document.getElementById("clock")
setInterval(function(){
const now=new Date();
var time=now.toLocaleTimeString();
clock.innerText=time;
},1000)
