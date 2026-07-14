const track = document.querySelector(".track");
const sliderImagens = document.querySelectorAll(".track img");

let index = 0;

function slide() {
  const largura = document.querySelector(".slider").clientWidth;

  index++;

  if (index >= sliderImagens.length) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * largura}px)`;
}

setInterval(slide, 3000);
