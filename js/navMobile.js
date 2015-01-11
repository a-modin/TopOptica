//////////////////////////////////////////////////
// Мобильная навигация
////////////////////////////////////////

var navMobileStatus = false;

$('#navMobileBut').click(function() {
	if (navMobileStatus === false) {
		navMobileStatus = true;
		$('#navMobileMenu').stop().animate({top: '50px'}, 500)
	}
	else{
		navMobileStatus = false;
		$('#navMobileMenu').stop().animate({top: '-250px'}, 500)
	}
});
