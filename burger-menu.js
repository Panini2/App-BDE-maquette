const hamMenu = document.querySelector('.hamburger');
const offscreenMenu = document.querySelector('.offscreen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
})

