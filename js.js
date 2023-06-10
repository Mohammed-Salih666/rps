console.log("hello motherfuckers   ");

// game();

// -1: lose 0: tie 1: win
function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        return "Tie";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You Win! Rock beats scissors";
    }

    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        return "Tie";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You Lose! Scissors beats Paper";
    }

    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return "Tie";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You Win! Scissors beat Paper";
    }
}

function game(){
    var count = 0;
    for(let i = 0; i < 5; i++){
        var playerSelection = prompt();
        var computerSelection = getComputerChoice();
        var result = playRound(playerSelection, computerSelection);
        console.log(result);
        alert(result);

        if(result.includes("Win")){
            count++;
        }
        
    }
    console.log(count >= 3 ? "YOU WON!" : "YOU LOST");
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1) 
    return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors"; 
}

let rock = document.getElementById("rock"); 
let paper = document.getElementById("paper"); 
let scissors = document.getElementById("scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));