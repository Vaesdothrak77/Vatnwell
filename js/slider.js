const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot"); 
const wrapper = document.querySelector(".slider__wrapper");
const prevBtn = document.querySelector(".slider__control_prev");
const nextBtn = document.querySelector(".slider__control_next");

let slideIndex = 0;

prevBtn.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  setActiveSlide();
  setActiveDot();
});

nextBtn.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  setActiveSlide();
  setActiveDot();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    setActiveSlide();
    setActiveDot();
  });
});

function setActiveSlide() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function setActiveDot() {
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

setActiveSlide();
setActiveDot();