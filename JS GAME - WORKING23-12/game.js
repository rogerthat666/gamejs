function welcome() {
    var username = localStorage.getItem("username");
  
if(!username){
    username = prompt("Please enter username", 'Player');
    localStorage.setItem("username", username);
    localStorage.clickcount = 0;
    localStorage.setItem("minValue", 1);
    localStorage.setItem("maxValue", 25);
    localStorage.setItem("guessAmount", 5);
    localStorage.setItem("winAmount", 5);
    if (username != null) {
    window.location.href = "game.html"
} }
}
console.log(localStorage);

let msg1 = document.getElementById("message1")  
let msg2 = document.getElementById("message2")  
let msg3 = document.getElementById("message3")
let guesses_num = []; 
let range = (Math.floor(localStorage.getItem('maxValue')) - Math.floor(localStorage.getItem('minValue')));
let answer = Math.floor((Math.random()) * range) + Math.floor(localStorage.getItem('minValue'));
let no_of_guesses = 0;
let guessAmount = document.getElementById("guessAmount") || '0';
let winAmount = document.getElementById("win") || '0';
let minValue = document.getElementById("min") || '0';
let maxValue = document.getElementById("max") || '0';
let guess = document.getElementById("tries") 

console.log("Randomnumber" + answer) 

function play(){  
  let user_guess = document.getElementById("guess").value
  if(user_guess < Number(localStorage.getItem('minValue')) || user_guess > Number(localStorage.getItem('maxValue')))
  { alert("Don't be silly" );
  }
  else{  
    guesses_num.push(user_guess);  
    no_of_guesses+= 1; }

    if(user_guess < answer){  
          msg1.textContent = "HIGHER"  
          msg2.textContent = "Guesses = " + no_of_guesses + " of " + localStorage.getItem('guessAmount');
          // msg3.textContent = "Guessed numbers are: " +  
          // guesses_num;  
     }  
    else if(user_guess > answer){  
        msg1.textContent = "LOWER " 
        msg2.textContent = "Guesses = " + no_of_guesses + " of " + localStorage.getItem('guessAmount');  
        // msg3.textContent = "Guessed numbers are: " +  
        // guesses_num;  
     } 
    
          
     else if(user_guess == answer)
         {        
          alert(msg1.textContent = "Well done! You guessed it in " +  no_of_guesses  +" times");
      
      clickCounter(0);
      localStorage.setItem('guesses', 0);
      window.location.href = "game.html";
      }
        
    if (localStorage.getItem("guessAmount") == no_of_guesses) {
  
      alert("You lost... too many guesses" );
      window.location.href = "again.html";
    }
}
    
// }
function myRange(){
  var maxValue = document.getElementById("max").value;
  localStorage.setItem("maxValue", maxValue);
  var minValue = document.getElementById("min").value;
  localStorage.setItem("minValue", minValue);
  result = Math.floor(Math.random() * (maxValue - minValue) + minValue); 
  if (minValue <= maxValue){
    document.getElementById("range").innerHTML = (minValue + " TO " + maxValue);
    // alert("Ok, the amount is set from " + minValue + " to " + maxValue);
  }
  else {
    alert("This makes no sense buddy");
  }
}

function maxGuess(){  
  var guessAmount = document.getElementById("tries").value;
  localStorage.setItem("guessAmount", guessAmount);
  if (guessAmount<= 0){
    alert("No can do!");
  }
  else if (guessAmount >=1){
    document.getElementById("tries").innerHTML = ("Guesses = "+ guessAmount);
    alert("Max guesses is set to " + guessAmount);
  }
}

function maxWin(){  
  let winAmount = document.getElementById("win").value;
  localStorage.setItem("winAmount", winAmount);
  if (winAmount <= 0){
    alert("No can do!");
  }
  else if (winAmount >=1){
    document.getElementById("win").innerHTML = ("Wins = "+ winAmount);
    alert("Max wins is set to " + winAmount);
  }
}

function clickCounter() {
  if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    if (localStorage.clickcount >= localStorage.getItem("winAmount", winAmount)) {
      alert("Well done! You've won " + (localStorage.clickcount) + " games!");
             
              window.location.href = "again.html"
      no_of_guesses == 0;
      localStorage.clickcount = 0;
    }
        
  } else {
    localStorage.clickcount = 1;
  }
}

var scrollCount = 1;
window.addEventListener('mousewheel', function(e){

  if(e.wheelDelta<0 && scrollCount<5){
    scrollCount++;
  }

  else if(e.wheelDelta>0 && scrollCount>1){
    scrollCount--;
  }
  // document.querySelector('.number').innerHTML = scrollCount;
});