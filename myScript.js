const menuBars = document.getElementById('menuBars');
const overlay = document.getElementById('overlay');
const navMainPage = document.getElementById('navMainPage');
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navPrices = document.getElementById('navPrices');
const navContact = document.getElementById('navContact');
const navItems = [navMainPage, navAbout, navServices, navPrices, navContact]

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlayActive');
    if (overlay.classList.contains('overlayActive')) {
        overlay.classList.replace('overlaySlideLeft', 'overlaySlideRight');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add(`slideIn${i}`);
            navItems[i].classList.remove(`slideOut${i}`);
        };
    } else {
        overlay.classList.replace('overlaySlideRight', 'overlaySlideLeft');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add(`slideOut${i}`);
            navItems[i].classList.remove(`slideIn${i}`);
        };
    }
}
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => {
    nav.addEventListener('click', toggleNav);
})
