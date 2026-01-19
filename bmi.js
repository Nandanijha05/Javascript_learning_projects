var results=document.querySelector("#results")
var height=document.querySelector("#height")
var weight=document.querySelector("#weight")
var form=document.querySelector("form")
var button=document.querySelector("button")

// button.addEventListener("click",function(e){
//     e.preventDefault();
//     console.log(e.target);
    
// })

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    console.log("height is:"+height.value);
    console.log("weight is:"+weight.value);
    var h=Number(height.value);
    var w=Number(weight.value);
    if(h<0||w<0||h===NaN||w===NaN)
    {    results.innerText="Enter valid height and weight";
        return;
    }
    var bmi=parseFloat((weight.value / (height.value* height.value )) * 10000).toFixed(2);
    console.log(bmi);
    results.innerText=`Your BMI is ${bmi}`;
    
    form.reset();
})
