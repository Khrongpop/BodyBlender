// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(document).ready(function () {

	$('.tolog').click(function () {
		$('.bblogin').removeClass('hide');
		$('.bbhome').addClass('hide');
		$('.bbsigh').addClass('hide');
	});

	$('.tosigh').click(function () {
		$('.bblogin').addClass('hide');
		$('.bbhome').addClass('hide');
		$('.bbsigh').removeClass('hide');
	});

	$('.backtohome').click(function () {
		$('.bblogin').addClass('hide');
		$('.bbhome').removeClass('hide');
		$('.bbsigh').addClass('hide');

		$('.id').removeClass('err');
        $('.mail').removeClass('err');
        $('.pas').removeClass('err');
        $('.con').removeClass('err');

        $('input[name=usid]').val('');
        $('input[name=usemail]').val('');
        $('input[name=uspass]').val('');
        $('input[name=uscpass]').val('');
        $('#usid').val('');
    	$('#uspass').val('');

	});

	$('#appitem1').click(function () {
		$(this).addClass('appAtive');
		$('#appitem2').removeClass('appAtive');
		$('#appitem3').removeClass('appAtive');
		$('#appitem4').removeClass('appAtive');
		$('#appitem5').removeClass('appAtive');

		$('.sreen1').removeClass('hide');
		$('.sreen2').addClass('hide');
		$('.sreen3').addClass('hide');
		$('.sreen4').addClass('hide');
		$('.sreen5').addClass('hide');

	});

	$('#appitem2').click(function () {
		$(this).addClass('appAtive');
		$('#appitem1').removeClass('appAtive');
		$('#appitem3').removeClass('appAtive');
		$('#appitem4').removeClass('appAtive');
		$('#appitem5').removeClass('appAtive');

		$('.sreen1').addClass('hide');
		$('.sreen2').removeClass('hide');
		$('.sreen3').addClass('hide');
		$('.sreen4').addClass('hide');
		$('.sreen5').addClass('hide');

		$('.bmi').removeClass('hide');
		$('#bmi').addClass('calmenuActive');
		$('.bf').addClass('hide');
		$('#bf').removeClass('calmenuActive');

	});

	$('#appitem3').click(function () {
		$(this).addClass('appAtive');
		$('#appitem2').removeClass('appAtive');
		$('#appitem1').removeClass('appAtive');
		$('#appitem4').removeClass('appAtive');
		$('#appitem5').removeClass('appAtive');

		$('.sreen1').addClass('hide');
		$('.sreen2').addClass('hide');
		$('.sreen3').removeClass('hide');
		$('.sreen4').addClass('hide');
		$('.sreen5').addClass('hide');

		$('.sreen3page1').removeClass('hide');
		$('.workoutpage1').addClass('hide');
		$('.workoutpage2').addClass('hide');
		$('.workoutpage3').addClass('hide');
		$('.programpage1').addClass('hide');
		$('.programpage2').addClass('hide');



	});
	//app3
		$('.setworkout').click(function () {
			$('.sreen3page1').addClass('hide');
			// $('.workoutpage1').addClass('fadeOutLeft');
			$('.workoutpage1').removeClass('hide');

			// console.log('555');
		});
		$('.setprogram').click(function(){
			$('.sreen3page1').addClass('hide');
			$('.programpage1').removeClass('hide');
		});


		$('.backToworkout').click(function () {
			$('.sreen3page1').removeClass('hide');
			$('.programpage1').addClass('hide');
		});

		$('.backTOprogramPage1').click(function(){
			$('.programpage1').removeClass('hide');
			$('.programpage2').addClass('hide');
		});

		$('.programitem').click(function () {
			$('.programpage2').removeClass('hide');
			$('.programpage1').addClass('hide');
		});

		$('.backToworkoutPage1').click(function () {
			$('.workoutpage1').removeClass('hide');
			$('.workoutpage2').addClass('hide');
		});

		$('.backToworkoutPage2').click(function () {
			$('.workoutpage2').removeClass('hide');
			$('.workoutpage3').addClass('hide');
		});


		$('.workoutpart').click(function () {
			$('.workoutpage1').addClass('hide');
			$('.workoutpage2').removeClass('hide');
		});

		$('.itemworkout').click(function () {
			$('.workoutpage3').removeClass('hide');
			$('.workoutpage2').addClass('hide');
		});

		$('.favbtn').click(function () {
			$(this).toggleClass('fa-star-o');
			$(this).toggleClass('fa-star');
		});

		$('.playcircle').click(function () {
			$('.iplay').toggleClass('fa-play');
			$('.iplay').toggleClass('fa-pause');
			$('.playPuase').toggleClass('playActive')
		});



	//app3
	$('#appitem4').click(function () {
			$(this).addClass('appAtive');
			$('#appitem2').removeClass('appAtive');
			$('#appitem3').removeClass('appAtive');
			$('#appitem1').removeClass('appAtive');
			$('#appitem5').removeClass('appAtive');

			$('.sreen1').addClass('hide');
			$('.sreen2').addClass('hide');
			$('.sreen3').addClass('hide');
			$('.sreen4').removeClass('hide');
			$('.sreen5').addClass('hide');

			$('.nutritionPage1').removeClass('hide');
			$('.nutritionPage2').addClass('hide');
			$('.nutritionPage3').addClass('hide');
	});
	//app4
		$('.nut1item').click(function () {
			$('.nutritionPage1').addClass('hide');
			$('.nutritionPage2').removeClass('hide');
			$('.nutritionPage3').addClass('hide');
		});

		$('.backton1').click(function () {
			$('.nutritionPage1').removeClass('hide');
			$('.nutritionPage2').addClass('hide');
			$('.nutritionPage3').addClass('hide');
		});

		$('.fooditem').click(function () {
			$('.nutritionPage1').addClass('hide');
			$('.nutritionPage2').addClass('hide');
			$('.nutritionPage3').removeClass('hide');
		});

		$('.backton2').click(function () {
			$('.nutritionPage1').addClass('hide');
			$('.nutritionPage2').removeClass('hide');
			$('.nutritionPage3').addClass('hide');
		});

			$('.nutbtn1').click(function () {
				$(this).addClass('foodbtnact');
				$('.nutbtn2').removeClass('foodbtnact');
				$('.nutp3_1').removeClass('hide');
				$('.nutp3_2').addClass('hide');
				$('.food33').text('รายละเอียดอาหาร');
				// $('.food33').css('display','block');
			});

			$('.nutbtn2').click(function () {
				$(this).addClass('foodbtnact');
				$('.nutbtn1').removeClass('foodbtnact');
				$('.nutp3_1').addClass('hide');
				$('.nutp3_2').removeClass('hide');
				$('.food33').text('รายละเอียดอาหาร');
				// $('.food33').css('width','71.9%');
			});
	//app4
	$('#appitem5').click(function () {
		$(this).addClass('appAtive');
		$('#appitem2').removeClass('appAtive');
		$('#appitem3').removeClass('appAtive');
		$('#appitem4').removeClass('appAtive');
		$('#appitem1').removeClass('appAtive');

		$('.sreen1').addClass('hide');
		$('.sreen2').addClass('hide');
		$('.sreen3').addClass('hide');
		$('.sreen4').addClass('hide');
		$('.sreen5').removeClass('hide');

		$('.setting').addClass('hide');
		$('.app5p1').removeClass('hide');
	});
	//app5
		$('#app6setting').click(function () {
			$('.setting').removeClass('hide');
			$('.app5p1').addClass('hide');
		});

		$('.backtoapp5').click(function () {
			$('.setting').addClass('hide');
			$('.app5p1').removeClass('hide');
		});
	//app5

});
