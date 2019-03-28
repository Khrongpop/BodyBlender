	// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(document).ready(function () {
	
	$(window).scroll(function () {
		
		var brower_w = $(window).width();
		var scroll = $(window).scrollTop();

		console.log(scroll);

		if(brower_w<=320){

			if(scroll<290){
				$('.suc1').addClass('des');
				$('.suc2').addClass('hide');
				$('.suc3').addClass('hide');
				$('.suc4').addClass('hide');
				$('.suc5').addClass('hide');
			}
			if(scroll>=291 && scroll<=867){
				$('.suc1').removeClass('des');
			}
			if(scroll >=377 && scroll<=957){
				$('.suc2').removeClass('hide');
			}
			if(scroll >= 490 && scroll<=1060){
				$('.suc3').removeClass('hide');
			}
			if(scroll >= 602 && scroll<=1165){
				$('.suc4').removeClass('hide');
			}
			if(scroll >= 713 && scroll<=1270){
				$('.suc5').removeClass('hide');
			}
			if(scroll>1312){
				$('.suc1').addClass('des');
				$('.suc2').addClass('hide');
				$('.suc3').addClass('hide');
				$('.suc4').addClass('hide');
				$('.suc5').addClass('hide');
			}
			if(scroll<=771){
				$('.premiumpic').addClass('fadeIn');
			}
			if(scroll>781){
				$('.premiumpic').removeClass('fadeIn');
			}
		}

		if(brower_w<=768){
			if(scroll<175){
				$('.suc1').addClass('des');
				$('.suc2').addClass('hide');
				$('.suc3').addClass('hide');
				$('.suc4').addClass('hide');
				$('.suc5').addClass('hide');
			}
			if(scroll>=224 && scroll<=1224){
				$('.suc1').removeClass('des');
			}
			if(scroll >=339 && scroll<=1347){
				$('.suc2').removeClass('hide');
			}
			if(scroll >= 490 && scroll<=1470){
				$('.suc3').removeClass('hide');
			}
			if(scroll >= 592 && scroll<=1592){
				$('.suc4').removeClass('hide');
			}
			if(scroll >= 713 && scroll<=1712){
				$('.suc5').removeClass('hide');
			}
			if(scroll>1807){
				$('.suc1').addClass('des');
				$('.suc2').addClass('hide');
				$('.suc3').addClass('hide');
				$('.suc4').addClass('hide');
				$('.suc5').addClass('hide');
			}

			if(scroll<=1096){
				$('.premiumpic').addClass('fadeIn');
			}
			if(scroll>1096){
				$('.premiumpic').removeClass('fadeIn');
			}
		}
		else {

			if(scroll<10){
				$('.suc2').addClass('hide');
				$('.suc3').addClass('hide');
				$('.suc4').addClass('hide');
				$('.suc5').addClass('hide');
			}
			if(scroll>=0 && scroll<=698){
				$('.suc1').removeClass('hide');
				$('.suc1').removeClass('des');
			}
			if(scroll >=60 && scroll<=820){
				$('.suc2').removeClass('hide');
			}
			if(scroll >= 180 && scroll<=940){
				$('.suc3').removeClass('hide');
			}
			if(scroll >= 305 && scroll<=1060){
				$('.suc4').removeClass('hide');
			}
			if(scroll >= 425 && scroll<=1180){
				$('.suc5').removeClass('hide');
			}
			if(scroll>1265){
				$('.suc1').addClass('hide');
				$('.suc2').addClass('hide');
				$('.suc3').addClass('hide');
				$('.suc4').addClass('hide');
				$('.suc5').addClass('hide');
			}
			if(scroll<=1247){
				$('.premiumpic').addClass('fadeIn');
			}
			if(scroll>1247){
				$('.premiumpic').removeClass('fadeIn');
			}

		}
	});
	
});