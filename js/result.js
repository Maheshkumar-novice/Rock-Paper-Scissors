let winner = document.querySelector(".winner");
let firstPart = localStorage.getItem("winner")[0].toUpperCase();
let secondPart = localStorage.getItem("winner").slice(1);
let wholePart = firstPart + secondPart;
if (wholePart === "User") {
    if (localStorage.getItem('username')) {
        wholePart = localStorage.getItem('username');
    }
    winner.style.color = "#ffd97d";
} else {
    winner.style.color = "#a61e13";
}
winner.style.fontWeight = "bold";
winner.textContent = wholePart;
window.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key === 'Enter') {
        document.querySelector('.play-again-button').click();
    }
    else {
        return;
    }
});