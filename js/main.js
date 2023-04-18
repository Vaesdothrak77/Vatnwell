const feedbackLinks = document.querySelectorAll(".feedback-link");

feedbackLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const modalOverlay = document.querySelector("#modalOverlay");
    modalOverlay.style.display = "block";
  });
});

const modalCloseBtn = document.querySelector("#modalClose");
modalCloseBtn.addEventListener("click", () => {
  const modalOverlay = document.querySelector("#modalOverlay");
  modalOverlay.style.display = "none";
});

const phoneIcon = document.querySelector(".phone-icon");
let offset = 0;

function animatePhone() {
  phoneIcon.style.transform = `translateY(${offset}px)`;
  offset = -offset;
  setTimeout(animatePhone, 1000);
}

animatePhone();



// window.addEventListener('scroll', function() {
//   var header = document.getElementById('header');
//   if (window.scrollY > 100) { // Change 100 to whatever value you prefer
//     header.classList.add('header-scroll');
//   } else {
//     header.classList.remove('header-scroll');
//   }
// });

