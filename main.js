
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
           $('.navbar').addClass("sticky");
        }else  {
          $('.navbar').removeClass("sticky");
        }
    });


    // toggle menu/navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $(this).find('svg').toggleClass('fa-solid fa-bars fa-solid fa-xmark');
        // $(".menu-btn svg", this).toggleClass("fa-bars fa-xmark");

    })


  //   $("#light-mode-toggle").click(function(){
    
  //     var img = $("#menu-bg");

  //     if (img.src = "img/bg-dark-big.jpg"){
  //       img.attr("src",'img/bg-light-big.jpg')
  //     } 
      
    
      
      
  //     else {
  //       img.attr("src",'img/bg-dark-big.jpg')
  //       }


  // });




});


// function changeImge() {

//   const bgImage = document.querySelector('#menu-bg')
//   console.log(bgImage);
//   console.log("clicked")



  // const card = document.querySelector('img')
  // card.setAttribute('src', 'img/blank.png')

// };


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


// function addTheme() {
//   document.body.classList.toggle('lightmode')


//   const element = document.getElementById("toggle-icon");
//   if (element.classList.contains("fa-toggle-off")) {
//     element.classList.remove("fa-toggle-off")
//     element.classList.add("fa-toggle-on")
   
//   }
//   else {
//     element.classList.remove("fa-toggle-on")
//     element.classList.add("fa-toggle-off")
    
//   }
// }




let lightMode = localStorage.getItem('lightMode'); 
const lightModeToggle = document.querySelector('#light-mode-toggle');


  const updateImage = () => {
  var bgImage = document.querySelector('#menu-bg')
  
  if (bgImage.getAttribute("src") == "img/bg-dark-big.jpg") {
    bgImage.src = "img/bg-light-big.jpg";
  } 

  else if (bgImage.getAttribute("src") == "img/bg-light-big.jpg") {
    bgImage.src = "img/bg-dark-big.jpg";
  } 

 if (bgImage.getAttribute("src") === "img/bg-dark-small.jpg") {
    bgImage.src = "img/bg-light-small.jpg";
  }
 
  }




const enableLightMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('lightmode');
 
  // 2. Update darkMode in localStorage
  localStorage.setItem('lightMode', 'enabled');

  
}


const disableLightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('lightmode');
 
  // 2. Update darkMode in localStorage 
  localStorage.setItem('lightMode', null);

  // document.getElementById("menu-bg").src = 'img/bg-dark-big.jpg';
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (lightMode === 'enabled') {
  enableLightMode();
}

lightModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  const toggleIcon = document.querySelector("#toggle-icon");
  lightMode = localStorage.getItem('lightMode'); 
 
  
  // if it not current enabled, enable it
  if (lightMode !== 'enabled' && toggleIcon.classList.contains("fa-toggle-off") ) {
    enableLightMode();
    toggleIcon.classList.remove("fa-toggle-off")
    toggleIcon.classList.add("fa-toggle-on")
    updateImage(); 
   
  // if it has been enabled, turn it off  
  } else {  
    disableLightMode();
    toggleIcon.classList.remove("fa-toggle-on")
    toggleIcon.classList.add("fa-toggle-off")
    updateImage(); 
    
  }
});