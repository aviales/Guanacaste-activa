const mobileMenu = document.querySelectorAll('.top-nav-menu ul li a');
const mobileNav = document.querySelector('.top-nav-menu');
const closeMenu = document.querySelector('.menu-toggle');
// const body = document.querySelector('.section-container');

mobileMenu.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        closeMenu.classList.remove('change');
    });
})

function myFunction(closeNav){
    closeNav.classList.toggle("change");
}

// body.addEventListener('click', () =>{
//     mobileNav.classList.remove('active');
//     closeMenu.classList.remove('change');
// })

