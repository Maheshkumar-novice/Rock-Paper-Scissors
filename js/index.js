window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === 'p') {
        document.querySelector('.play-button').click();
    }
    else if (e.key === 'c') {
        document.querySelector('.change-user-button').click();
    }
    else {
        return;
    }
});

if (!localStorage.getItem('username')) {
    localStorage.setItem('username', 'User');
}

let changeNameButton = document.querySelector('.change-user-button');
changeNameButton.addEventListener('click', (e) => {
    e.preventDefault();
    userName = prompt('User Name:', 'User');
    if (!userName) {
        userName = "User";
    }
    document.querySelector('.user-name').textContent = userName;
    localStorage.setItem('username', userName);
});

window.onload = document.querySelector('.user-name').textContent = localStorage.getItem('username');