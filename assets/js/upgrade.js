
$(window).load(function () {
	
	var btn = $('.btn-uppremium');
	var modal = $('#upgrade');
	var close = $('.cmtu');
	var join = $('.joinbtn');
	var btnM = $('.um');
	var btnY = $('.uy');


	btn.click(function () {
		modal.css('display','block');
	});

	close.click(function () {
		modal.css('display','none');
	});

	join.click(function () {
		modal.css('display','none');
	});

	btnM.click(function () {
		btnM.removeClass('umont');
		btnY.addClass('umont');
		$('.tm').css('display','block');
		$('.ty').css('display','none');
	});

	btnY.click(function () {
		btnY.removeClass('umont');
		btnM.addClass('umont');
		$('.ty').css('display','block');
		$('.tm').css('display','none');
	});


});