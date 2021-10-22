// Definizioni Variabili

const HamburgerMenu = document.querySelector('.hamburger-menu');
const barreChiusura = document.querySelector('.close');
const barreApertura = document.querySelector('.header-right > a');

// Apertura e chiusura menù

barreApertura.addEventListener('click', function (){
    HamburgerMenu.classList.add('active');
})

barreChiusura.addEventListener('click', function (){
    HamburgerMenu.classList.remove('active');
})