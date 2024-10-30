let scrollPosition = 0;
const boxWidth = document.querySelector('.box').offsetWidth;
const slidesContainer = document.querySelector('.slides');

function scrollImages(direction) {
    const maxScrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;

    // Update scroll position based on direction
    scrollPosition += direction * boxWidth;

    // Loop around if reaching the start or end
    if (scrollPosition < 0) {
        scrollPosition = maxScrollLeft;
    } else if (scrollPosition > maxScrollLeft) {
        scrollPosition = 0;
    }

    // Apply the scroll position
    slidesContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}