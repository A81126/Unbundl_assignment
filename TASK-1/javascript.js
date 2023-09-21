let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
    slideIndex = n;
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    if (n >= slides.length) {
        slideIndex = 0;
    }
    slides.forEach((slide) => (slide.style.transform = `translateX(-${slideIndex * 100}%)`));
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

// Automatically rotate the carousel every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

showSlide(slideIndex);
