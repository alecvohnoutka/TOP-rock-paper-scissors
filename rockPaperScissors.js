let computerChoiceBase =  Math.floor(Math.random() * 100) + 1;
let userRPS = prompt("Rock, paper, or scissors?");
let userChoice = userRPS.toLowerCase();
let computerChoice = getComputerChoice();
let userWins;
let computerWins;

function getUserChoice() {
    if (userRPS != null) {
        return userChoice;
    }

    else alert("Oopsie woopsie! You didn't type rock, paper, or scissors!")
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
    let userChoice = userRPS.toLowerCase();
    let computerChoice = getComputerChoice();
    let resultText;
    if (userChoice === computerChoice) {
        resultText = "It's a tie!";
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        resultText = "You lose! Paper covers rock.";
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        resultText = "You win! Rock beats scissors.";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        resultText = "You win! Paper covers rock.";
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        resultText = "You lose! Scissors cuts paper.";
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        resultText = "You lose! Rock beats scissors.";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        resultText = "You win! Scissors cuts paper.";
    }
    else resultText = "Oopsie woopsie! We have a pwobwem on our hands OwO";

    return resultText;
}

console.log(userChoice, computerChoice, playRound())