
const animar = document.querySelector('.box');

animar.addEventListener('click', () => {
    animar.classList.add('animar');
    setTimeout(() => {

        animar.classList.remove('animar')
    }, 1000);
})





