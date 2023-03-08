let userName = "";
let computerChoice = "";
let userChoice = "";
let totalGames = 0;
let computerTotal = 0;
let userTotal = 0;
const choices = ["Rock","Paper","Scissors"];

function play() {
    function getUserName() {
        userName = prompt("Enter name?");
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
        console.log(`${userName} selected '${userChoice}'`);
    };
    function getComputerChoice() {
        let i = Math.floor(Math.random() * 3);
        computerChoice = choices[i];
        console.log(`Computer selected '${computerChoice}'`);
    };
    
    function checkWin() {
        while (totalGames < 5) {
            function checkUserWin() {
                if (userChoice === "Rock" && computerChoice === "Scissors" || userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissors" && computerChoice === "Paper") {
                    userTotal += 1;
                    totalGames += 1;
                    console.log(`
${userName} selected ${userChoice} & the computer selected ${computerChoice}
Games : ${totalGames}
User : ${userTotal}
Computer : ${computerTotal}
                    `)
                    userChoice = "";
                    computerChoice = "";
                }
            }
            function checkComputerWin() {
                if (userChoice === "Scissors" && computerChoice === "Rock" || userChoice === "Rock" && computerChoice === "Paper" || userChoice === "Paper" && computerChoice === "Scissors") {
                    computerTotal += 1
                    totalGames += 1;
                    console.log(`
${userName} selected ${userChoice} & the computer selected ${computerChoice}
Games : ${totalGames}
User : ${userTotal}
Computer : ${computerTotal}
                    `)
                    userChoice = "";
                    computerChoice = "";
                }
            }
            function checkTie() {
                if (userChoice === "Rock" && computerChoice === "Rock" || userChoice === "Paper" && computerChoice === "Paper" || userChoice === "Scissors" && computerChoice === "Scissors") {
                    totalGames += 1;
                    console.log(`
${userName} selected ${userChoice} & the computer selected ${computerChoice}
Games : ${totalGames}
User : ${userTotal}
Computer : ${computerTotal}
                    `)
                    userChoice = "";
                    computerChoice = "";
                }
            }
            checkTie()
            checkUserWin()
            checkComputerWin()
        }
        getUserName();
        getUserChoice();
        getComputerChoice();
        checkWin();
    }
    getUserName();
    getUserChoice();
    getComputerChoice();
    checkWin();
}

play();