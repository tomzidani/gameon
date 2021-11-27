// Navigator
const respNavBtn = document.querySelector("#respNavBtn")

const editNav = () => {
  const x = document.getElementById("myTopnav")

  x.className === "topnav" ? (x.className += " responsive") : (x.className = "topnav")
}

respNavBtn.addEventListener("click", editNav)
