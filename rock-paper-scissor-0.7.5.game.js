// rock paper scissors move options
const gameMoveOptions = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];

// game starts when loading site
game();
function game() {
    // ask player to make a choice through text input
        playerChoice = prompt("Choose your move! Rock, Paper or Scissors?", "");
    
    // if player cancels, ask again, else adjust text cases from player input for the next check 
    if (playerChoice === null) { game(); } 
    else { 
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    }
    
    // check if player made choice out of the options, then start round
    if (gameMoveOptions.findIndex(move => move.choice === playerChoice)!== -1){ 
        playerChoice = gameMoveOptions.findIndex(move => move.choice === playerChoice);
        playerChoice = gameMoveOptions[playerChoice];
        playRound(playerChoice, getComputerChoice());
    } // ask again if player input was incorret  
    else { game();}
}

function playRound (playerChoice, computerChoice) {
    // conditions for player winning a round
    let roundWinCombo = `${playerChoice.value}-${computerChoice.value}`;
    let playerWinCombo = ['0-2', '1-0', '2-1'];

    // tie, when both chose the same move
    if (playerChoice.value === computerChoice.value) {
        alert(`Tie! You both chose ${playerChoice.choice}`);
        game();
    } // check if player met conditions for winning a round 
    else if (playerWinCombo.includes(roundWinCombo)) {
        alert(`You win! ${playerChoice.choice} beats ${computerChoice.choice}`)
    } // if conditions not met, player loses the round
    else {
        alert(`You lose! ${computerChoice.choice} beats ${playerChoice.choice}`)}
}

// computer selecting random move
function getComputerChoice() {
    let computerChoiceResult = gameMoveOptions[Math.floor(Math.random() * gameMoveOptions.length)];   
    return computerChoiceResult;
}
