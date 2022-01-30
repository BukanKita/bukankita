//PARALLAX
$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

    $('.greet').css({
		'transform' : 'translate(0px,'+ wScroll/12+'%)'
	});

	$('.text-bcg').css({
		'transform' : 'translate('+ -wScroll/28+'%, 0px)'
	});
	$('.text-bcg1').css({
		'transform' : 'translate('+ -wScroll/48+'%, 0px)'
	});

    $('.text-bcg2').css({
		'transform' : 'translate('+ wScroll/28+'%, 0px)'
	});
    $('.text-bcg3').css({
		'transform' : 'translate('+ wScroll/48+'%, 0px)'
	});
});
