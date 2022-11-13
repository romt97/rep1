// $(".phonenumber").mask("+7(999)999-99-99");

// function buttonClick(elem) {
// 	elem.value = 'Заявка отправлена!';
// };

$('slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
	arrows: true
});
$('.slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: true,
	centerMode: true,
	focusOnSelect: true
});