var guessFiled=document.getElementById("guessField")
var submit=document.getElementById("subt")
var guesses=document.querySelector(".guesses")
var lastResult=document.querySelector(".lastResult")
var lowOrHi=document.querySelector(".lowOrHi")
var form=document.getElementsByTagName("form")
const startOver = document.querySelector('.resultParas');
const randomNumber =parseInt( Math.floor(Math.random() * 100));


const p=document.createElement('p');
let prev=[];
let num=1;
let play=true;

if(play){
    submit.addEventListener("click",(e)=>
    {
        e.preventDefault();
        const guess=Number(guessFiled.value);
        console.log(guess);
        validate(guess);
        
    })
}






function validate(guess)
{
    if(isNaN(guess))
        displayMsg("Add a valid number");
    else if(guess<1)
        displayMsg("Enter greater than 0");
    else if(guess>100)
        displayMsg("Enter less than 100");
    else
       { prev.push(guess);
        
            if(num>10){
                displayGuess(guess)
                displayMsg(`Game over! Try Again. The random Number was ${randomNumber}`)
                endgame();

            }
            else{
                displayGuess(guess);
                checkGuess(guess);
            }
        };
}

function checkGuess(a){
    console.log(randomNumber);
    
    if(randomNumber===a)
    {
        displayMsg(`Yay!!! you guessed it right`);
        // lowOrHi.append(p.innerText)
        endgame();
    }
    else if(randomNumber>a)
    {
        displayMsg(`The number is lower`);
    }
    else if (randomNumber<a)
    {
        displayMsg(`The number is higher`);
    }
}



function displayGuess(guess){    
    guessFiled.value="";
    guesses.innerText=guesses.innerText+`${guess}  `+` `;
    num++;
    console.log(num);
    
    lastResult.innerHTML=`${11-num}`;
}

function displayMsg(message){   
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endgame(){
    guessFiled=''
    guessFiled.disabled=true;
    // submit.disabled=true;
    p.classList.add('button');
    p.innerHTML=`<h3 id="newGame">Start new Game</h3>`
    startOver.appendChild(p);
    play=false;
    newGame();

    
}
function newGame(){

   const newBtn=document.querySelector('#newGame');
   
}