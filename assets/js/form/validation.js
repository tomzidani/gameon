// Form
// ----
import { isBetween, isEmail, isEmpty, isNumeric, isObjectEmpty, isOneChecked } from "../utils/helpers/validation.helpers.js"
import { resetErrors, setError } from "./messages.js"

// Declare variables
const form = {
  form: document.querySelector("form[name='reserve']"),
  firstname: document.querySelector("input#first"),
  lastname: document.querySelector("input#last"),
  email: document.querySelector("input#email"),
  birthdate: document.querySelector("input#birthdate"),
  competitions: document.querySelector("input#quantity"),
  locations: document.querySelectorAll("input[name='location']"),
  termsOfUse: document.querySelector("input#checkbox1"),
  newsletter: document.querySelector("input#checkbox2"),
}

// Validate form
function validate(e) {
  e.preventDefault()

  resetErrors()

  const { firstname, lastname, email, birthdate, competitions, locations, termsOfUse } = form

  let errors = {}

  if (!isBetween(firstname.value, 2)) errors.firstname = "Le prénom doit contenir au moins 2 caractères"
  if (isEmpty(firstname.value)) errors.firstname = "Le champ est vide"

  if (!isBetween(lastname.value, 2)) errors.lastname = "Le nom doit contenir au moins 2 caractères"
  if (isEmpty(lastname.value)) errors.lastname = "Le champ est vide"

  if (!isEmail(email.value)) errors.email = "L'adresse e-mail est invalide"
  if (isEmpty(email.value)) errors.email = "Le champ est vide"

  if (isEmpty(birthdate.value)) errors.birthdate = "Le champ est vide"

  if (!isNumeric(parseInt(competitions.value))) errors.competitions = "Le nombre de tournois doit être une valeur numérique"
  if (isEmpty(competitions.value)) errors.competitions = "Le champ est vide"

  if (!isOneChecked(locations)) errors.locations = "Une ville doit être sélectionnée"

  if (!termsOfUse.checked) errors.termsOfUse = "Vous devez accepter les conditions d'utilisation"

  if (!isObjectEmpty(errors)) {
    for (const [k, val] of Object.entries(errors)) {
      switch (k) {
        case "locations":
          setError(form[k][0], val, false)
          break

        default:
          setError(form[k], val)
          break
      }
    }

    return
  }

  console.log("OK !")
}

// Adding events
form.form.addEventListener("submit", validate)
