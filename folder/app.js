/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//create variables for scores, roundScore, dice 
//create a math.random that will give a number between 1-6 -> assign this to player score 

let scores, roundScore, activePlayer;

//invoke function as the window loads
init ();


//new game button 
//grab btn-new -> add an eventListener ->reset values

document.querySelector('.btn-new').addEventListener('click', init);



//input a random value of dice into an html element of score for player 1
// -> without using type coersion
// document.querySelector('#current-1').innerHTML = dice; 
// -> using type coersion no longer set at player 1 -> setter
// document.querySelector('#current-' + activePlayer).innerHTML = dice; 

// part 2
//setting up event handlers 
//using callback and anonymous functions
//changing the image inside <img> tag

//add eventListener to button - > call a function on the click
//callback function 
// document.querySelector('.btn-roll').addEventListener('click', btn)

document.querySelector('.dice').style.display = 'none';

//anonymous function -> can only be used once
document.querySelector('.btn-roll').addEventListener('click', function (){
    //1. create a random number
    let dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. assign a handle/variable to the the picture that is displayed
    let diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    //change picture on each click using type coersion 
    diceDom.src='dice-' + dice + '.png';

    // 3. update the score if the number is not 1
    if (dice !== 1) {
        console.log(roundScore += dice);
        //update on element
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 
    } else {

        nextPlayer();
    }
});


//create a hold function 
document.querySelector('.btn-hold').addEventListener('click', function () {
    //add current score to global
    scores[activePlayer] += roundScore;
    //update the UI - if first player, it will update the first element of array
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
    //check if player won the game 
    if (scores[activePlayer] >= 25 ) {
       //display winner in text bar
        document.querySelector('#name-' + activePlayer).innerHTML="IS THE WINNER!!!";

        //add a winner class to the text and change style
        document.querySelector('.player-' + activePlayer +'-panel').classList.add('winnerClass');
        
        //alert as winner
        alert('Winner Alert, Winner Alert');
        document.querySelector('.player-')

        //remove active state
        document.querySelector('player-' + activePlayer +'-panel'
        ).classList.remove('active')
     } else {
      //switch players
      nextPlayer();

    }
});


function nextPlayer () {
     //switch players
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;
     //update on html element
     document.querySelector('#current-0').textContent = '0';
     document.querySelector('#current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     //hide dice when it is the other players turn
     document.querySelector('.dice').style.display = 
     'none';

     // document.querySelector('.player-0-panel').classList.remove('active');
     // document.querySelector('.player-1-panel').classList.add('active');
}

//newGame value 

//this function sets all the variables to 0
function init () {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    //set all scores to zero 
    //player 0
    document.getElementById('score-0').innerHTML = '0';
    document.querySelector('#current-0').innerHTML = '0';
    
    // player 1
    document.getElementById('score-1').innerHTML = '0';
    document.querySelector('#current-1').innerHTML = '0';
    }