let computerChoice = "";
let userChoice = "";
let totalGames = 0;
let computerTotal = 0;
let userTotal = 0;
const choices = ["Rock","Paper","Scissors"];

function play() {
    function getUserName() {
        let userName = prompt("Enter name?");
    }
    function getUserChoice() {
        let binUserChoice = prompt("(R)ock | (P)aper | (S)cissors");
        binUserChoice = binUserChoice.toLowerCase();
        if (binUserChoice === "rock" || binUserChoice === "r") { 
            userChoice = choices[0];
        } else if (binUserChoice === "paper" || binUserChoice === "p") {
            userChoice = choices[1];
        } else if (binUserChoice === "scissors" || binUserChoice === "s") {
            userChoice = choices[2];
        } else {
            getUserChoice();
        }
        return console.log(`${userName} selected '${userChoice}'`);
    };
    function getComputerChoice() {
        let i = Math.floor(Math.random() * 3);
        computerChoice = choices[i];
        return console.log(`Computer selected '${computerChoice}'`);
    };
    
    function checkWin() {
        while (totalGames < 5) {
            if (userChoice === "Rock" && computerChoice === "Rock") {
                computerTotal += 1;
                userTotal += 1;
                totalGames += 1;
                userChoice = "";
                computerChoice = "";
            }
        }
    }
    getUserName()
    getUserChoice();
    getComputerChoice();
}
