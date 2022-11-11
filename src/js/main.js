$('.rev_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    variableWidth: true,
    prevArrow: "<img src='.//img/tehnics-img/arrow-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='.//img/tehnics-img/arrow-right.svg' class='next' alt='2'>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }
    ]
});