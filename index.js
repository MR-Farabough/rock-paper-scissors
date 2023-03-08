// ask user for name
// ask for user input (since its only in cli I will make shortcuts)
// make sure they enter the allowed value
// while game counter is under 5 games or one user hasn't won 3 times keep asking for input
// create score values for each player
// if user wins add a point 
// if user wins 3 times game over
// display a grind of scores maybe recent plays

let userName = prompt("Enter name?");
let computerChoice = "";
let userChoice = "";
const choices = ["Rock","Paper","Scissors"];

function getUserChoice() {
    let binUserChoice = prompt("(R)ock | (P)aper | (S)cissors")
    binUserChoice = binUserChoice.toLowerCase()
    if (binUserChoice === "rock" || "r") { 
        userChoice = choices[0]
    } else if (binUserChoice === "paper" || "p") {
        userChoice = choices[1]
    } else {
        userChoice = choices[2]
    }
    return console.log(userChoice)
};

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3)
    computerChoice = choices[i]
    return console.log(computerChoice)
};

getComputerChoice();