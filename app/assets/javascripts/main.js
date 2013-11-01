/*Jquery function is all page*/

/*---------------BACK TO TOP BUTTON SCRIPT---------------*/
$(function() {
	$(window).scroll(function() {
		if(
			$(this).scrollTop() > 200) {
			$('#toTop').fadeIn(); } 
		else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},300);
	});
});
/*end beck to top*/
/*--------------HEADER SCROLL FIX---------------*/
$(function() {
	$(window).scroll(function() {
		if(
			$(this).scrollTop() > 72) {
			$('.header-abslt-scroll').css({'display' : 'block'});
			 } 
		else {
			$('.header-abslt-scroll').css({'display' : 'none'});
		}
	});
});
/*end header scroll*/