// ## HTML Elements:
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const textWinner = document.querySelector(".text-winner");
const playerChoiceImg = document.querySelector(".player-img");
const computerChoiceImg = document.querySelector(".computer-img");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

// ## Variables:


// ##Functions:

// plays entire game
function playRockPaperScissors() {
    playRound();
}

// plays single round, returns "draw", "player wins" or "computer wins"
function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (playerChoice === computerChoice) {
        return "draw";
    } 
    if (playerChoice === "rock" && computerChoice === "paper") {
        return "computer wins";
    } 
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return "player wins";
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
        return "player wins";
    }
    if (playerChoice === "paper" && computerChoice === "scissors") {
        return "computer wins";
    }
    if (playerChoice === "scissors" && computerChoice === "rock") {
        return "computer wins";
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
        return "player wins";
    }
}


// returns rock paper or scissors 
function getComputerChoice() {
    let randomNumber = getRandomNumber(3);
    
    if (randomNumber === 1) {
        return "rock";
    }
    if (randomNumber === 2) {
        return "paper";
    }
    if (randomNumber === 3) {
        return "scissors";
    }
}

// returns random number 1 to 3.
function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getPlayerChoice() {
    let playerChoice = getComputerChoice(); //local scope variable
    return playerChoice;
}

