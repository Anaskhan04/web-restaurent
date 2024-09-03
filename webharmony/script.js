document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    let index = 0;

    function updateSlide() {
        images.forEach((img, idx) => {
            img.classList.remove('middle');
            img.style.transform = 'scale(1)';
            img.style.zIndex = '0';
        });

        const middleIndex = index % images.length;
        images[middleIndex].classList.add('middle');
        images[middleIndex].style.transform = 'scale(1.5)';
        images[middleIndex].style.zIndex = '1';

        const offset = -index * (100 + 20); // 100 for image width, 20 for margin
        slides.style.transform = `translateX(${offset}px)`;

        index = (index + 1) % images.length;
    }

    setInterval(updateSlide, 2000); // Adjust timing if necessary
});
