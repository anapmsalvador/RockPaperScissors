choices = ["rock", "paper", "scissors"];
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const resultsPara = document.querySelector("#resultsPara");
const restartButton = document.querySelector("#restartBtn");
const restartPara = document.querySelector("#restartPara")

const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay")
const roundDisplay = document.querySelector("#roundDisplay")



let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

function playRound(playerChoice, computerChoice) {
    
    playerSelection(playerChoice);
    computerPlay();
    {
        if( numberOfRounds < 5) {
            if (playerChoice === computerChoice) 
            {
                    resultsPara.textContent = `Your choice: ${playerChoice}, Computer Choice: ${computerChoice}. It's a tie!`
            }   

            else if( (playerChoice == "rock" && computerChoice == "paper") ||
                (playerChoice == "paper" && computerChoice == "scissors") || 
                (playerChoice == "scissors" && computerChoice == "rock") )
            {
                resultsPara.textContent = `Your choice: ${playerChoice}, Computer Choice: ${computerChoice}. YOU LOSE!`;
                computerScore += 1;
                currentComputerScore = computerScore;
                computerScoreDisplay.innerText = currentComputerScore;
                currentRound = numberOfRounds +=1

            }
            else{
                resultsPara.textContent = ` Your choice: ${playerChoice}, Computer Choice: ${computerChoice}. YOU WIN!`
                playerScore += 1;
                currentPlayerScore = playerScore;
                playerScoreDisplay.innerText = currentPlayerScore;
                numberOfRounds +=1;
            
            }
        }
        else  {
            restartPara.textContent ="Game over! Press the button the restart the game!"
        }
        
    }
}


rock.addEventListener("click", () => playRound("rock", computerPlay()))
paper.addEventListener("click", () => playRound("paper", computerPlay()))
scissors.addEventListener("click", () => playRound("scissors", computerPlay()))
restartButton.addEventListener("click", () => restartRound())


function playerSelection(playerSelected){
    playerChoice = playerSelected.toLowerCase();;
    return playerChoice ;
}


function computerPlay(){
    return  (choices[choice = Math.floor(Math.random() * 2)  + 1] ); 
}

function restartRound() {
    window.location.reload(true);

}