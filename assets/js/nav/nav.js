// Navigator
// ---------
const navEl = document.querySelector(".header__nav")
const navBtn = document.querySelector(".header__nav-responsive")

// Open/Close navigator
const toggleNav = () => {
  navEl.classList.toggle("opened")
  navBtn.classList.toggle("opened")
}

// Attribute event
navBtn.addEventListener("click", toggleNav)
