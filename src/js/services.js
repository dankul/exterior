let servicesContent = document.querySelectorAll('.service-content');
let servicesTabs = document.querySelector('.services-tabs');

servicesContent.forEach((item, id) => {
    let tab = document.createElement('span');
    let img = document.createElement('img');
    let title = document.createElement('h3');

    tab.classList.add('services-tabs__item');
    img.classList.add('services-tabs__img');
    title.classList.add('services-tabs__title');

    tab.addEventListener('click', () => {
        servicesContent.forEach((item) => {
            item.classList.remove('active');
        })
        item.classList.add('active');

        servicesTabs.querySelectorAll('.services-tabs__item').forEach((item) => {
            item.classList.remove('active');
        })
        tab.classList.add('active');

        switch (id) {
            case 0:
                servicesTabs.querySelector('.bg').style.left = '0';
                break;
            case 1:
                servicesTabs.querySelector('.bg').style.left = '33.33%';
                break;
            case 2:
                servicesTabs.querySelector('.bg').style.left = '66.66%';
                break;
        }
    })

    if (id === 0) {
        tab.classList.add('active');
        item.classList.add('active');
        servicesTabs.querySelector('.bg').style.left = '0';
    }

    img.src = item.dataset.serviceImg;
    title.textContent = item.dataset.serviceName;

    tab.appendChild(img);
    tab.appendChild(title);

    servicesTabs.appendChild(tab);
})