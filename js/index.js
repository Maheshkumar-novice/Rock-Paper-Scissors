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