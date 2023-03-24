const menu = document.querySelector('.menu'),
    menunav = document.querySelector('.menu_nav');

menu.addEventListener('click',() => {
    menunav.classList.toggle('spread');
})

window.addEventListener('click', e => {
    if(menunav.classList.contains('spread') && e.target != menunav && e.target != menu) {
        menunav.classList.toggle('spread');
    }
})