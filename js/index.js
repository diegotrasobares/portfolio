const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu-header");

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
});