const slides = document.querySelectorAll(".slide");

let atual = 0;

function atualizarCarousel() {
  slides.forEach(slide => {
    slide.className = "slide";
  });

  const leftFar = (atual - 2 + slides.length) % slides.length;
  const left = (atual - 1 + slides.length) % slides.length;
  const right = (atual + 1) % slides.length;
  const rightFar = (atual + 2) % slides.length;

  slides[atual].classList.add("active");
  slides[left].classList.add("left");
  slides[right].classList.add("right");
  slides[leftFar].classList.add("leftFar");
  slides[rightFar].classList.add("rightFar");
}

function proximoSlide() {
  atual = (atual + 1) % slides.length;
  atualizarCarousel();
}

function slideAnterior() {
  atual = (atual - 1 + slides.length) % slides.length;
  atualizarCarousel();
}

document.querySelector(".next").addEventListener("click", proximoSlide);
document.querySelector(".prev").addEventListener("click", slideAnterior);

atualizarCarousel();

setInterval(proximoSlide, 3000);
