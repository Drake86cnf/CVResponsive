// Seleccionar Items en DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuIzquierda = document.querySelector(".menu-izquierda");
const menuOpciones = document.querySelector(".menu-opciones");

const navItems = document.querySelectorAll(".nav-item");

// Seteo el estado inicial del menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuIzquierda.classList.add("show");
    menuOpciones.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuIzquierda.classList.remove("show");
    menuOpciones.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
