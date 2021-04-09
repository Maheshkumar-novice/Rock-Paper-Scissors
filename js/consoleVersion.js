// Functions Block Start
function generateUserChoice() {
    let choice = prompt('Enter Your Choice > (Rock/Paper/Scissors)', 'rock')
    if (choice === null) {
        console.log('\n***Value Error So, Default Value Applied!***');
        choice = 'rock';
    }
    else if (choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissors') {
        choice = choice.toLowerCase();
    }
    else {
        console.log('\n***Value Error So, Default Value Applied!***');
        choice = 'rock';
    }
    return choice;
}

function generateComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choiceIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[choiceIndex];
    return choice;
}

function playRound(userChoice, computerChoice) {
    console.log(`\n${userName}: ${userChoice} - Computer: ${computerChoice}`);
    let result = checkResult(userChoice, computerChoice);
    if (result === 'computer') {
        console.log('Computer Won!');
    }
    else if (result === 'user') {
        console.log(`${userName} Won!`);
    }
    else {
        console.log('Drawn!');
    }
    printScore(result);
}

function checkResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    else if ((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors')
        || (userChoice === 'scissors' && computerChoice === 'rock')) {
        return 'computer'
    }
    return 'user'
}

function printScore(result) {
    if (result === 'computer') {
        computerScore += 1;
    }
    else if (result === 'user') {
        userScore += 1;
    }
    console.log(`Computer Score: ${computerScore} - ${userName} Score: ${userScore}`);
}
// Functions Block End

// Driver Code Part
let computerScore = 0;
let userScore = 0;
let userName = prompt('UserName: ', 'User');
if (userName === null) {
    userName = 'User';
}

for (i = 0; i < 5; i++) {
    playRound(generateUserChoice(), generateComputerChoice());
}

if (computerScore > userScore) {
    console.log("\nComputer Won The Game!");
}
else if (computerScore < userScore) {
    console.log(`\n${userName} Won the Game!`);
}
else {
    console.log("\nGame Drawn!");
}