// Contents:
// Global Variables
// Elements Selection
// Event Listeners
// User Choice Function 
// Computer Choice Function
// Get Result Function
// Calculate Score Function
// Update Score Function
// Find Winner Function
// Reset Score Function
// Update Table Function
// Clear Table Function
// Update Opacity Function
// Reset Opacity Function
// Load Result Function
// Update Caption Function

// Global Variables:
let userChoiceVar;
let computerChoiceVar;
let userScore = 0;
let computerScore = 0;

// Elements Selection:
let userChoiceList = Array.from(document.querySelectorAll('.user-choice-list'));
let computerChoiceList = Array.from(document.querySelectorAll('.computer-choice-list'))
let userScorePlaces = Array.from(document.querySelectorAll('.current-score-user'));
let computerScorePlaces = Array.from(document.querySelectorAll('.current-score-computer'));
let scoreTable = document.querySelector('.score-table');
let caption = document.querySelector('.caption');

// Event Listeners:
userChoiceList.forEach(item => {
    item.addEventListener('click', userChoice);
});

// User Choice Function:
function userChoice(e) {
    userChoiceVar = e.target.classList[0];
    getResult(userChoiceVar, computerChoice());
}

// Computer Choice Function:
function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choiceIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[choiceIndex];
    return choice;
}

// Get Result Function:
function getResult(userChoiceVar, computerChoiceVar) {
    updateOpacity(userChoiceVar, computerChoiceVar);
    updateCaption(userChoiceVar, computerChoiceVar);
    console.log(userChoiceVar, computerChoiceVar);
    if (userChoiceVar === computerChoiceVar) {
        console.log('draw');
        updateTable(userChoiceVar, computerChoiceVar, 'draw');
        calculateScore('draw');
        return;
    }
    else if ((userChoiceVar === 'rock' && computerChoiceVar === 'paper') || (userChoiceVar === 'paper' && computerChoiceVar === 'scissors')
        || (userChoiceVar === 'scissors' && computerChoiceVar === 'rock')) {
        console.log('computer');
        updateTable(userChoiceVar, computerChoiceVar, 'computer');
        calculateScore('computer');
        return;
    }
    console.log('user');
    updateTable(userChoiceVar, computerChoiceVar, 'user');
    calculateScore('user');
    return;
}

// Calculate Score Function: 
function calculateScore(winner) {
    if (winner === 'user') {
        userScore += 1;
    }
    else if (winner === 'computer') {
        computerScore += 1;
    }
    console.log(userScore, computerScore);
    updateScore();
    findWinner();
}

// Update Score Function:
function updateScore() {
    userScorePlaces.forEach(item => {
        item.textContent = userScore;
    });
    computerScorePlaces.forEach(item => {
        item.textContent = computerScore;
    });
}

// Find Winner Function:
function findWinner() {
    if (userScore === 5) {
        console.log('user won');
        resetScore();
        updateScore();
        loadResult('user');
    }
    else if (computerScore === 5) {
        console.log('computer won');
        resetScore();
        updateScore();
        loadResult('computer');
    }
}

// Reset Score Function:
function resetScore() {
    userScore = 0;
    computerScore = 0;
    clearTable();
}

// Update Table Function:
function updateTable(userChoiceVar, computerChoiceVar, result) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.textContent = userChoiceVar;
    td2.textContent = computerChoiceVar;
    if (result === 'user') {
        td1.classList.add('user-won');
        td2.classList.add('user-won');
    }
    else if (result === 'computer') {
        td1.classList.add('computer-won');
        td2.classList.add('computer-won');
    }
    else {
        td1.classList.add('draw');
        td2.classList.add('draw');
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    scoreTable.appendChild(tr);
    console.log(scoreTable);
}

// Clear Table Function:
function clearTable() {
    let temp = Array.from(document.querySelectorAll('.score-table tr'))[0];
    let delTableData = Array.from(document.querySelectorAll('.score-table tr'));
    for (let i = 1; i < delTableData.length; i++) {
        scoreTable.removeChild(delTableData[i]);
    }
    resetOpacity();
}

// Update Opacity Function:
function updateOpacity(userChoiceVar, computerChoiceVar) {
    for (let i = 0; i < userChoiceList.length; i++) {
        console.log(userChoiceList[i].textContent);
        if (userChoiceList[i].classList.contains(userChoiceVar)) {
            userChoiceList[i].style.opacity = 1;
            continue;
        }
        userChoiceList[i].style.opacity = 0.3;
    }
    for (let i = 0; i < computerChoiceList.length; i++) {
        if (computerChoiceList[i].classList.contains(computerChoiceVar)) {
            computerChoiceList[i].style.opacity = 1;
            continue;
        }
        computerChoiceList[i].style.opacity = 0.3;
    }
}

// Reset Opacity Function:
function resetOpacity() {
    for (let i = 0; i < userChoiceList.length; i++) {
        userChoiceList[i].style.opacity = 1;
        computerChoiceList[i].style.opacity = 1;
    }
}

// Load Result Function:
function loadResult(winner) {
    localStorage.setItem('winner', winner);
    location.replace('./result.html');
}

// Update Caption Function: 
function updateCaption(opt1, opt2) {
    if ((opt1 === 'rock' && opt2 === 'paper') || (opt1 === 'paper' && opt2 === 'rock')) {
        caption.textContent = "Rock Rolled by Paper!";
    }
    else if ((opt1 === 'paper' && opt2 === 'scissors') || (opt1 === 'scissors' && opt2 === 'paper')) {
        caption.textContent = "Rest in Pieces Paper!";
    }
    else if ((opt1 === 'scissors' && opt2 === 'rock') || (opt1 === 'rock' && opt2 === 'scissors')) {
        caption.textContent = "Scissors Scared!";
    }
    else {
        caption.textContent = "I Hate Draws!";
    }
}