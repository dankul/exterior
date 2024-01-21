function get(param) {
    return document.querySelector(param);
}

function getAll(param) {
    return document.querySelectorAll(param)
}

window.addEventListener('scroll', () => {
    window.scrollY !== 0 ? get('.header').classList.add('scroll') : get('.header').classList.remove('scroll');
})