const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
    window.history.back();
});

nextButton.addEventListener('click', () => {
    window.history.forward();
});