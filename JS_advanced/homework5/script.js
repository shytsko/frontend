const imagesURLs = ["img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg",
    "img/image5.jpg"]

let currentIndex = 0;

const imageEl = document.querySelector('.slider_image');

const showImage = (index => {
    document.querySelector('.slider__dot_current')?.classList.remove('slider__dot_current');
    imageEl.src = imagesURLs[index];
    document.querySelector(`.slider__dot[data-index="${index}"]`)
        .classList.add('slider__dot_current');
});

const dotsEl = document.querySelector('.slider__nav-dots');
imagesURLs.forEach((element, index) => {
    const newDot = document.createElement('button');
    newDot.classList.add('slider__dot');
    newDot.dataset.index = index;
    newDot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
    dotsEl.append(newDot);
});


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex + imagesURLs.length - 1) % imagesURLs.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagesURLs.length;
    showImage(currentIndex);
});

showImage(currentIndex);