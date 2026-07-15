document.addEventListener("DOMContentLoaded", () => {
  const perguntas = document.querySelectorAll(".faq-item");

  perguntas.forEach(item => {
    const pergunta = item.querySelector(".faq-question");

    pergunta.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        perguntas.forEach(i => i.classList.remove("active"));

        item.classList.add("active");
      }
    });
  });
});
