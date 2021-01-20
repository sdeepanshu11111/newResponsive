const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#nav')
    const navLinks = document.querySelectorAll('.li');

    console.log(nav)

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');



        // navLinks.forEach((link, index) => {
        //     console.log(link, index)
        //     if (link.style.animation) {
        //         link.style.animation = '';

        //     } else {
        //         link.style.animation = `navLinkFade 0.5s ease forwards${index / 7 + 0.4}s`;
        //     }

        // })

    })



}

navSlide()