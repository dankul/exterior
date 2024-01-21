import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

function get(param) {
    return document.querySelector(param);
}

function getAll(param) {
    return document.querySelectorAll(param)
}

getAll('.build-slider').forEach(slider => new Swiper(slider, {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 112,
    speed: 600,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: slider.parentElement.querySelector('.swiper-button-next'),
        prevEl: slider.parentElement.querySelector('.swiper-button-prev'),
    },
    pagination: {
        el: slider.parentElement.querySelector('.swiper-pagination'),
        type: 'bullets',
    },
}))

getAll('.column-slider').forEach(slider => new Swiper(slider, {
    effect: 'cards',
    slidesPerView: 1,

    speed: 600,
    navigation: {
        nextEl: slider.parentElement.querySelector('.swiper-button-next'),
        prevEl: slider.parentElement.querySelector('.swiper-button-prev'),
    },
    cardsEffect: {
        slideShadows: false,
    },
}))

getAll('.projects-slider').forEach(slider => new Swiper(slider, {
    effect: 'coverflow',
    loop: true,
    slidesPerView: 1,
    speed: 600,
    navigation: {
        nextEl: slider.parentElement.querySelector('.swiper-button-next'),
        prevEl: slider.parentElement.querySelector('.swiper-button-prev'),
    },
    pagination: {
        el: slider.parentElement.querySelector('.swiper-pagination'),
        type: 'bullets',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
    }
}))

new Swiper('.quotation-slider', {
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 600,
})

new Swiper('.slider-brands', {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    speed: 600,
    navigation: {
        nextEl: document.querySelector('.slider-brands').parentElement.querySelector('.swiper-button-next'),
        prevEl: document.querySelector('.slider-brands').parentElement.querySelector('.swiper-button-prev'),
    },
    pagination: {
        el: document.querySelector('.slider-brands').parentElement.querySelector('.swiper-pagination'),
        type: 'bullets',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
    }
})