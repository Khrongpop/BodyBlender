// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(window).load(function () {

	$('.searchbtn').click(function () {

		$(this).addClass('btnload');
		$('.stxt').addClass('hide');
		$('.loadSearch').removeClass('hide');

		setTimeout(function () {

			$('.searchbtn').removeClass('btnload');


			$('.S1').css('margin-left','-1600px');
			$('.S2').addClass('acts1');

		}, 2000);
		setTimeout(function () {

			$('.stxt').removeClass('hide');

			$('.loadSearch').addClass('hide');
			// $('.S1').removeClass('fadeOutLeft');

		},3000);

		$('.backtos1').click(function () {
			$('.S1').css('margin-left','0');
			$('.S2').removeClass('acts1');
		});

	});


	$('.sbtn1').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add1').addClass('hide');
	});

	$('.sbtn2').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add2').addClass('hide');
	});

	$('.sbtn3').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add3').addClass('hide');
	});

	$('.sbtn4').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add4').addClass('hide');
	});

	$('.sbtn5').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add5').addClass('hide');
	});

	$('.sbtn6').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add6').addClass('hide');
	});

	$('.sbtn7').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add7').addClass('hide');
	});

	$('.sbtn8').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add8').addClass('hide');
	});

	$('.sbtn9').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add9').addClass('hide');
	});

	$('.sbtn10').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add10').addClass('hide');
	});

	$('.sbtn11').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add11').addClass('hide');
	});

	$('.sbtn12').click(function () {
		$(this).css('background-color','green');
		$(this).css('text-align','center');
		$(this).text(' เรียบร้อย');
		$('.add12').addClass('hide');
	});

});
