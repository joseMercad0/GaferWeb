'use strict';


/**
 *  #PRELOADING
 */

const loadElement = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  loadElement.classList.add("loaded");
});

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavbar);

/**
 *  #HEADER
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-top-btn]")

window.addEventListener("scroll", function() {
    if (window.scrollY >=  100) {
        header.classList.add("active");
        backTopBtn.classList.add("active")
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active")
    }
});





/**
 *  #SCROLL REVEALED
 */

const revealElements = document.querySelectorAll("[data-reveal]")

const scrollReveal = function () {
    for (let i = 0, x = revealElements.length; i < x; i++){
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
         revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);


/**
 * expand-circle
 */

const img = document.querySelector("img");
    const icons = document.querySelector(".icons");
    img.onclick = function(){
      this.classList.toggle("active");
      icons.classList.toggle("active");
    }

 /**
  * Play video
  */
 document.querySelector('.play-btn').addEventListener('click', function() {
    var videoElement = document.querySelector('.video-element');
    var imgElement = document.querySelector('.img-cover');
    var playBtn = document.querySelector('.play-btn');

    // Ocultar imagen, botón y mostrar video
    imgElement.style.display = 'none';
    playBtn.style.display = 'none';
    videoElement.style.display = 'block';
    
    // Reproducir video
    videoElement.play();
});
