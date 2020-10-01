var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var play1=document.querySelector("#play1Score");
var play2=document.querySelector("#play2Score");
var resetClick=document.querySelector("#reset");
var p1Score=0;
var p2Score=0;
var inputTag=document.querySelector("#gameInput");
var gameDisplay=document.querySelector("#winGame");
var gameOver=false;
var winningScore=5;
//Input Tag Js
inputTag.addEventListener("change",function(){
  gameDisplay.textContent = inputTag.value;
  winningScore=Number(inputTag.value);
  reset();
});

// Player 1 Button js
p1Button.addEventListener("click",function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      gameOver=true;
      if(gameOver=true){
        play1.classList.add("winColor");
      }
    }
    play1.textContent=p1Score;   
  }
});
// Player 2 Button js
p2Button.addEventListener("click",function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      gameOver=true;
      if(gameOver=true){
        play2.classList.add("winColor");
      }
    }
    play2.textContent=p2Score;   
  }
});
// Reset Button Js
resetClick.addEventListener("click",function(){
  reset();
});
function reset(){
  p1Score=0;
  p2Score=0;
  play1.textContent=0;
  play2.textContent=0;
  gameOver=false;
  play1.classList.remove("winColor");
  play2.classList.remove("winColor");
}