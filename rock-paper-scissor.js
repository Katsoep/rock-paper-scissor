console.log("Hello :3")

let humanScore = 0;
let computerScore = 0;
let score = "humans: " + humanScore + " vs computer: " + computerScore; 

//NEW
const body = document.querySelector("body");

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");


btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
btnScissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice())
});

const scoreBoard = document.createElement("div");
scoreBoard.style.backgroundColor = "Black";
//scoreBoard.textContent(score);
body.appendChild(scoreBoard)

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice){
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
    /* console.log(computerChoice); */
    return computerChoice;
}

function getHumanChoice() {

    let humanChoice = prompt("Rock paper or scissor?").toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor"){
       /*  console.log(humanChoice); */
        return humanChoice;
    }
    else {
        alert("Invalid choice")
    }
}



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

// //OLD CONSOLE VERSION
// function playGame(){

//     for (let roundCounter = 1; roundCounter <= 5; roundCounter++){

//         console.log("round " + roundCounter);
//         const computerSelect = getComputerChoice();
//         const humanSelect = getHumanChoice();
//         console.log("Computer chooses: " + computerSelect);
//         console.log("Human chooses: " + humanSelect);
//         playRound(humanSelect, computerSelect);
        
//         if(roundCounter === 5){
//         console.log("Final score: Human: " + humanScore + " - Computer: " + computerScore);
//         }
//     }
// }

// playGame();