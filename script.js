
// VARIABLES
const body = document.querySelector('body');
const checkValue = document.querySelector('.check');
const number = document.querySelector('.number');
const myScore = document.querySelector(".myScore");
const guess = document.querySelector('.guess');
const gameMessage = document.querySelector('.message')
let Again = document.querySelector('.again');
let myHighScore = document.querySelector('.myHighscore');
let secreatNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreatNumber);


// storing the scores/highscore in a variable
let score = 20;
let highScore = 0;

  // Using function to make codes reusable
const displayMessage = function (message) {
  gameMessage.textContent = message;
}

// function for the game to start which will be passed to the click event that will trigger "checkValue button"
const startGame = function () {
    
    const guessNo = Number(guess.value);
    console.log(typeof guessNo, guessNo)

    // When there is no number or value in the imput
    if (!guessNo) {
        // document.querySelector(".message").textContent = 'There Is No Number';
        displayMessage('There is no Number😫')

        // When a player wins the game
    } else if (guessNo === secreatNumber) {
        // document.querySelector(".message").textContent = 'Correct Number';
        displayMessage('Correct Number😊')

        // document.querySelector('.number').textContent = secreatNumber;
        number.textContent = secreatNumber;

        // DOM manipulation with CSS
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem'
        if (score > highScore) {
            highScore = score;
            myHighScore.textContent = highScore;
        }

        //HERE WE DEFACTOED AND COMBINED THE CONDITIONS FOR IF guessNO < secretNumber/guessNO > secretNumber
    } else if (guessNo !== secreatNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent = guessNo < secreatNumber ? 'Number is too low' : 'Number is too high';
            displayMessage(guessNo < secreatNumber ? 'Number is too low😌' : 'Number is too high😌');
            score--
            myScore.textContent = score;
        } else {
            // document.querySelector(".message").textContent = 'You lost the game';
            displayMessage('You lost the game')
            myScore.textContent = 0;
        }
    }
}

// function to restart the game the will be passed to the event listener that will trigger "Again button"
const restartGame = function () {
    score = 20;
    secreatNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = 'Start guessing...';
    displayMessage('Start guessing...!');
    // displayMessage('Start guessing...')
    myScore.textContent = score;
    number.textContent = "?";
    number.style.width = '15rem';
    guess.value = '';
    body.style.backgroundColor = '#0B132B';
}


// click event that handles the startGame function(), and trigers the checkValue button
checkValue.addEventListener('click', startGame );

// Event listener that handles the restart function() and trigers the Again button
Again.addEventListener('click', restartGame );






// GUILDLINES TO BUILD THE GAME APP

// STARTING FROM
// simple DOM manipulation exercises
// Event listener and function on guess button
// random numbers, math.trunc and math.random;

// CONDITIONAL STATEMENTS ON;
// Not GuessNO
// secretNumber === GuessNo
// secretNumber < GussNo
// secretNumber > GussNo
// Reduction of Score
// lost of game by message, you lost the game;
// CSS DOM manipulation
// HIghscore manipulation
// play Again features
// refactore of the codes

// AGAIN BUTTON AddeventListener and DOM manipulations





    // HERE WE HAD CONDITION FOR IF guessNO < secretNumber
        // when the guess is too low
    // else if (guessNo < secreatNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = 'Number Is Too Low';
    //         score--
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = 'You lost the game';
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
    
    // HERE WE HAD CONDITION FOR IF guessNO > secretNumber
        // when the guess is too  high
    //     else if (guessNo > secreatNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = 'Number Is Too high';
    //     score--
    //     document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = 'You lost the game';
    //         document.querySelector(".score").textContent = 0;
    //      }
    // }