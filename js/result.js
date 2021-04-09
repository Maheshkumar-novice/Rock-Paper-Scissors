let winner = document.querySelector(".winner");
let firstPart = localStorage.getItem("winner")[0].toUpperCase();
let secondPart = localStorage.getItem("winner").slice(1);
let wholePart = firstPart + secondPart;
if (wholePart === "User") {
    winner.style.color = "#ffd97d";
} else {
    winner.style.color = "#a61e13";
}
winner.style.fontWeight = "bold";
winner.textContent = wholePart;
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('a').click();
    }
    else {
        return;
    }
});