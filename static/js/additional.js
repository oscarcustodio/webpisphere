const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#btn-close");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Crear una nueva instancia de IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Si el elemento es visible
    if (!entry.isIntersecting) {
      console.log("El elemento no está visible");
      closeModal();
    }
  });
});

// Observar el elemento
observer.observe(modal);
