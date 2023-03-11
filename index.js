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
let userNameDiv = document.getElementById('userNameDiv')
let computerNameDiv = document.getElementById('botNameDiv')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let userNameEL = document.getElementById('userName')
let botNameEL = document.getElementById("botName")
const botName = "Bot"

function getUserName() {
    userName = "";
    userName = prompt("Enter name?");
    if (userName.length < 1) {
        getUserName()
    } else {
        userNameEL.innerText = userName
    }
}
function updateBotName() {
    let nums = Math.floor(Math.random() * 999);
    botNameEL.innerText = botName + nums;
}

function getUserChoice() {
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
        img = document.createElement('img')
        img.setAttribute('src', './imgs/tick.png')
        userNameDiv.append(img)
        userChoice = "";
        computerChoice = "";
    }
}

function checkComputerWin() {
    if (userChoice === "Scissors" && computerChoice === "Rock" || userChoice === "Rock" && computerChoice === "Paper" || userChoice === "Paper" && computerChoice === "Scissors") {
        computerTotal += 1
        totalGames += 1;
        img = document.createElement('img')
        img.setAttribute('src', './imgs/tick.png')
        computerNameDiv.append(img)
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
    if (userTotal > 4 || computerTotal > 4) {
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

rock.addEventListener('click', () => {
    binUserChoice = "rock"
    getUserChoice();
    getComputerChoice();
    checkWin();
    checkGameOver();
})
paper.addEventListener('click', () => {
    binUserChoice = "paper"
    getUserChoice();
    getComputerChoice();
    checkWin();
    checkGameOver();
})
scissors.addEventListener('click', () => {
    binUserChoice = "scissors"
    getUserChoice();
    getComputerChoice();
    checkWin();
    checkGameOver();
})

function checkWin() {
    checkUserWin();
    checkComputerWin();
    checkTie();
}

function start() {
    getUserName();
    updateBotName();
}
start()