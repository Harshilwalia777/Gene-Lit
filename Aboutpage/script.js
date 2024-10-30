let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Automatic slideshow
setInterval(() => {
    showSlides(slideIndex += 1);
}, 3000); // Change image every 3 seconds

// Display the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");

    // Reset to first slide if out of bounds
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    // Hide all slides and show the current slide
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
