// Import
import { closeModal } from "../modal/modal.js"

// Errors
// ------
// Displays an error in the parent div of the affected input
export const setError = (el, msg, inputBorder = true) => {
  el.parentNode.insertAdjacentHTML("beforeend", `<div class="msg--error">${msg}</div>`)
  inputBorder && el.classList.add("input--error")
}

// Reset errors by removing all the error content of the form
export const resetErrors = () => {
  document.querySelectorAll(".msg--error").forEach((el) => el.remove())
  document.querySelectorAll(".input--error").forEach((el) => el.classList.remove("input--error"))
}

// Confirmation
// ------------
const form = document.querySelector('form[name="reserve"')
const closeSpan = document.querySelector("span.modal__close")

// Displays a confirmation message and resets the form
export const setConfirmation = () => {
  let confirmationMessage = '<div class="msg--success">'
  confirmationMessage += "<p>Merci pour votre inscription</p>"
  confirmationMessage += '<button class="btn">Fermer</button>'
  confirmationMessage += "</div>"

  form.insertAdjacentHTML("beforebegin", confirmationMessage)
  form.reset()

  const closeBtn = document.querySelector(".msg--success > button")

  closeBtn.addEventListener("click", removeConfirmation)
  closeSpan.addEventListener("click", removeConfirmation)
}

// Closes the modal, deletes the confirmation message
// and the assigned event when the user closes the confirmation message
const removeConfirmation = () => {
  closeModal()
  document.querySelector(".msg--success").remove()
  closeSpan.removeEventListener("click", removeConfirmation)
}
