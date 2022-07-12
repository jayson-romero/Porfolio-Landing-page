


function hideNavBar() {
  const primaryNav =   document.querySelector('.primary-nav')
//   primaryNav.classList.toggle("hide");

  
  if (primaryNav .classList.contains("hide")) {
     primaryNav.classList.remove("hide")
  }
  else {
    primaryNav.classList.add("hide")
  }
}
