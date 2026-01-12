let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let score = "humans: " + humanScore + " vs computer: " + computerScore; 

//NEW
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");
const computerChoiceText = document.querySelector(".computers-choice");
const scoreText = document.querySelector(".score");
const announcement = document.querySelector(".ann");
const subtitle = document.querySelector(".subtitle");

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
            computerChoiceText.textContent = "computers says \nRock!";
            break;
        case 2 :
            computerChoice = "paper";
            computerChoiceText.textContent = "computers says \nPaper!";
            break;
        case 3 :
            computerChoice = "scissor";
            computerChoiceText.textContent = "computers says \nScissor!";
            break;
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice){
   
if (roundCounter <= 5) countRounds();
    if(humanChoice !== computerChoice){

        if (humanChoice === "rock"){
            if(computerChoice === "scissor"){
                humanScore++;
                announcement.textContent = "Human wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                if (roundCounter === 5) ResetGame();
                return;
            }
            else if(computerChoice === "paper"){
                computerScore++;
                announcement.textContent = "Computer wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                if (roundCounter === 5) ResetGame();
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
                if (roundCounter === 5) ResetGame();
                return;
            }
            else if(computerChoice === "scissor"){
                computerScore++;
                announcement.textContent = "Computer wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                if (roundCounter === 5) ResetGame();
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
                if (roundCounter === 5) ResetGame();return;
                return;
            }
            else if(computerChoice === "rock"){
                computerScore++;
                announcement.textContent = "Computer wins";
                scoreText.textContent = ("humans: " + humanScore + " vs computer: " + computerScore);
                if (roundCounter === 5) ResetGame();return;
                return;
            } else {
                alert("something went wrong");
                return;
            }
        }
    } else {
        announcement.textContent = "It's a tie";
        if (roundCounter === 5) ResetGame();return;
        return;
    }
}

function ResetGame(){
 
    if(humanScore < computerScore)  subtitle.textContent = 
    ("computer wins\nhumans: " + humanScore + " - computer: " + computerScore);
    if(humanScore > computerScore)  subtitle.textContent = 
    ("human wins\nhumans: " + humanScore + " - computer: " + computerScore);
    if(humanScore === computerScore) subtitle.textContent = 
    ("It's a tie!\nhumans: " + humanScore + " - computer: " + computerScore);
    announcement.textContent = "Go again?";
    scoreText.textContent = "humans: 0 vs computer: 0";
    computerChoiceText.textContent = "computers choice";
    humanScore = 0;
    computerScore = 0;
    //ask to play another game?
    roundCounter = 0;
}

function countRounds(){
    roundCounter++
    subtitle.textContent = ("Round " + roundCounter);
}

//give round = playround = finish up round