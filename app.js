// ## HTML Elements:
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const textWinner = document.querySelector(".text-winner");
const playerChoiceImg = document.querySelector("#player-img");
const computerChoiceImg = document.querySelector("#computer-img");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

// ## Variables:

let playerScore = 0;
let computerScore = 0;
let playerChoice;

// ## Code:

rockBtn.addEventListener ('click', (e) => {
    playerChoice = 'rock';
    let winner = playRound(playerChoice);

    displayPlayerImg(playerChoice); // changes image of the players choice 
    displayWinner(winner);
    
    if (winner === 'player wins') {
        playerScore++;
    }
    if (winner === 'computer wins') {
        computerScore++;
    }

    updateScore();
});

paperBtn.addEventListener ('click', () => {
    playerChoice = 'paper';
    let winner = playRound(playerChoice);

    displayPlayerImg(playerChoice); // changes image of the players choice 
    displayWinner(winner);
    
    if (winner === 'player wins') {
        playerScore++;
    }
    if (winner === 'computer wins') {
        computerScore++;
    }

    updateScore();
});

scissorsBtn.addEventListener ('click', () => {
    playerChoice = 'scissors';
    let winner = playRound(playerChoice);

    displayPlayerImg(playerChoice); // changes image of the players choice 
    displayWinner(winner);
    
    if (winner === 'player wins') {
        playerScore++;
    }
    if (winner === 'computer wins') {
        computerScore++;
    }

    updateScore();
});

// ##Functions:

// plays single round, returns "draw", "player wins" or "computer wins"
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    displayComputerImg(computerChoice); // changes image of the computer choice.

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

function displayWinner(winner) {
    textWinner.innerText = `${winner}`
    if (winner === "player wins") {
        textWinner.style.color = "green"
    }
    if (winner === "computer wins") {
        textWinner.style.color = "red"
    }
    if (winner === "draw") {
        textWinner.style.color = "yellow"
    }
}

function updateScore() {
    playerScoreDisplay.innerText = `Player: ${playerScore}`;
    computerScoreDisplay.innerText = `Computer: ${computerScore}`;
}

function displayPlayerImg(playerChoice) {
    if (playerChoice === 'rock') {
        playerChoiceImg.src = "/img/rock.png"
        playerChoiceImg.alt = "Rock."
    }
    if (playerChoice === 'paper') {
        playerChoiceImg.src = "/img/paper.png"
        playerChoiceImg.alt = "Paper."
    }
    if (playerChoice === 'scissors') {
        playerChoiceImg.src = "/img/scissors.png"
        playerChoiceImg.alt = "Scissors."  
    }
}
function displayComputerImg(computerChoice) {
    if (computerChoice === 'rock') {
        computerChoiceImg.src = "/img/rock.png"
        computerChoiceImg.alt = "Rock."
    }
    if (computerChoice === 'paper') {
        computerChoiceImg.src = "/img/paper.png"
        playerChoiceImg.alt = "Paper."
    }
    if (computerChoice === 'scissors') {
        computerChoiceImg.src = "/img/scissors.png"
        playerChoiceImg.alt = "Scissors."  
    }
}