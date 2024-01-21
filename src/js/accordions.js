let accordions = document.querySelectorAll('.faq-accordion');

accordions.forEach(accordion => {
    accordion.querySelector('.faq-accordion__title').addEventListener('click', () => {
        document.querySelectorAll('.faq-accordion.active').forEach((active) => {
            accordion !== active ? active.classList.remove('active') : null;
        });

        accordion.classList.toggle('active');
    })
})