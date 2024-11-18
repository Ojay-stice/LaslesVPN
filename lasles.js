const hamburgerElem = document.getElementById('menu');
const mobileMenuElem = document.getElementById('mob-menu')
let navLinks = mobileMenuElem.querySelectorAll('li')

hamburgerElem.addEventListener('click', function(){
    mobileMenuElem.classList.toggle('active');
    hamburgerElem.classList.toggle('fa-times');
});

navLinks.forEach((navLinks) =>{
    navLinks.addEventListener('clicks', ()=>{
        mobileMenuElem.classList.remove('active');
        hamburgerElem.classList.toggle('fa-times');
    });
} )