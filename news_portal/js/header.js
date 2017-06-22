jQuery("document").ready(function($){
	
	var nav = $('.top-menu-container');
	var info = $('.upper-menu');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			nav.addClass("f-nav");	
			$('.upper-menu-info').css({'display':'none','justify-content':'flex-end'});		
		} else {
			nav.removeClass("f-nav");
			$('.upper-menu-info, .upper-menu-btns').css('display','flex');
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			info.css("background-color", "#000");
		}else {
			info.css("background-color", "transparent");
		}

	}); 
});