


// Document Query Selectors

const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const resultsPara = document.querySelector("#resultsPara");
const restartButton = document.querySelector("#restartBtn");
const playerEmojiChoice = document.querySelector("#playerEmojiChoice");
const computerEmojiChoice = document.querySelector("#computerEmojiChoice");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay")
const roundDisplay = document.querySelector("#roundDisplay")

// Event Listeners 
rock.addEventListener("click", () => playRound("✊", computerPlay()))
paper.addEventListener("click", () => playRound("🖐", computerPlay()))
scissors.addEventListener("click", () => playRound("✌️", computerPlay()))
restartButton.addEventListener("click", () => restartGame())

// Variables
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
let choices = ["✊", "🖐", "✌️"];



// PlayRound Function => starts game

function playRound(playerChoice, computerChoice) {
    

    computerPlay();
    restartButton.style.display = "block";

        if( playerScore !== 3 || computerScore !== 3) {

            if (playerChoice === computerChoice) 
            {
                resultsPara.textContent = `IT'S A TIE!`;
                playerEmojiChoice.textContent = `😁 : ${playerChoice}`
                computerEmojiChoice.textContent = `🤖 : ${computerChoice}`
            }   

            else if( (playerChoice == "✊" && computerChoice == "🖐") ||
                (playerChoice == "🖐" && computerChoice == "✌️") || 
                (playerChoice == "✌️" && computerChoice == "✊") )
            {
                resultsPara.textContent = `YOU LOSE!`;
                playerEmojiChoice.textContent = `😁 : ${playerChoice}`
                computerEmojiChoice.textContent = `🤖 : ${computerChoice}`
                computerScoreDisplay.innerText = computerScore += 1;
                roundDisplay.innerHTML = numberOfRounds +=1;
                checkWinner()
               

            }
            else{
                resultsPara.textContent = `YOU WIN!`;
                playerEmojiChoice.textContent = `😁 : ${playerChoice}`
                computerEmojiChoice.textContent = `🤖 : ${computerChoice}`
                playerScoreDisplay.innerText = playerScore += 1;
                roundDisplay.innerHTML = numberOfRounds +=1;
                checkWinner()
            }
        } 
    }




// Function Computer Play => Randomizes computer pick 
function computerPlay(){
    return  (choices[Math.floor(Math.random() * 2)  + 1]); 
}

// Function Restart Game => resets the game
function restartGame() {
    window.location.reload(true);

}

// Function Check Winner => checks if game is over and there is already a winner 
function checkWinner() {
    if(playerScore == 3 || computerScore == 3) {

        rock.disabled = true;
        scissors.disabled = true;
        paper.disabled = true;
    
        if(playerScore == 3){
            resultsPara.textContent = "Good job, you won! Click the restart button to play again"
        }
        else {
            resultsPara.textContent = "You lost the game, click the restart button to play again"
        }
    }
}