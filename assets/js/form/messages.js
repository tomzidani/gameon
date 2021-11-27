export const setError = (el, msg, inputBorder = true) => {
  el.parentNode.insertAdjacentHTML("beforeend", `<div class="msg--error">${msg}</div>`)
  inputBorder && el.classList.add("input--error")
}

export const resetErrors = () => {
  document.querySelectorAll(".msg--error").forEach((el) => el.remove())
  document.querySelectorAll(".input--error").forEach((el) => el.classList.remove("input--error"))
}
