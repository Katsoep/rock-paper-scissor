console.log("Hello :3")
function getComputerChoice() {

    let computerChoice;
    switch(Math.floor(Math.random() * 3) + 1){
        case 1 :
            computerChoice = "rock";
            break;
        case 2 :
            computerChoice = "paper";
            break;
        case 3 :
            computerChoice = "scissor";
            break;
    }
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {

    let humanChoice = prompt("Rock paper or scissor?").toLowerCase();
    // check if humanChoice is valid answer before you return it

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor"){
        console.log(humanChoice);
        return humanChoice;
    }
    else {
        alert("Invalid choice, try again")
    }
}

let humanScore = 0;
let computerScore = 0;
let score = "humans: " + humanScore + " vs computer: " + computerScore; 

function playRound(humanChoice, computerChoice){
   
    if(humanChoice !== computerChoice){

        if (humanChoice === "rock"){
            if(computerChoice === "scissor"){
                humanScore++;
                console.log("Human wins " + humanScore)
                return;
            }
            else if(computerChoice === "paper"){
                computerScore++;
                console.log("Computer wins " + computerScore)
                return;
            }
            else{
                alert("something went wrong");
                return;
            }
        }
        if (humanChoice === "paper"){
            if(computerChoice === "rock"){
                humanScore++;
                console.log("Human wins " + humanScore)
                return;
            }
            else if(computerChoice === "scissor"){
                computerScore++;
                console.log("Computer wins " + computerScore)
                return;
            } else {
                alert("something went wrong");
                return;
            }
        }
        if (humanChoice === "scissor"){
            if(computerChoice === "paper"){
                humanScore++;
                console.log("Human wins " + humanScore)
                return;
            }
            else if(computerChoice === "rock"){
                computerScore++;
                console.log("Computer wins " + computerScore)
                return;
            } else {
                alert("something went wrong");
                return;
            }
        }
    } else {
        console.log("It's a tie");
        return;
    }
}

function playGame(){

    let computerSelect = getComputerChoice();
    let humanSelect = getHumanChoice();

    for (let roundCounter = 1; roundCounter <= 5; roundCounter++){
        console.log("round " + roundCounter);
        playRound(humanSelect, computerSelect);

        if(roundCounter === 5){
        console.log("Final score: Human: " + humanScore + " - Computer: " + computerScore);
        }
    }
}

playGame();