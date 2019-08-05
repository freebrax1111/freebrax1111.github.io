$(document).ready(function(){

	$('.accordion__body').hide();
	$('.accordion__head').click(function(){
		$('.accordion__body').slideToggle(1000);
		$('.accordion__body2').slideUp(500);
		$('.accordion__body3').slideUp(500);
		$('.accordion__body4').slideUp(500);
		$('.accordion__body5').slideUp(500);
	});

	$('.accordion__body2').hide();
	$('.accordion__head2').click(function(){
		$('.accordion__body2').slideToggle(1000);
		$('.accordion__body').slideUp(500);
		$('.accordion__body3').slideUp(500);
		$('.accordion__body4').slideUp(500);
		$('.accordion__body5').slideUp(500);
	});
	$('.accordion__body3').hide();
	$('.accordion__head3').click(function(){
		$('.accordion__body3').slideToggle(1000);
		$('.accordion__body').slideUp(500);
		$('.accordion__body2').slideUp(500);
		$('.accordion__body4').slideUp(500);
		$('.accordion__body5').slideUp(500);
	});
	$('.accordion__body4').hide();
	$('.accordion__head4').click(function(){
		$('.accordion__body4').slideToggle(1000);
		$('.accordion__body').slideUp(500);
		$('.accordion__body2').slideUp(500);
		$('.accordion__body3').slideUp(500);
		$('.accordion__body5').slideUp(500);
	});
	$('.accordion__body5').hide();
	$('.accordion__head5').click(function(){
		$('.accordion__body5').slideToggle(1000);
		$('.accordion__body2').slideUp(500);
		$('.accordion__body').slideUp(500);
		$('.accordion__body3').slideUp(500);
		$('.accordion__body4').slideUp(500);
	});


	$('.slider').slick({
	nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows:false,
      }
    }
   
  ]
	});

	$('.ot__slider').slick({
		centerMode: true,
		autoplay: true,
  		autoplaySpeed: 2000,
  		arrows: false,

	});
});