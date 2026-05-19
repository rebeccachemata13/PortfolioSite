document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const dotsContainer = document.querySelector(".slider-dots");

    let current = 0;

    slides.forEach((_, index) => {

        const dot = document.createElement("div");

        dot.classList.add("dot");

        if(index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            showSlide(index);
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current = index;
    }

    nextBtn.addEventListener("click", () => {

        current++;

        if(current >= slides.length) {
            current = 0;
        }

        showSlide(current);
    });

    prevBtn.addEventListener("click", () => {

        current--;

        if(current < 0) {
            current = slides.length - 1;
        }

        showSlide(current);
    });

    setInterval(() => {

        current++;

        if(current >= slides.length) {
            current = 0;
        }

        showSlide(current);

    }, 5000);

});