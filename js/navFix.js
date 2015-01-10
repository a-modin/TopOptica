//////////////////////////////////////////////////////////////////////
// Фиксированная навигация
//////////////////////////////////////////////////////////////////////

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	
	if (scrolled < 92) {
		$('#navFix').css('display', 'none');
	};

	if (scrolled > 92) {
		$('#navFix').css('display', 'block');
	};
}


