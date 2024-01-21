let moreCards = document.querySelectorAll('.more-card');

moreCards?.forEach((item) => {
    window.innerWidth >= 768 ? item.addEventListener('click', () => {
        document.querySelectorAll('.more-card.active').forEach((active) => {
            item !== active ? active.classList.remove('active') : null;
        });

        item.classList.toggle('active');
    }) : null
})