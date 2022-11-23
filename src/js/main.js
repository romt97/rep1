
function buttonClick(elem) {
	elem.value = 'Заявка отправлена!';
};

$('.gallery').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 4,
	arrows: true,
	variableWidth: true,
	prevArrow: "<img src='.//img/logo/arrows-prev.png' class='prev' alt='1'>",
	nextArrow: "<img src='.//img/logo/arrows-next.png' class='next' alt='2'>",
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

