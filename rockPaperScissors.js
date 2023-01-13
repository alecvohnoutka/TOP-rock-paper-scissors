let computerChoiceBase =  Math.floor(Math.random() * 100) + 1;
let userRPS = prompt("Rock, paper, or scissors?");
let userChoice = userRPS.toLowerCase();
let computerChoice = getComputerChoice();
let resultText = playRound(userChoice, computerChoice);
let userScore = userWinCounter();
let computerScore = computerWinCounter();

// when user wins a game, add 1 to userWins
// when computer wins a game, add 1 to userWins
// count wins via
//

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

function playRound(userChoice, computerChoice){
    if (userChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper covers rock.";
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors.";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper covers rock.";
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors cuts paper.";
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors.";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors cuts paper.";
    }
    else if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    else return "Oopsie woopsie! We have a pwobwem on our hands OwO";
}

function userWinCounter(){
    let userWins = 0;
    if (resultText === "You win! Rock beats scissors.") {
        userWins++;
    }
    else if (resultText === "You win! Paper covers rock.") {
        userWins++;
    }
    else if (resultText === "You win! Scissors cuts paper.") {
        userWins++;
    }
    else userWins;
    return userWins
}

function computerWinCounter(){
    let computerWins = 0;
    if (resultText === "You lose! Paper covers rock.") {
        computerWins++;
    }
    else if (resultText === "You lose! Scissors cuts paper.") {
        computerWins++;
    }
    else if (resultText === "You lose! Rock beats scissors.") {
        computerWins++;
    }
    else computerWins;
    return computerWins
}

function finalScore(userWins, computerWins){
    let finalScoreText;
    if (userWins > computerWins) {
        finalScoreText = "You beat the computer! You must be very intelligent to best the machine.";
    }
    else if (userWins < computerWins) {
        finalScoreText = "You lost! The computer passes the Turing Test and gets to marry your mother! Good luck having a computer as a father."
    }
    else if (userWins === computerWins) {
        finalScoreText = "It's a tie! The best result in all of sports. I love paying a ton of money to see a good tie."
    }
    else finalScoreText = "How the hell did you manage to do this?"

    return finalScoreText;
}

function game(){
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            playRound(userChoice, computerChoice);
            console.log(currentScore);
        }
        else {
            console.log(finalScoreText);
     }
}
}

let currentScore = ("You: " + (userScore) + "  Computer: " + (computerScore));

console.log(playRound(userChoice, computerChoice))
console.log(currentScore)