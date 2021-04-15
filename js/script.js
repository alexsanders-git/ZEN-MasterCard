// Fixed header
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// Burger menu
const burger = document.querySelector('.header__burger');
const inner = document.querySelector('.header__inner');
const menu = document.querySelector('.menu');

const openMenu = () => {
    inner.classList.toggle('active');
    burger.classList.toggle('active');
}

const closeMenu = () => {
    inner.classList.remove('active');
    burger.classList.remove('active');
}

burger.addEventListener('click', openMenu);

const menuItem = document.querySelectorAll('.menu');

for(let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', closeMenu);
}