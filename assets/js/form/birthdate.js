// Form
// ----
// Set max date to today on birthdate input
const birthdate = document.querySelector("input#birthdate")

birthdate.setAttribute("max", new Date().toISOString().split("T")[0])
