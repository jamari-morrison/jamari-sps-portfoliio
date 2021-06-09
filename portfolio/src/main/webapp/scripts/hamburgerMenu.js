//Handles the animation for the hamburger menu and nav bar that are displayed when the site is in vertical (mobile) mode
//Main job is to tell wether the hamburger menu and nav bar should be in their opened or closed state

const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar');
const contactMe = document.querySelector('.contactMe');
const navContactMe = document.querySelector('.nav-contact-me');
const scrollTarget = document.querySelector('.scroll-target')
let menuOpen = false;

menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        navBar.classList.add('seen');
        menuOpen = true;
    } 
    else {
        menuBtn.classList.remove('open');
        navBar.classList.remove('seen');
        menuOpen =  false;
    }
});

contactMe.addEventListener('click', () =>{
scrollTarget.scrollIntoView(false);

});

navContactMe.addEventListener('click', () =>{
    scrollTarget.scrollIntoView(false);
    menuBtn.classList.remove('open');
        navBar.classList.remove('seen');
});