function scrollToSection() {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }
}

window.onload = scrollToSection;

window.addEventListener('hashchange', scrollToSection);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".data-container").forEach((container) => {
        let swiperContainer = container.querySelector(".swiper-container");
        let swiperWrapper = container.querySelector(".swiper-wrapper");

        if (!swiperContainer || !swiperWrapper) {
            console.error("Swiper container or wrapper not found.");
            return;
        }

        let swiper = new Swiper(swiperContainer, {
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: container.querySelector(".swiper-navigation .next"),
                prevEl: container.querySelector(".swiper-navigation .previous")
            }
        });

        // Event listener for navigation buttons
        container.querySelectorAll(".swiper-navigation a").forEach((button) => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
            });
        });
    });
});

document.addEventListener('mousemove', function(event) {
    const navbar = document.querySelector('.navbar');
    if (event.clientX < 50) {
        navbar.style.left = '0';
    } else {
        navbar.style.left = '-250px';
    }
});
