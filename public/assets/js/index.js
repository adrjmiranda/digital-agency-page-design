"use strict";
const navbar = document.querySelector('#navbar');
const navbarMenu = document.querySelector('.navbar-menu');
const staticClassName = 'static';
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove(staticClassName);
        navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.remove(staticClassName);
    }
    else {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add(staticClassName);
        navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.add(staticClassName);
    }
});
