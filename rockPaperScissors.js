let computerChoiceBase =  Math.floor(Math.random() * 100) + 1;
let userRPS = prompt("Rock, paper, or scissors?");
let userChoice = userRPS.toLowerCase();
let computerChoice = getComputerChoice();
let resultText = 0;
let userWins = 0;
let computerWins = 0;
let userScore = userWinCounter();
let computerScore = computerWinCounter();
let gameOverText = gameOverScoreChecker();
let currentScore = ("You: " + (userScore) + "  Computer: " + (computerScore));

function getUserChoice() {
    let userRPS = prompt("Rock, paper, or scissors?");
    let userChoice = userRPS.toLowerCase();
    if (userRPS != null) {
        return userChoice;
    }
    else alert("Oopsie woopsie! You didn't type rock, paper, or scissors!")
}

function getComputerChoice() {
    let computerRPS;
    if (computerChoiceBase <= 33) {
        computerRPS = "rock";
    }
    else if (computerChoiceBase >= 34 && computerChoiceBase <= 66) {
        computerRPS = "paper";
    }
    else {computerRPS = "scissors";
    }
    return computerRPS;
}

function userWinCounter(){
    let userCounter = userWins;
    if (resultText === "You win! Rock beats scissors.") {
        userCounter++;
        console.log("userCounter:" + userCounter);
    }
    else if (resultText === "You win! Paper covers rock.") {
        userCounter++;
        console.log("userCounter:" + userCounter);
    }
    else if (resultText === "You win! Scissors cuts paper.") {
        userCounter++;
        console.log("userCounter:" + userCounter);
    }
    else userCounter;
        console.log("userCounter:" + userCounter);
    return userCounter
}

function computerWinCounter(){
    let computerCounter = computerWins;
    if (resultText === "You lose! Rock is covered by paper.") {
        computerCounter++;
        console.log("computerCounter:" + computerCounter);
    }
    else if (resultText === "You lose! Paper is cut by scissors.") {
        computerCounter++;
        console.log("computerCounter:" + computerCounter);
    }
    else if (resultText === "You lose! Scissors is beaten by rock.") {
        computerCounter++;
        console.log("computerCounter:" + computerCounter);
    }
    else computerCounter;
        console.log("computerCounter:" + computerCounter);
    return computerCounter
}

function gameOverScoreChecker(userWins, computerWins){
    if (userWins > computerWins) {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (userWins < computerWins) {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (userWins === computerWins) {
        return "It's a tie! The best result in all of sports. I love paying a ton of money to see a good tie."
    }
    else return "How the hell did you manage to do this?"
}

function game(){
    for (let i = 0; i < 5; i++) {
        let userWins = 0;
        let computerWins = 0;
        if (i < 5) {
            function playRound(userChoice, computerChoice){
                if (userChoice === "rock" && computerChoice === "paper") {
                    return "You lose! Rock is covered by paper.";
                }
                else if (userChoice === "rock" && computerChoice === "scissors") {
                    return "You win! Rock beats scissors.";
                }
                else if (userChoice === "paper" && computerChoice === "rock") {
                    return "You win! Paper covers rock.";
                }
                else if (userChoice === "paper" && computerChoice === "scissors") {
                    return "You lose! Paper is cut by scissors.";
                }
                else if (userChoice === "scissors" && computerChoice === "rock") {
                    return "You lose! Scissors is beaten by rock.";
                }
                else if (userChoice === "scissors" && computerChoice === "paper") {
                    return "You win! Scissors cuts paper.";
                }
                else if (userChoice === computerChoice) {
                    return "It's a tie!";
                }
                else return "Oopsie woopsie! We have a pwobwem on our hands OwO";
            }
            let userRPS = prompt("Rock, paper, or scissors?");
            let userChoice = userRPS.toLowerCase();
            let computerChoice = getComputerChoice();
            let userScore = userWinCounter();
            let computerScore = computerWinCounter();
            let resultText = playRound(userChoice, computerChoice);
            console.log(resultText);
            console.log(currentScore);
            console.log(("i =") + i);
        }
        else if (i === 5) {
            gameOverText = gameOverScoreChecker();
        }
        else return gameOverText
    }
}

console.log(game(), userWins, computerWins)