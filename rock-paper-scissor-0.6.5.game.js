let gameChoices = ["Rock", "Paper", "Scissor"];
let computerChoice = null;
let playerChoice = null;
// computer randomly selects move
getComputerChoice();
function getComputerChoice() { 
computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

game(); 
function game () {
    // ask player for text input for move choice to start the round  
    playerChoice = prompt("Choose your move! Rock, Paper or Scissor?", "");
    if (typeof playerChoice === 'string') playerChoice.charAt(0).toUpperCase() +playerChoice.slice(1).toLowerCase();
    // if no input or player cancels, prompt again
    if (playerChoice === null) {
        game();
    } else if (playerChoice.length === 0 ) {
        game()
    } // start round if player made choice 
    else if (playerChoice === "Rock" || 
             playerChoice === "Paper"||
             playerChoice === "Scissor") {
        concludeRound();
    } else { 
        game();
    }
}

function concludeRound() {
        if (playerChoice.toLowerCase === computerChoice.toLowerCase) {
            alert(`You chose ${playerChoice} vs ${computerChoice}, that's Draw!`);
        }
    }