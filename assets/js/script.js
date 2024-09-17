'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * search bar toggle
 */

const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);

const typed = new Typed('.multiple-text', {
  strings: ['<strong>Bem-vindo ao Blog!</strong>', 'Descubra espécies exóticas de plantas.'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
  showCursor: false,
  contentType: 'html' // Necessário para processar HTML corretamente
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletter-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailField = form.querySelector('input[name="email_address"]');
    const email = emailField.value;

    // Valida o e-mail
    if (email && validateEmail(email)) {
      alert('E-mail cadastrado com sucesso!');
      form.reset(); 
    } else {
      alert('Por favor, digite um e-mail válido.');
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});


