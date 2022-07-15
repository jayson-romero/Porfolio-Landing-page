


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


function addTheme() {
  document.body.classList.toggle('lightmode')


  const element = document.getElementById("icon");
  if (element.classList.contains("fa-toggle-off")) {
    element.classList.remove("fa-toggle-off")
    element.classList.add("fa-toggle-on")
   
  }
  else {
    element.classList.remove("fa-toggle-on")
    element.classList.add("fa-toggle-off")
    
  }
}



