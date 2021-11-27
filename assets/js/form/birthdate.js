// Form
// ----
const birthdate = document.querySelector("input#birthdate")

const today = new Date()
const dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
const mm = today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth()
const yyyy = today.getFullYear()

birthdate.setAttribute("max", `${yyyy}-${mm}-${dd}`)
