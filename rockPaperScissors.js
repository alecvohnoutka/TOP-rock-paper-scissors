let resultText = 0;
let errorText = "You better fix this, bucko, otherwise I'm gonna sell your pokemon cards";
function gameOverScoreChecker(){
    if (game() === "SCORE: You - 5  Computer - 0") {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (game() === "SCORE: You - 4  Computer - 0") {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (game() === "SCORE: You - 4  Computer - 1") {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (game() === "SCORE: You - 3  Computer - 0") {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (game() === "SCORE: You - 3  Computer - 1") {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (game() === "SCORE: You - 3  Computer - 2") {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (game() === "SCORE: You - 2  Computer - 0") {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (game() === "SCORE: You - 2  Computer - 1") {
        return "You beat the computer! You must be very intelligent if you bested the machine.";
    }
    else if (game() === "SCORE: You - 1  Computer - 0") {
        return "You beat the computer! Just barely. Sheesh. That game was exhilarating.";
    }
    else if (game() === "SCORE: You - 0  Computer - 5") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 0  Computer - 4") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 1  Computer - 4") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 0  Computer - 3") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 1  Computer - 3") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 2  Computer - 3") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 1  Computer - 2") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 0  Computer - 2") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 0  Computer - 1") {
        return "You lost! The computer passed the Turing Test and gets to take over your pitiful corporeal being! Damn."
    }
    else if (game() === "SCORE: You - 0  Computer - 0") {
        return "It's a tie! The best result in all of sports. I love paying a ton of money to see a good tie.";
    }
    else if (game() === "SCORE: You - 1  Computer - 1") {
        return "It's a tie! The best result in all of sports. I love paying a ton of money to see a good tie.";
    }
    else if (game() === "SCORE: You - 2  Computer - 2") {
        return "It's a tie! The best result in all of sports. I love paying a ton of money to see a good tie.";
    }
    else return "How the hell did you manage to do this?"
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        if (i < 4) {
            console.log("Round " + (i + 1) +". Choose your fighter!")
            function getUserChoice() {
                let userAnswer = prompt("Rock, paper, or scissors?");
                let userRPS = userAnswer.toLowerCase();
                if (userRPS != null) {
                    return userRPS;
                }
                else alert("Oopsie woopsie! You didn't type rock, paper, or scissors!")
            }
            function getComputerChoice() {
                let computerChoiceBase =  Math.floor(Math.random() * 100) + 1;
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
            let userChoice = getUserChoice()
            let computerChoice = getComputerChoice();
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
            let resultText = playRound(userChoice, computerChoice);
            console.log("You chose " + userChoice + ".");
            console.log("The computer chose " + computerChoice + ".");
            console.log(resultText);
            function userWinChecker(){
                let userWinListener = 0;
                if (resultText === "You win! Rock beats scissors.") {
                    userWinListener++;
                    return userWinListener;
                }
                else if (resultText === "You win! Paper covers rock.") {
                    userWinListener++;
                    return userWinListener;
                }
                else if (resultText === "You win! Scissors cuts paper.") {
                    userWinListener++;
                    return userWinListener;
                }
                else return userWinListener
            }
            function computerWinChecker(){
                let computerWinListener = 0;
                if (resultText === "You lose! Rock is covered by paper.") {
                    computerWinListener++;
                    return computerWinListener;
                }
                else if (resultText === "You lose! Paper is cut by scissors.") {
                    computerWinListener++;
                    return computerWinListener;
                }
                else if (resultText === "You lose! Scissors is beaten by rock.") {
                    computerWinListener++;
                    return computerWinListener;
                }
                else return computerWinListener
            }
            function userWinCounter(){
                let userScoreListener = userWinChecker();
                if (userScoreListener === 1) {
                    userScore++;
                    return userScore;
                }
                else return userScore
            }
            function computerWinCounter(){
                let computerScoreListener = computerWinChecker();
                if (computerScoreListener === 1) {
                    computerScore++;
                    return computerScore;
                }
                else return computerScore
            }
            let userWins = userWinCounter();
            let computerWins = computerWinCounter();
            let currentScore = ("SCORE: You - " + (userWins) + "  Computer - " + (computerWins));
            console.log(currentScore);
        }
        else if (i === 4) {
            return currentScore;
        }
        else return errorText
    }
}
console.log(game())