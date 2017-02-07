
$(document).ready(function(){
	$('#our-work-slider').owlCarousel({
		items:1,
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1		
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		autoHeight:true, //высота автоматически, каждого слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана

			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	var burger = document.querySelector('.burger-container'),
	        header = document.querySelector('.header');
	    
	    burger.onclick = function() {
	        header.classList.toggle('menu-opened');
	    
	};

	$('#main-form').validate ();

	$('#modal-form').validate ();

	$("#phone").inputmask("+7 ( 999 ) 999 - 99 - 99");

	$("#phone1").inputmask("+7 ( 999 ) 999 - 99 - 99");

	
});