$(document).ready(function () {
    // 헤더 호버시 색상 추가
    $('header').mouseover(function () {
        $('header').addClass('active')
    })
    $('header').mouseleave(function () {
        $('header').removeClass('active')
    })

    //헤더 네비 호버시 메뉴 생성
    $('header .top-group .gnb-group li a').mouseover(function () {
        $('header .drop-down-area').show()
    })
    $('header').mouseleave(function () {
        $('header .drop-down-area').hide()
    })

    //헤더 서치 클릭시 검색창 생성
    $('header nav .search-btn').click(function () {
        $('header .search-area').show()
        $('header .search-area').addClass('active')

        if ($('header .search-area').hasClass('active')) {
            console.log(1);
            $('header').addClass('active');
            return
        }
    })

    //헤더 위시리스트 클릭시 선택창 생성
    $('header nav .like-btn').click(function () {
        $('.wish-area').show()
        $('.wish-area-bg').show()
    })

    $('.wish-area button').click(function () {
        $('.wish-area').hide()
        $('.wish-area-bg').hide()
    })


    $('.wish-area-bg').click(function () {
        $('.wish-area').hide()
        $('.wish-area-bg').hide()
    })

});

//AOS
AOS.init();



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

