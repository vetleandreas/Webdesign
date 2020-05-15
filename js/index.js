// Kode for hamburgermeny
let z = document.getElementById("burgermeny");
z.style.background = 'url("./img/bk.png") center center / 75% no-repeat';

function BurgerMenu() {
  let x = document.getElementById("buttonsleft");
  let y = document.getElementById("buttonsright");

  if (x.style.display === "inline") {
    x.style.display = "none";
  } else {
    x.style.display = "inline";
  }

  if (y.style.display === "inline") {
    y.style.display = "none";
  } else {
    y.style.display = "inline";
  }

  if (
    z.style.background == 'url("./img/bk.png") center center / 75% no-repeat'
  ) {
    z.style.background = 'url("./img/bkto.png") no-repeat center';
    document.getElementById("navbar").style.height = "70vh";
    document.getElementById("navbar").style.backgroundColor = "#000000";
    document.getElementById("navbarhide").style.display = "none";
    document.getElementById("socialmedia").style.position = "absolute";
    document.getElementById("socialmedia").style.bottom = "3rem";
    document.getElementById("footer").style.height = "30vh";
    document.getElementById("footer").style.backgroundImage =
      'url("https://www.transparenttextures.com/patterns/mirrored-squares.png")';
    document.getElementById("footer").style.backgroundColor = "#000000";
    document.getElementById("footerline").style.backgroundColor = "#fff766";
    document.getElementById("buttonsnavbar").style.marginTop = "20%";
  } else {
    z.style.background = 'url("./img/bk.png") no-repeat center';
    document.getElementById("navbar").style.height = "auto";
    document.getElementById("navbar").style.backgroundColor = "#6969b3";
    document.getElementById("navbarhide").style.display = "block";
    document.getElementById("footer").style.height = "";
    document.getElementById("footer").style.backgroundColor = "#ffffff";
    document.getElementById("buttonsnavbar").style.marginTop = "2%";
    document.getElementById("footerline").style.backgroundColor = "#6969b3";
  }

  if (z.style.backgroundSize === "75%") {
    z.style.backgroundSize = "75%";
  } else {
    z.style.backgroundSize = "75%";
  }
}

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
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
  console.log(slideIndex);
  var slidevar = setTimeout(showSlides, 6000); // Endrer bilde hvert 6. sekund

  // Resetter timer når man klikker på knappene til slides
  let slide1 = document.getElementById("slide1");
  let slide2 = document.getElementById("slide2");
  let slide3 = document.getElementById("slide3");

  slide1.onclick = function () {
    clearTimeout(slidevar);
    showSlides((slideIndex = 0));
  };
  slide2.onclick = function () {
    clearTimeout(slidevar);
    showSlides((slideIndex = 1));
  };
  slide3.onclick = function () {
    clearTimeout(slidevar);
    showSlides((slideIndex = 2));
  };
}
