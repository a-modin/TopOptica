$(document).ready(function() {


	$('.left-nav-2').click(function() {
		$('.left-nav-2').removeClass('left-nav-closed');
		$('.left-nav-2').not(this).addClass('left-nav-closed');
		$('.left-nav-closed ul').hide(500);
		$('.left-nav-2 span').css('color', '#a6a9ab');
		$(this).find('span').css('color', 'white');
		$(this).find('ul').toggle(500);
		
	});

});


