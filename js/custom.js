$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 720) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })


    $('.main_slide').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 600,
        dots: true,
        pauseOnHover: true,
    })

    $('.content_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    // arrows: false,
                }
            },
        ]
    })

    $('.product_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    // arrows: false,
                }
            },
        ]
    })

    $('.main_banner_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    // arrows: false,
                }
            },
        ]
    })

    $('.banner_slide').slick({
    })

    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0, }, 300)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 900) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })

    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })

});