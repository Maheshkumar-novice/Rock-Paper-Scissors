let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');
burger.querySelector('svg:nth-child(2)').style.display = "none";

burger.addEventListener('click', toggleMenu);

function toggleMenu(e) {
    nav.classList.toggle('showMenu');
    if (nav.classList.contains('showMenu')) {
        burger.querySelector('svg:nth-child(2)').style.display = "inline";
        burger.querySelector('svg:first-child').style.display = "none";
    }
    else {
        burger.querySelector('svg:first-child').style.display = "inline";
        burger.querySelector('svg:nth-child(2)').style.display = "none";

    }
}



