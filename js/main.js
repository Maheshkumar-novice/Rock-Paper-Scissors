let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');

burger.addEventListener('click', toggleMenu);
burger.querySelector('svg:nth-child(2)').style.display = "none";
function toggleMenu(e) {
    nav.classList.toggle('showMenu');
    if (nav.classList.contains('showMenu')) {
        // if (caption) {
        //     caption.style.visibility = "hidden";
        // }
        burger.querySelector('svg:nth-child(2)').style.display = "inline";
        burger.querySelector('svg:first-child').style.display = "none";
    }
    else {
        // setTimeout(() => {
        //     caption.style.visibility = "visible";
        // }, 300);
        burger.querySelector('svg:first-child').style.display = "inline";
        burger.querySelector('svg:nth-child(2)').style.display = "none";

    }
}



