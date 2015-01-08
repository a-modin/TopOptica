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



$(document).ready(function() {

	var Slider = function(elem){
		this.element = elem;
		this.slides = [];
		this.pagination = [];
		this.active = 0;
		this.auto = true;
		this.interval = 3000;
		this.intervalAfterStop = 6000;
		this.stopped = false;

		this.__defineGetter__('slidesAmount', function(){
			return this.slides.length;
		});


		// Метод активации какого-либо слайда и деактивации всех остальных
		this.slideActive = function(num){
			this.activeSlide = this.slides[num];
			this.activePag = this.pagination[num];

			for(var i = 0; i < this.slides.length; i++){
				$(this.slides[i]).stop().animate({opacity: 0}, 1000);
				$(this.pagination[i]).attr('class', '');
			}

			$(this.activeSlide).stop().animate({opacity: 1}, 1000);
			$(this.activePag).attr('class', 'active');
		}

		// Присваиваем всем кнопкам ID и добавляем их в массив Slider.pagination
		this.paginationPush = function(){
			var arr = [];
			var i = -1;

			$(this.element + " .pagination li").each(function(indx){
				i++;
				$(this).attr('id', 'pag'+i);
				arr.push('#' + this.id);
			});
			this.pagination = arr;
			this.activePag = this.pagination[this.active];
		}

		// Присваиваем всем слайдам ID и добавляем их в массив Slider.slides
		this.slidesPush = function(){
			var arr = [];
			var i = -1;
			$(this.element + " #sliderWrapper .slide").each(function(indx){
				i++;
				$(this).attr('id', 'slide'+i);
				arr.push('#'+this.id);
			});
			this.slides = arr;
			this.activeSlide = this.slides[this.active];
		}

		// Связываем слайды с кнопками 
		// (при клике на кнопку активация соответствующего слайда)
		this.binding = function(){
			var s = this;
			var f = function(obj, num){
				$(obj.pagination[num]).click(function(){
					s1.stop();
					s.active = num
					$(this).attr('class', 'active');
					obj.slideActive(num);
				});
			}

			for(var i = 0; i < this.slides.length; i++ ){
				f(this, i)
			}
		}

		this.next = function(){
			if (this.active < this.slidesAmount - 1) {
				this.active += 1;
				this.slideActive(this.active);
			}

			else{
				this.active = 0;
				this.slideActive(this.active);
			}

		}

		this.prev = function(){
			if (this.active > 0) {
				this.active -= 1;
				this.slideActive(this.active);
			}

			else{
				this.active = this.slidesAmount - 1;
				this.slideActive(this.active);
			}
		}

		this.autoPlay = function(){
			if (this.auto === true) {
				this.stopped = false;
				this.timer = setInterval(this.next.bind(this), this.interval || 2000)
			};
		}

		this.stop = function(){
			console.log(this.stopped);
			clearInterval(this.timer);

			if (this.auto === true && this.stopped === false) {
				this.stopped = true;
				setTimeout(this.autoPlay.bind(this), this.intervalAfterStop)
			};
		}

		// Иницилизация
		this.init = function(){
			this.slidesPush(); 
			this.paginationPush();
			this.binding();
			this.slideActive(this.active);
			this.autoPlay();
		}
	}

	var s1 = new Slider('#slider');
	s1.init();


	$('#but1').click(function() {
		s1.stop();
		s1.prev();
		
	});

	$('#but2').click(function() {
		s1.stop();
		s1.next();
		
	});
});