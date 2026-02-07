const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

window.addEventListener('scroll', () => {
const navbar = document.getElementById('navbar');
            if(window.scrollY > 50){
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });