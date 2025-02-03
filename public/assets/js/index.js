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
const showMenu = document.querySelector('#show-menu');
const closeMenu = document.querySelector('#close-menu');
const showShowButtonAndHideHideButton = () => {
    closeMenu === null || closeMenu === void 0 ? void 0 : closeMenu.classList.remove('show');
    closeMenu === null || closeMenu === void 0 ? void 0 : closeMenu.classList.add('hidden');
    showMenu === null || showMenu === void 0 ? void 0 : showMenu.classList.remove('hidden');
    showMenu === null || showMenu === void 0 ? void 0 : showMenu.classList.add('show');
};
const hideShowButtonAndShowHideButton = () => {
    closeMenu === null || closeMenu === void 0 ? void 0 : closeMenu.classList.remove('hidden');
    closeMenu === null || closeMenu === void 0 ? void 0 : closeMenu.classList.add('show');
    showMenu === null || showMenu === void 0 ? void 0 : showMenu.classList.remove('show');
    showMenu === null || showMenu === void 0 ? void 0 : showMenu.classList.add('hidden');
};
showMenu === null || showMenu === void 0 ? void 0 : showMenu.addEventListener('click', () => {
    navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.toggle('show');
    hideShowButtonAndShowHideButton();
});
closeMenu === null || closeMenu === void 0 ? void 0 : closeMenu.addEventListener('click', () => {
    navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.toggle('show');
    showShowButtonAndHideHideButton();
});
