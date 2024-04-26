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

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
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
  for (let i = 0, x = revealElements.length; i < x; i++) {
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
img.onclick = function () {
  this.classList.toggle("active");
  icons.classList.toggle("active");
}

/**
 * Play video
 */
document.addEventListener("DOMContentLoaded", function() {
  const videoPlayer = document.getElementById("videoPlayer");
  const playBtn = document.querySelector(".play-btn");

  playBtn.addEventListener("click", function() {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playBtn.classList.add("hide");
    } else {
      videoPlayer.pause();
    }
  });

  // Ocultar el botón de reproducción cuando el video comienza a reproducirse
  videoPlayer.addEventListener("play", function() {
    playBtn.classList.add("hide");
  });

  // Mostrar el botón de reproducción cuando el video se pausa
  videoPlayer.addEventListener("pause", function() {
    playBtn.classList.remove("hide");
  });
});



/**
 *  #SEND FORM
 * 
 */

(function () {
  emailjs.init("52FI6TDsxQ1JZED1Q"); // Reemplaza "YOUR_USER_ID" con tu ID de usuario de EmailJS
})();

document.getElementById('problemaForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Captura los datos del formulario
  var nombre = document.getElementById('name').value;
  var telefono = document.getElementById('telefono').value;
  var email = document.getElementById('email').value;
  var problema = document.getElementById('problema').value;
  var descripcion = document.getElementById('descripcion').value;
  var tipoServicio = document.getElementById('tipoServicio').value;

  // Envía el formulario por correo electrónico usando EmailJS
  var templateParams = {
    from_name: nombre,
    to_name: 'Gafer',
    message: 'Teléfono: ' + telefono + '\nCorreo electrónico: ' + email + '\nNombre del problema: ' + problema + '\nDescripción del problema: ' + descripcion + '\nTipo de servicio: ' + tipoServicio
  };

  emailjs.send('service_muh5sae', 'template_khg4rlg', templateParams)
    .then(function (response) {
      console.log('Correo enviado con éxito', response);
      alert('¡Tu formulario ha sido enviado con éxito!');
    }, function (error) {
      console.log('Error al enviar el correo', error);
      alert('¡Hubo un problema al enviar tu formulario! Por favor, inténtalo de nuevo más tarde.');
    });
});



