var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

swiper.on('slideChange', function () {
    console.log('Slide mudou. Slide atual:', swiper.realIndex);
});

swiper.navigation.nextEl.addEventListener('click', function () {
    console.log('Botão de próxima seta clicado.');
});

swiper.navigation.prevEl.addEventListener('click', function () {
    console.log('Botão de seta anterior clicado.');
});






