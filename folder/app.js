/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// how to create our fundamental game variables 
//how to generate a random number
//How to manipulate the DOM 
//how to read from the DOM 
// how to change css styles 

var scores, roundScore, activePlayer;
// init ();

// scores = [0,0];
// roundScore = 0;
// activePlayer = 1;


// //current section will have the value of device 



// hide the dice 
//  document.querySelector('.dice').style.display= 'none';
 
//  document.getElementById('score-0').textContent = '0';
//  document.getElementById('score-1').textContent = '0';
//  document.getElementById('current-0').textContent = '0';
//  document.getElementById('current-1').textContent = '0';


  //anonymous function 
  document.querySelector('.btn-roll').addEventListener('click', function () {
      //1. random number 
      dice =  Math.floor(Math.random() * 6) + 1;
      console.log(dice);

      //2.Display the results 
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display= 'block';
      diceDOM.src = 'dice-' + dice + '.png';
      


      //3. Update the score if the dice is not 1
      if (dice !== 1){
      //add score 
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
          //next player
          nextPlayer ();
      }
  
  });

  document.querySelector('.btn-hold').addEventListener('click', function () {
      //add current score to global score
      scores [activePlayer] += roundScore;


      //update UI 
      document.querySelector('#score-' + activePlayer).textContent = scores [activePlayer];

      //check if the player won the game
      if (scores[activePlayer] >= 20) {
          document.querySelector('#name-' + activePlayer).textContent = "Winner!";
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      }
      else {
          nextPlayer();
      }

  });

  function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');

     document.querySelector('.player-1-panel').classList.toggle('active');


  //   document.querySelector('.player-0-panel').classList.remove('active');
  //   document.querySelector('.player-1-panel').classList.remove('active');
  
  document.querySelector('.dice').style.display = 'none';

  }

  document.querySelector('.btn-new').addEventListener('click', init);
  
function init () {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

   
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}



  // //store value with querySelector
 
//   document.querySelector('#current-' + activePlayer).textContent = dice;
//  var x = document.querySelector('#score-0').textContent;
//  console.log(x);
