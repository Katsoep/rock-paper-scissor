console.log("Hello :3")
// Let  computer choice
let computerChoice;
function getComputerChoice() {
// Create function getComputerChoice
//    return random value 1 - 3
//    return equals computer choice
    let computerChoice;
    switch(Math.floor(Math.random() * 3) + 1){
        case 1 :
            computerChoice = "Rock";
            break;
        case 2 :
            computerChoice = "Paper";
            break;
        case 3 :
            computerChoice = "Scissor";
            break;

    }
    console.log(computerChoice);
    return computerChoice;

}
// Let human choice 
let humanChoice;
function getHumanChoice() {
    // Create function getHumanChoice
//    prompt human choice (assuming the prompt is always valid)
//    return humans choice
    let humanChoice = prompt("Rock paper or scissor?");
    console.log(humanChoice);
    return humanChoice;

}

console.log(getComputerChoice())
console.log(getHumanChoice())


