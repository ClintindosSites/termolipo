document.addEventListener("DOMContentLoaded", () => {
  const perguntas = document.querySelectorAll(".faq-item");

  perguntas.forEach(item => {
    const pergunta = item.querySelector(".faq-question");

    if (!pergunta) return; // segurança: se não achar o botão, pula

    pergunta.addEventListener("click", () => {
      // Verifica se o item clicado já está ativo
      const jaEstaAtivo = item.classList.contains("active");

      // Fecha todos os itens
      perguntas.forEach(i => i.classList.remove("active"));

      // Se NÃO estava ativo, abre ele
      if (!jaEstaAtivo) {
        item.classList.add("active");
      }
      // Se já estava ativo, mantém fechado (por conta do removeAll acima)
    });
  });
});
