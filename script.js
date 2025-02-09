const hamburgerIcon = document.querySelector("header .hamburger");
const navMenu = document.querySelector('header nav ul');
const ul = document.querySelectorAll("header nav ul li a");
ul.forEach(a => {
    a.addEventListener("click", ()=>{
        navMenu.classList.toggle('show');
    }) 
});
hamburgerIcon.addEventListener('click', () => {
    
    navMenu.classList.toggle('show');
});

function showTextEffect(select,text, speed) {
    let index = 0;
    let element = document.querySelector(select)
    element.innerHTML = ""; // تفريغ النص

    function addCharacter() {
        if (index < text.length) {
            element.innerHTML += text[index];
            index++;
            setTimeout(addCharacter, speed);
        }
    }
    
    addCharacter();
}

showTextEffect("main .landingpage .content h2","Mohamed El Meayouf | UX Designer & Front-End Developer.",100)
