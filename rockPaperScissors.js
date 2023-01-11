let computerChoiceBase =  Math.floor(Math.random() * 100) + 1;

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
    return computerChoice
}

function getUserChoice() {
    let userChoice = prompt("Rock, paper, or scissors?");
    let result = userChoice.toLowerCase();
    if (userChoice != null) {
        return result;
    }
}

console.log(getUserChoice())