let userName = "";
let computerChoice = "";
let userChoice = "";
let totalGames = 0;
let computerTotal = 0;
let userTotal = 0;
const choices = ["Rock","Paper","Scissors"];
let gameOn = true;
let userPlayAgain = "";
let output = "";

function getUserName() {
    userName = prompt("Enter name?");
    return userName;
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
        console.log("error")
    }
    return console.log(`${userName} selected '${userChoice}'`);
};
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    computerChoice = choices[i];
    return console.log(`Computer selected '${computerChoice}'`);
};
function checkUserWin() {
    if (userChoice === "Rock" && computerChoice === "Scissors" || userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissors" && computerChoice === "Paper") {
        userTotal += 1;
        totalGames += 1;
        output = console.log(`${userName} selected ${userChoice} & the computer selected ${computerChoice}
Games : ${totalGames}
User : ${userTotal}
Computer : ${computerTotal}
        `)
        userChoice = "";
        computerChoice = "";
        return output;
    }
}
function checkComputerWin() {
    if (userChoice === "Scissors" && computerChoice === "Rock" || userChoice === "Rock" && computerChoice === "Paper" || userChoice === "Paper" && computerChoice === "Scissors") {
        computerTotal += 1
        totalGames += 1;
        output = console.log(`${userName} selected ${userChoice} & the computer selected ${computerChoice}
Games : ${totalGames}
User : ${userTotal}
Computer : ${computerTotal}
        `)
        userChoice = "";
        computerChoice = "";
        return output;
    }
}
function checkTie() {
    if (userChoice === "Rock" && computerChoice === "Rock" || userChoice === "Paper" && computerChoice === "Paper" || userChoice === "Scissors" && computerChoice === "Scissors") {
        totalGames += 1;
        output = console.log(`${userName} selected ${userChoice} & the computer selected ${computerChoice}
Games : ${totalGames}
User : ${userTotal}
Computer : ${computerTotal}
        `)
        userChoice = "";
        computerChoice = "";
        return output;
    }
}
function checkGameOver() {
    if (totalGames > 4) {
        gameOn = false;
        return playAgain();
    } else {
        return gameOn = true;
    }
}
function playAgain() {
    userPlayAgain = prompt("Do you want to play again? (Y) or (N)")
    userPlayAgain = userPlayAgain.toLowerCase()
    if (userPlayAgain === "y" || userPlayAgain === "yes") {
        return window.location.reload()
    } else if (userPlayAgain === "n" || userPlayAgain === "no") {
        return gameOn = false;
    } else {
        return playAgain();
    }
}
function checkWin() {
    checkUserWin();
    checkComputerWin();
    checkTie();
}
function start() {
    getUserName();
    for (i =0;totalGames<5;i++) {
        getUserChoice();
        getComputerChoice();
        checkWin();
        checkGameOver();
    }
}
// start()

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
rock.addEventListener('click', (e) => {
    console.log("rock was pressed")
})
paper.addEventListener('click', (e) => {
    console.log("paper was pressed")
})
scissors.addEventListener('click', () => {
    console.log("scissors was pressed")
})