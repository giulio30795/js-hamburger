// Definizioni Variabili

const HamburgerMenu = document.querySelector('.hamburger-menu');
const BarreChiusura = document.querySelector('.close');
const BarreApertura = document.querySelector('.header-right > a');

// Apertura e chiusura menù

BarreApertura.addEventListener('click', function (){
    HamburgerMenu.classList.add('active');
})

BarreChiusura.addEventListener('click', function (){
    HamburgerMenu.classList.remove('active');
})