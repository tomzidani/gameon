// Navigator
const navEl = document.querySelector(".header__nav")
const navBtn = document.querySelector(".header__nav-responsive")

const toggleNav = () => {
  navEl.classList.toggle("opened")
  navBtn.classList.toggle("opened")
}

navBtn.addEventListener("click", toggleNav)
