//헤더 드롭 슬라이드
var swiper = new Swiper("header .drop-area .product-wrap .swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

//메인 배너 슬라이드
var swiper = new Swiper(".main-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

//sec01 슬라이드
var swiper = new Swiper(".contents", {
    slidesPerView: 3,
    spaceBetween: 20,
    // 이미지 사이 간격 조절
    pagination: {
        el: ".sec01 .swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
            spaceBetween: 32,
        },

    },
});


//sec05 슬라이드
var swiper = new Swiper(".sec05 .swiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    pagination: {
        el: ".sec05 .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//sec06 슬라이드
var swiper = new Swiper(".sec06 .swiper", {
    slidesPerView: 2.8,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
            spaceBetween: 40,
        },
    },
});

