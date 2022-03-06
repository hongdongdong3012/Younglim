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
        el: ".swiper-pagination",
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
//sec01 슬라이드
var swiper = new Swiper(".sec06 .swiper", {
    slidesPerView: 2.5,
    spaceBetween: 32,
    breakpoints: {
        768: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
            spaceBetween: 40,
        },
    },
});


