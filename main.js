const HamburgerMenu = document.querySelector('.hamburger-menu');
const barreChiusura = document.querySelector('.close');
const barreApertura = document.querySelector('.header-right > a');
console.log(barreApertura);
console.log(barreChiusura);

barreApertura.addEventListener('click', function (){
    HamburgerMenu.classList.add('active');
})

barreChiusura.addEventListener('click', function (){
    HamburgerMenu.classList.remove('active');
})