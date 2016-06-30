$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	$('div.to-animate').waypoint(function() {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$('div.to-animate').addClass('animated fadeInUp').one(animationEnd, function() {
            $(this).removeClass('animated fadeInUp');
        });
	}, {
		offset: '100%'
	});

	$('div.to-animate-info').waypoint(function() {
		$('div.to-animate-info').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});

	
		
	
	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					"padding": "15px 0"
				});
				$('header .member-actions').css({
					"top": "26px",
				});
				$('header .navicon').css({
					"top": "34px",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "30px 0"
				});
				$('header .member-actions').css({
					"top": "41px",
				});
				$('header .navicon').css({
					"top": "48px",
				});
			}
		});
	});
	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

	// Typing Intro Init
	$(function(){
		$(".typed").typewriter({
			speed: 150
		});
	});
		
	// slider
	$(function(){
		$(".slider-content img:first").addClass("top");
			var change = function(){
			var curr = $(".slider-content img.top");
			var next = curr.next();

			if (!next.length) {
				next = $(".slider-content img:first");
				next.addClass("top");
				curr.removeClass("top");
			}else{
				next.css({"opacity":"0"}).addClass("top").animate({opacity: 1.0}, 1000, function(){
					curr.removeClass("top");
				})
				
			}
		}
		setInterval(change, 3000);
	});
	// popup
	$(function(){
		$("#open").click(function(){
			
			$(".modal-box").fadeIn();
			$(".modal-background").fadeIn();
			$('body').bind('touchmove', function(e){e.preventDefault()});
			return false;
		});
		$(".modal-background").click(function(){
			$(".modal-background").fadeOut();
			$(".modal-box").fadeOut();
			$('body').unbind('touchmove');
			return false;
		});
		$("#close").click(function(){
			$(".modal-background").fadeOut();
			$(".modal-box").fadeOut();
			return false;
		});
		$("#close2").click(function(){
			$(".modal-background").fadeOut();
			$(".modal-box").fadeOut();
			return false;
		});
	});

	// panitia
	$(window).ready(function(){
		if ($(window).width < 400) { 
			$(".panitia.col-sm-3").hide()
		}else{
			$(".panitia.col-sm-3").show();
		}

		$(window).resize(function(){
			if ($(window).width < 400) { 
			$(".panitia.col-sm-3").hide()
		}else{
			$(".panitia.col-sm-3").show();
		}
		})
	});

	// parallax hero-content
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		$(".hero.hero-content h2, .hero.hero-content h1").css({
			'transform': 'translate(0px, '+ scroll/10 +'%)'
		});
	})
	

});