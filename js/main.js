$(document).ready(function(){
    var swiper = new Swiper(".swiper_2", {
        slidesPerView: 1.55,
        spaceBetween: 70,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1.55,
                spaceBetween: 70
            }
        }
    });

    var swiper = new Swiper(".swiper_4", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
});