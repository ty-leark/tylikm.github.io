const menu  = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show Active Menu When Scroll
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const educationMenu = document.querySelector('#education-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    // Adds Highlight to menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        educationMenu.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 960 && scrollPos < 1400) {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        educationMenu.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 960 && scrollPos < 2345) {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        educationMenu.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 960 && scrollPos < 3400) {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        educationMenu.classList.add('highlight');
        return;
    }   
        if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
        return;
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close Mobile Menu 
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
