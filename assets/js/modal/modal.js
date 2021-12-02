// Modal
// -----
const modalbg = document.querySelector(".app-modal")
const modalBtn = document.querySelectorAll(".teaser__button")
const modalCloseBtn = document.querySelector(".app-modal span.modal__close")

// Open modal
function launchModal() {
  modalbg.style.display = "block"
}

// Close modal
export const closeModal = () => {
  modalbg.style.display = "none"
}

// Attribute events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
modalCloseBtn.addEventListener("click", closeModal)
