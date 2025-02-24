let humanScore = 0;
let computerScore = 0;

//computer choice
function getComputerChoice() {
    let randomNUmber = Math.floor(Math.random() * 3);
    if (randomNUmber === 0) {
        return 'rock';

    } else if (randomNUmber === 1) {
        return 'paper';

    } else {
        return 'scissors';
    }
}

//human choice
function getHumanChoice() {
    let humanChoice = prompt("Please type rock paper or scissors");
    return humanChoice;

}

function playround(humanChoice, computerChoice) {
    let humanChoice = getHumanChoice().toLowerCase;
    let computerChoice = getComputerChoice().toLowerCase;

    if (humanChoice === computerChoice) {
        return 'It is a tie';


    }

}