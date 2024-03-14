
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
    strings: ["Front-End Develper", "React-JS Developer", "UI Develoepr"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let animate2 = new Typed('#ani2', {
    strings: ["Front-End Develper", "React-JS Developer", "UI Develoepr"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})