console.log("hi");
let scores, roundScore, activePlayer;

//invoke function as the window loads
init();

//new game button
//grab btn-new -> add an eventListener ->reset values

document.querySelector(".btn-new").addEventListener("click", init);

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

//anonymous function -> can only be used once
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1. create a random number
  let choice = Math.floor(Math.random() * 8) + 1;

  // 2. assign a handle/variable to the the picture that is displayed
  let choiceDom = document.querySelector(".choice");
  choiceDom.style.display = "block";
  //change picture on each click using type coersion
  let values = choiceDom.src = "choice-" + choice + ".png";
  console.log(values);

  //sins choices
  if (choice === 1) {
    swal({
      title: "\"Oh no! You claimed a sick day when you were perfectly well!\"",
      text: "You lost your points!",
      icon: "warning",
      button: "Ok I won't call out \"sick\" again",
    });
  }

  if (choice === 2 ) {
    swal({
      title: "You just lost your points",
      text: "You were envious of your best friends new car!",
      icon: "warning",
      button: "Ok I won't be envious again ",
    });
  }


  if (choice === 3 ) {
    swal({
      title: "Oh no! You claimed a sick day when you were perfectly well!",
      text: "You lost your points!",
      icon: "warning",
      button: "Ok ",
    });
  }

  //good deeds
  if (choice === 4) {
    swal({
      title: "\"No one has ever become poor by giving.\"",
      text: "You just earned 4 points by helping someone on your way home!",
      icon: "success",
      button: "Earn more deeds!",
    });
  }

  if (choice === 5 ) {
    swal({
      title: "\"your greatness is not what you have. it's what you give\"",
      text: "You just earned 4 points!",
      icon: "success",
      button: "Aww yiss!",
    });

  }

  if (choice === 6 ) {
    swal({
      title: "\"your greatness is not what you have. it's what you give\"",
      text: "Awesome! You just earned 4 points by uplifting someone else!",
      icon: "success",
      button: "Aww yiss!",
    });
  }

  if (choice === 7 ) {
    swal({
      title: "\"Prayer begins where human capacity ends\"",
      text: "You just earned 7 points by praying for everyone you know!",
      icon: "success",
      button: "Town Is Ours",
    });
  }

  if (choice === 8 ) {
    swal({
      title: "You are the real bread winner <3",
      text: "You just earned 8 points! by sharing your lunch!",
      icon: "success",
      button: "bread game strong :)",
    });
  }

  if (choice === 9 ) {
    swal({
      title: "\"your greatness is not what you have. it's what you give\"",
      text: "You just earned 4 points by donating your spare change!",
      icon: "success",
      button: "Aww yiss!",
    });
  }


  // 3. update the score if the number is not 1
  if (roundScore > 25) {
    alert("you lost, your score went over 25");
    init();
  }
  if (choice != 1 && choice != 2 && choice != 3 ) {
    console.log((roundScore += choice));
    //update on element
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } 
  else {
    nextPlayer();
  }
});

//create a hold function
document.querySelector(".btn-hold").addEventListener("click", function() {
  //add current score to global
  scores[activePlayer] += roundScore;
  //update the UI - if first player, it will update the first element of array
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  //check if player won the game
  if (scores[activePlayer] >= 25) {
    //display winner in text bar
    document.querySelector("#name-" + activePlayer).innerHTML =
      "IS THE WINNER!!!";

    //add a winner class to the text and change style
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winnerClass");

    //alert as winner
    alert("Winner Alert, Winner Alert");
    document.querySelector(".player-");

    //remove active state
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    //switch players
    nextPlayer();
  }
});

function nextPlayer() {
  //switch players
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  //update on html element
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //hide dice when it is the other players turn

  // document.querySelector(".choice").style.display = "none";

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');
}

//newGame value

//this function sets all the variables to 0
function init() {
  // let gameTill = Number(window.prompt("What would you like to play game till??", ""));

  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  //set all scores to zero
  //player 0
  document.getElementById("score-0").innerHTML = "0";
  document.querySelector("#current-0").innerHTML = "0";
  document.querySelector("#name-0").innerHTML = "Player 1";

  // player 1
  document.getElementById("score-1").innerHTML = "0";
  document.querySelector("#current-1").innerHTML = "0";
  document.querySelector("#name-1").innerHTML = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winnerClass");
  document.querySelector(".player-1-panel").classList.remove("winnerClass");

  // document.getElementById("choice").style.display = "none";
}
swal("Halal Game by Fjkiani");

function instructions () {
  swal("The first player to reach 20 points by earning blessing wins, but if you earn more, you transfer your points over! ");
}