const hamburgerIcon = document.querySelector("header .hamburger");
const navMenu = document.querySelector('header nav ul');


hamburgerIcon.addEventListener('click', () => {
    
    navMenu.classList.toggle('show');
});