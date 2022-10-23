let style = document.createElement('style');
document.head.appendChild(style);

// score
let playerScore = 0;
let computerScore = 0;

// rock paper scissors move options
const gameMoveOptions = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
// conditions for player winning a round
let playerWinCombo = ['0-2', '1-0', '2-1'];

// computer selecting random move whenever function is called
function getComputerChoice() {
    let computerChoiceResult = gameMoveOptions[Math.floor(Math.random() * gameMoveOptions.length)];   
    return computerChoiceResult;
}

let gameFrame = document.getElementById("gameFrame");
let choicesBox = document.getElementById("gameChoices");

//= button game choice options, also starts the round/game =//
gChoiceRock = document.getElementById("Rock");
gChoiceRock.addEventListener("click", 
    function() {  
        runRPSGame("Rock");
    }
); //= =========================================== =//
gChoicePaper = document.getElementById("Paper");
gChoicePaper.addEventListener("click", 
    function() {   
        runRPSGame("Paper");
    }
); //= =========================================== =//
gChoiceScissors = document.getElementById("Scissors");
gChoiceScissors.addEventListener("click", 
function() {   
    runRPSGame("Scissors");
    }
); //= =========================================== =//

// game result text 
let gResultText = document.createElement("div");
gResultText.setAttribute("id", "resultText");

gameFrame.appendChild(gResultText);

//starts round/game
function runRPSGame(playerChoice) {
    valiGChoices();
    // validate choices
    function valiGChoices() { 
            playerChoice = gameMoveOptions.findIndex(move => move.choice === playerChoice);
            playerChoice = gameMoveOptions[playerChoice];
            return playRound(playerChoice, getComputerChoice());
    }

    function playRound (playerChoice, computerChoice) {
        // get choice value for comparison & validation
        let roundWinCombo = `${playerChoice.value}-${computerChoice.value}`;

        // tie, when both chose the same move
        if (playerChoice.value === computerChoice.value) {
            gResultText.setAttribute("id", "resultTie")
            gResultText.textContent = `Tie! You both chose ${playerChoice.choice}\n | Current Score: Player ${playerScore} - ${computerScore} Computer`;
        } // check if player met conditions for winning a round & if true, give 1 point to player
        else if (playerWinCombo.includes(roundWinCombo)) {
            playerScore++;
            gResultText.setAttribute("id", "resultWin")
            gResultText.textContent = (`You win! ${playerChoice.choice} beats ${computerChoice.choice}\n | Current Score: Player ${playerScore} - ${computerScore} Computer`);
        } // if conditions not met, player loses the round & give 1 point to computer
        else {
            computerScore++;
            gResultText.setAttribute("id", "resultLost")
            gResultText.textContent = (`You lose! ${computerChoice.choice} beats ${playerChoice.choice}\n | Current Score: Player ${playerScore} - ${computerScore} Computer`);
        }
    }
    // 5 points end the game and announces the winner
    if (playerScore >= 5 || computerScore >= 5) {
        
        document.querySelectorAll(".gChoice").forEach( element => { element.toggleAttribute("disabled") });
        resetGame = document.createElement("button");
        resetGame.setAttribute("id", "reset");

        if (playerScore > computerScore) {
            style.innerHTML += `
            #resultText {
            background-color: green;
            }
            `;
            gResultText.textContent = (`You've won the game! | GG! End Score: ${playerScore} - ${computerScore}`);
        } else if (playerScore < computerScore) {
            style.innerHTML += `
            #resultText {
            background-color: red;
            }
            `;
            gResultText.textContent = (`You've lost the game! GG! | End Score: ${playerScore} - ${computerScore}`);
        }

        style.innerHTML += `
        #reset {
        background-color: blueviolet;
        color: white;
        width: 10vw;
        /* max-width: 13vw; */
        height: 3vw;
        margin-top: 2vh;
        font-size: 1vw;
        border-radius: 1vw;
        border: 0.4vh solid white;
        }
        `;
        resetGame.textContent = ("Reset Game");
        resetGame.addEventListener("click", function () { location.reload() });
        gameFrame.appendChild(resetGame);
    }
}