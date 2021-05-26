// a function that allows the computer to randomly pick between rock, paper or scissors
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0 ) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else if (computerChoice == 2) {
        return "scissors";
    }
}


// creating a div to display the results
const resultDiv = document.querySelector("#result");
const p = document.createElement("p");
resultDiv.appendChild(p);

// a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        p.textContent = "It's a tie!";
        return false;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        p.textContent = "You win! Rock beats scissors!";
        return true;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        p.textContent = "You lose! Paper beats rock!";
        return false;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        p.textContent = "It's a tie!";
        return false;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        p.textContent = "You win! Paper beats rock!";
        return true;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        p.textContent = "You lose! Scissors beat paper!";
        return false;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        p.textContent = "It's a tie!";
        return false;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        p.textContent = "You win! Scissors beat paper!";
        return true;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        p.textContent = "You lose! Rock beats scissors!";
        return false;
    }
}

// using the previous functions to play 5 rounds of rock paper scissors
/* function game() {
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        // let playerChoice = "paper"; // for testing in terminal instead of on a webpage
        let playerChoice = prompt("Pick rock, paper or scissors!");
        let playerChoiceSanitized = playerChoice.toLowerCase();
        let result = playRound(playerChoiceSanitized, computerPlay());

        if(result) {
            playerScore ++;
        }
    }
    console.log("You've won " + playerScore + " times out of 5!");
}
*/

// calling game function for testing
// game();


// integrating with webpage
// attach playRound function onto buttons in html when clicked
const btn = document.querySelectorAll(".btn");
const resultTally = document.createElement("p");
resultDiv.appendChild(resultTally);
const winnerAnnouncement = document.createElement("p");
resultDiv.appendChild(winnerAnnouncement);
let round = 1;
let score = 0;

btn.forEach((button) => {
    button.addEventListener("click", () => {
        let result = playRound(button.textContent.toLowerCase(), computerPlay());
        if (result) {
            score ++;
        }
        resultTally.textContent = "You've won " + score + " times out of " + round + " rounds.";
        round ++;
        if (round > 5) {
            if (score >= 3) {
                winnerAnnouncement.textContent = "Congratulations! You've won!";
            } else {
                winnerAnnouncement.textContent = "You've been beated by the computer, try again next time!";
            }
        }
    });
});

