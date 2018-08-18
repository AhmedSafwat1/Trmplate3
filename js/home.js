/*global $, alert, consol */
$(function () {
	"use strict";
	//adjust header height
	$('.myheader').height($(window).height());
	$(window).resize(function () {
		$('.myheader').height($(window).height());
		$('.bxslider').each(function () {
		var pad = ($(window).height() - $(this).find('li').height()) / 2;
		$(this).css({'padding-top' : pad,
					 'padding-bottom' : pad
					});
	       });
	});
	//add class activ 
	$('.mynav header .thenav ul li').click(function () {
		$(this).addClass('activ').siblings('li').removeClass('activ');
	});
	//triger bxslier
	$('.bxslider').bxSlider({
		pager : false
	});
	//adiust bxslider ul il item center
	$('.bxslider').each(function () {
		var pad = ($(window).height() - $(this).find('li').height()) / 2;
		$(this).css({'padding-top' : pad,
					 'padding-bottom' : pad
					});
	});
	// scroll smoth
	$('.mynav header .thenav ul li:not(.activ)').click(function () {
		
		$('html,body').animate({
			scrollTop:$('#'+$(this).data('value')).offset().top
		},1000)
		console.log();
	});
	
	//slider testmonail
	(function sliderauto(){
		$('.testmonail .ovelay .slider .activ').each(function () {
			if (!$(this).is(':last-child')) {
				
				$(this).delay(3000).fadeOut(1000,function () {
					$(this).removeClass('activ').next('div').fadeIn(1000).addClass('activ');
					sliderauto()
				})
			} else {
			
				$(this).delay(3000).fadeOut(1000,function () {
					$(this).removeClass('activ');
					$('.testmonail .ovelay .slider div:first-child').fadeIn(1000).addClass('activ')
					sliderauto()
				})
			}
		})
	}());
	   //bloger
	$('html').niceScroll({
		cursorcolor:'#22ecc6'
	});
	var mixer = mixitup('#container');
	$('.filter').click(function () {
		$(this).addClass('activ').siblings('.activ').removeClass('activ');
	})
});