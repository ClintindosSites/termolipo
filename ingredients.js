document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".ingredient-track");
  const cards = document.querySelectorAll(".ingredient-card");

  let index = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function moverSlider() {
    const visible = getVisibleCards();

    const cardWidth = cards[0].offsetWidth;

    const gap = parseInt(getComputedStyle(track).gap) || 0;

    index++;

    if (index > cards.length - visible) {
      index = 0;
    }

    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
  }

  setInterval(moverSlider, 3000);

  window.addEventListener("resize", () => {
    index = 0;
    track.style.transform = "translateX(0)";
  });
});
