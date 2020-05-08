// Kode for hamburgermeny

function BurgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

// Kode for slideshow
var slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slideshow");
  var dots = document.getElementsByClassName("demo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
  console.log(slideIndex);
  var slidevar = setTimeout(showSlides, 6000); // Endrer bilde hvert 6. sekund

// Resetter timer når man klikker på knappene til slides
  let slide1=document.getElementById("slide1");
  let slide2=document.getElementById("slide2");
  let slide3=document.getElementById("slide3");

  slide1.onclick = function(){
    clearTimeout(slidevar);
        showSlides(slideIndex=0);
  }
  slide2.onclick = function(){
    clearTimeout(slidevar);
      showSlides(slideIndex=1);
  }
  slide3.onclick = function(){
    clearTimeout(slidevar);
      showSlides(slideIndex=2);
  }
}
