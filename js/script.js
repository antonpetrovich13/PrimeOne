

// АНИМАЦИЯ ПРИ СКРОЛЛЕ
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

// МЕНЮ-БУРГЕР
$(document).ready(function() {
	$('.top__burger').click(function(event)
	 {
		$('.top__burger,.bottom__menu').
			toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
    $('.top__burger, .bottom__links').click(function(event) {
        $('.top__burger,, .bottom__menu').removeClass('active');
        $('body').removeClass('lock')
    });
});



// ПЛАВНАЯ НАВИГАЦИЯ
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},500);
                return false;
        });
});


$(function() {
    $('.footer__logo').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
   });
});

// СЛАЙДЕР
$(window).on('load resize', function() {
	if ($(window).width() < 950) {
	$('#slider:not(.slick-initialized)').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		cssEase: 'ease-out',
		touchThreshold:10,
		adaptiveHeight: true,
		slidesToShow: 2,
		responsive:[
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
				}
			}
		]
		});
	} else {
		$("#slider.slick-initialized").slick("unslick");
	}
});
