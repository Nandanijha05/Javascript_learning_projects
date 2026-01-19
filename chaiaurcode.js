var grey=document.getElementById("grey")
var blue=document.getElementById("blue")
var yellow=document.getElementById("yellow")
var white=document.getElementById("white")
var canvas=document.querySelector(".canvas")


blue.addEventListener("click", function(){
    document.body.style.backgroundColor="blue";
    // console.log("hi");
    
})
canvas.addEventListener("click", function(e){
    // var x=e.target;
    console.log(e.target);
    if(e.target.classList.contains("button"))
        document.body.style.backgroundColor=e.target.id 
    else 
        return;
        
    }
    
)