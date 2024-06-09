
document.addEventListener('DOMContentLoaded', () => {
    const open = document.getElementById('bar');
    const closed = document.getElementById('closed');
    const menu = document.querySelector('.menu');

    open.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closed.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});


jQuery(document).ready(function () {
    $('#hero').ripples({
        dropRadius: 20,
        perturbance: 0.03,
    });
});

let animate = new Typed('#ani', {
    strings: ["Front-End Developer", "React-JS Developer", "UI Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let animate2 = new Typed('#ani2', {
    strings: ["Front-End Developer", "React-JS Developer", "UI Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
// Preloader code
let loader = document.getElementById("preloader");
window.addEventListener("load", ()=>{
    setTimeout(()=>{
        loader.style.display="none"

    },5000)
    
})
// active navbar

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav div a ')
window.onscroll = ()=>{
    section.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset +height){
            navlinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav div a[href*='+ id +']').classList.add('active');
            })

        }
    })
}

let sub_btn = document.getElementById("s-btn");
let inputfilled = document.querySelectorAll(".remove");
sub_btn.addEventListener("click", ()=> inputfilled.values=" ")