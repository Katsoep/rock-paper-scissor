let humanScore = 0;
let computerScore = 0;
let score = "humans: " + humanScore + " vs computer: " + computerScore; 

//NEW
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");
const computerChoiceText = document.querySelector(".computersChoice");
const scoreText = document.querySelector(".score");
const announcement = document.querySelector(".ann");

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
btnScissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice())
});

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice){
        case 1 :
            computerChoice = "rock";
            computerChoiceText.textContent = "computers choice: Rock!";
            break;
        case 2 :
            computerChoice = "paper";
            computerChoiceText.textContent = "computers choice: Paper!";
            break;
        case 3 :
            computerChoice = "scissor";
            computerChoiceText.textContent = "computers choice: Scissor!";
            break;
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice){
   
    if(humanChoice !== computerChoice){

        if (humanChoice === "rock"){
            if(computerChoice === "scissor"){
                humanScore++;
                announcement.textContent = "Human wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                return;
            }
            else if(computerChoice === "paper"){
                computerScore++;
                announcement.textContent = "Computer wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
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
                announcement.textContent = "Human wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                return;
            }
            else if(computerChoice === "scissor"){
                computerScore++;
                announcement.textContent = "Computer wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                return;
            } else {
                alert("something went wrong");
                return;
            }
        }
        if (humanChoice === "scissor"){
            if(computerChoice === "paper"){
                humanScore++;
                announcement.textContent = "Human wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                return;
            }
            else if(computerChoice === "rock"){
                computerScore++;
                announcement.textContent = "Computer wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                return;
            } else {
                alert("something went wrong");
                return;
            }
        }
    } else {
        announcement.textContent = "It's a tie";
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