const navbar = document.querySelector(".navbar__links");
const nav_btns = document.querySelector(".navbar__buttons");
const toggle_btn = document.querySelector(".toggle-button");





function toggle_nav() {
    navbar.classList.toggle('navbar__active');
    nav_btns.classList.toggle('navbar__active');
}

toggle_btn.addEventListener('click',toggle_nav);