const gameChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let computerRandomChoice = null;
let playerChoice = null;
// computer randomly selects move
getComputerChoice();
function getComputerChoice() { 
computerRandomChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

game(); 
function game () {
    // ask player for text input for move choice to start the round  
    playerChoice = prompt("Choose your move! Rock, Paper or Scissors?", "");
    if (typeof playerChoice === 'string') {
    playerChoice = playerChoice.charAt(0).toUpperCase() +playerChoice.slice(1).toLowerCase();
    }
    // if player cancels or enters no input, ask player again
    if (playerChoice === null) {
        game();
    }else if (playerChoice.length === 0 ) {
        game()
    }// start round if player made choice 
    else { 
     playerChoice = gameChoices.findIndex(choice => (playerChoice));
     console.log(playerChoice);
    }
    
}

