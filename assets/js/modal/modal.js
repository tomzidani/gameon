// Nav
// ---
function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// Modal
// -----
// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const modalCloseBtn = document.querySelector(".bground span.close")

// Launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none"
}

// Modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
modalCloseBtn.addEventListener("click", closeModal)
