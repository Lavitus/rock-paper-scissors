let playerScore = 0;
let computerScore = 0;

// rock paper scissors move options
const gameMoveOptions = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];

// computer selecting random move whenever function is called
function getComputerChoice() {
    let computerChoiceResult = gameMoveOptions[Math.floor(Math.random() * gameMoveOptions.length)];   
    return computerChoiceResult;
}

//start game
runRPSGame();
function runRPSGame() {
    // play 5 rounds
    for (let r = 1;r < 6; r++) {
        // start round
        game();
        function game() {
            // ask player to make a choice through text input
                playerChoice = prompt("Choose your move! Rock, Paper or Scissors?", "");
            
            // if player cancels, ask again, else adjust text cases from player input for the next check 
            if (playerChoice === null) {game();} 
            else { playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();}
            
            // check if player made choice out of the options,if yes continue the round
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
            // current round text & if last round text
            let currentRound = `Round ${r}`;
            
            if (r === 5) {
                currentRound = `Last Round ${r}` 
            }
            
            // tie, when both chose the same move
            if (playerChoice.value === computerChoice.value) {
                alert(`Tie! You both chose ${playerChoice.choice}, ${currentRound}:  Player ${playerScore} - ${computerScore} Computer`);
            } // check if player met conditions for winning a round & if true, give 1 point to player
            else if (playerWinCombo.includes(roundWinCombo)) {
                playerScore++;
                alert(`You win! ${playerChoice.choice} beats ${computerChoice.choice}, ${currentRound}:  Player ${playerScore} - ${computerScore} Computer`);
            } // if conditions not met, player loses the round & give 1 point to computer
            else {
                computerScore++;
                alert(`You lose! ${computerChoice.choice} beats ${playerChoice.choice}, ${currentRound}:  Player ${playerScore} - ${computerScore} Computer`);
            }
        }
    }
    if (playerScore > computerScore) {
        alert(`You've won the game! GG! End Score: ${playerScore} - ${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`You've lost the game! GG! End Score: ${playerScore} - ${computerScore}`)
    } else {
        alert(`It's a tie! GG! End Score: ${playerScore} - ${computerScore}`)
    }
}