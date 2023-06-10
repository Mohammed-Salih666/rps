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


let result = document.getElementById("result");
let countResult = document.getElementById("count");

let btns = document.querySelectorAll('button');
let clicks = 0;
let count = 0; 

btns.forEach((button) => {

    button.addEventListener("click", () => {
        if(clicks < 5) {

            result.textContent = playRound(button.textContent, getComputerChoice());
            clicks++

            if(result.textContent.includes("Win")){
                count++;
            }
            countResult.textContent = "Wins:  " + count;

            if(clicks === 5) {
                check(count); 
            }
            console.log("count: " + count);
            console.log(clicks);
        }
    });
});

let container = document.getElementById('container');

function check(wins) {
    if(wins >= 3) {
        result.textContent = "YOU WON!";
    }
    else {
        result.textContent = "YOU LOST!";
    }

    if(document.getElementById('again') === null) {
        let again = document.createElement("button");
        again.setAttribute('id', 'again');
        again.innerText = "Play Again?";
        container.appendChild(again);
        
        again.addEventListener("click", () => {
            clicks = 0;
            count = 0; 
            countResult.textContent = "Wins:  ";
            result.textContent = " ";
            container.removeChild(again);
        });
    }
    }
    