
choices = ["rock", "paper", "scissors"];


function playRound(playerChoice, computerChoice) {

        playerSelection(playerChoice);
        computerPlay();

        if (playerChoice === computerChoice) 
        {
                results.innerText = `Your choice: ${playerChoice}, Computer Choice: ${computerChoice}. It's a tie!`
        }   

        else if( (playerChoice == "rock" && computerChoice == "paper") ||
            (playerChoice == "paper" && computerChoice == "scissors") || 
            (playerChoice == "scissors" && computerChoice == "rock") )
        {
            results.innerText = `Your choice: ${playerChoice}, Computer Choice: ${computerChoice}. YOU LOSE!`
        }
        else{
            results.innerText = ` Your choice: ${playerChoice}, Computer Choice: ${computerChoice}. YOU WIN!`
        }
        
}



const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const results = document.querySelector("p")


rock.addEventListener("click", () => playRound("rock", computerPlay()))
paper.addEventListener("click", () => playRound("paper", computerPlay()))
scissors.addEventListener("click", () => playRound("scissors", computerPlay()))


function playerSelection(playerSelected){
    playerChoice = playerSelected.toLowerCase();;
    return playerChoice ;
}


function computerPlay(){
    computerChoice = (choices[choice = Math.floor(Math.random() * 2)  + 1] ); 
    return computerChoice;
}



