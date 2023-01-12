let computerChoiceBase =  Math.floor(Math.random() * 100) + 1;
let userRPS = prompt("Rock, paper, or scissors?");
let userChoice = userRPS.toLowerCase();
let computerChoice;

function getUserChoice() {
    if (userRPS != null) {
        return userChoice;
    }
}

function getComputerChoice() {
    let computerChoice;
    if (computerChoiceBase <= 33) {
        computerChoice = "rock";
    }
    else if (computerChoiceBase >= 34 && computerChoiceBase <= 66) {
        computerChoice = "paper";
    }
    else {computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(){
    let resultText;
    if (userChoice === "rock" && getComputerChoice() === "paper") {
        resultText = "You lose! Paper covers rock.";
    }
    else if (userChoice === "rock" && getComputerChoice() === "scissors") {
        resultText = "You win! Rock beats scissors.";
    }
    else if (userChoice === "paper" && getComputerChoice() === "rock") {
        resultText = "You win! Paper covers rock.";
    }
    else if (userChoice === "paper" && getComputerChoice() === "scissors") {
        resultText = "You lose! Scissors cuts paper.";
    }
    else if (userChoice === "scissors" && getComputerChoice() === "rock") {
        resultText = "You lose! Rock beats scissors.";
    }
    else if (userChoice === "scissors" && getComputerChoice() === "paper") {
        resultText = "You win! Scissors cuts paper.";
    }
    else {userChoice === getComputerChoice();
        resultText = "It's a tie!";
    }
    return resultText;
}

console.log(playRound())