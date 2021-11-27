// Modal
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const modalCloseBtn = document.querySelector(".bground span.close")

function launchModal() {
  modalbg.style.display = "block"
}

export const closeModal = () => {
  modalbg.style.display = "none"
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
modalCloseBtn.addEventListener("click", closeModal)
