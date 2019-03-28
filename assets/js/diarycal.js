// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(document).ready(function () {

	var btn = $('.addbtn');

	btn.click(function () {

		var calinput1 = $('input[name=calDay]').val();
		var calinput2 = $('.goalcal').val();
		var setfood = $('.foodcal').val();
		var setex = $('.Execal').val();
		var settotal = $('.totalcal').val();

		var pass2 = "+";
		var pass3 = "-";

		var input2P = calinput2.split(',')[0];
		var input2R = calinput2.split(',')[1];
		var input2 = (input2P*1000) + (input2R*1)

		var setfood2 = setfood.substring(1);
		var setfood3 = setfood2.substring(1,2);
		var setfood4 = setfood2.substring(2,3);
		var setfood5 = setfood2.substring(3,4);
		var food = setfood2*1;
		if(setfood3==',' || setfood4==',' || setfood5==',')
		{
			var foodP = setfood2.split(',')[0];
			var foodR = setfood2.split(',')[1];
			food = (foodP*1000)+(foodR*1);
		}

		// console.log(food);

		var setex2 = setex.substring(1);
		var setex3 = setex2.substring(1,2);
		var setex4 = setex2.substring(2,3);
		var setex5 = setex2.substring(3,4);
		var ex = setex2*1;
		if(setex3==',' || setex4==',' || setex5==',')
		{
			var exP = setex2.split(',')[0];
			var exR = setex2.split(',')[1];
			ex = (exP*1000)+(exR*1);
		}
		 console.log(setfood3);

		var total =settotal*1;



		var pass = calinput1.substring(0,1);
		var number = calinput1.substring(1);

		 console.log(pass);
		// console.log(number);

		if(pass==pass2)
		{
			food = food + (number*1);
			if(food>=1000){
				var f = food%1000;
				var ff = food-f;
				ff = ff/1000;
				$('.foodcal').val('+'+ff+','+f);
			}
			else{
				$('.foodcal').val('+'+food);
			}
		}
		else if(pass==pass3)
		{
			console.log(ex);
			ex = ex + (number*1) ;
			console.log(ex);
			if(ex>=1000){
				var e = ex%1000;
				var ee = ex-e;
				ee = ee/1000;
				$('.Execal').val('-'+ee+','+e);
			}
			else {
				$('.Execal').val('-'+ex);
			}

		}

		var anstotal = input2-(food-ex);
		$('.totalcal').val(anstotal);



	});

	$('.goalcal').change(function () {

			var calinput2 = $('.goalcal').val();
			var setfood = $('.foodcal').val();
			var setex = $('.Execal').val();
			var settotal = $('.totalcal').val();
			var food = setfood.substring(1);
			var ex = setex.substring(1);

			var ct1 = calinput2.substring(1,2);
			var ct2 = calinput2.substring(2,3);
			var ct3 = calinput2.substring(4,5);

			var ft1 = food.substring(1,2);
			var ft2 = food.substring(2,3);
			var ft3 = food.substring(4,5);

			var et1 = ex.substring(1,2);
			var et2 = ex.substring(2,3);
			var et3 = ex.substring(4,5);

			console.log(ft1);

			if(ct1 ==',')
			{
				var e = calinput2.split(',')[0];
				var ee = calinput2.split(',')[1];
				calinput2 = (e*1000)+(ee*1);
			}
			if(ct2==',')
			{
				var e = calinput2.split(',')[0];
				var ee = calinput2.split(',')[1];
				calinput2 = (e*1000)+(ee*1);
			}
			if(ct3==',')
			{
				var e = calinput2.split(',')[0];
				var ee = calinput2.split(',')[1];
				calinput2 = (e*1000)+(ee*1);
			}

			if(ft1 ==',')
			{
				var e = food.split(',')[0];
				var ee = food.split(',')[1];
				food = (e*1000)+(ee*1);
			}
			if(ft2==',')
			{
				var e = food.split(',')[0];
				var ee = food.split(',')[1];
				food = (e*1000)+(ee*1);
			}
			if(ft3==',')
			{
				var e = food.split(',')[0];
				var ee = food.split(',')[1];
				food = (e*1000)+(ee*1);
			}

			if(et1 ==',')
			{
				var e = ex.split(',')[0];
				var ee = ex.split(',')[1];
				ex = (e*1000)+(ee*1);
			}
			if(et2==',')
			{
				var e = ex.split(',')[0];
				var ee = ex.split(',')[1];
				ex = (e*1000)+(ee*1);
			}
			if(et3==',')
			{
				var e = ex.split(',')[0];
				var ee = ex.split(',')[1];
				ex = (e*1000)+(ee*1);
			}



			console.log(calinput2);
			console.log(food);
			console.log(ex);

			var anstotal = calinput2-(food-ex);

			console.log('..'+anstotal);
			anstotal = anstotal*1;
			$('.totalcal').val(anstotal);

	});

	$('.goalcal').keypress(function (e) {

		if(e.which==13){

			var calinput2 = $('.goalcal').val();
			var setfood = $('.foodcal').val();
			var setex = $('.Execal').val();
			var settotal = $('.totalcal').val();
			var food = setfood.substring(1);
			var ex = setex.substring(1);

			var ct1 = calinput2.substring(1,2);
			var ct2 = calinput2.substring(2,3);
			var ct3 = calinput2.substring(4,5);

			var ft1 = food.substring(1,2);
			var ft2 = food.substring(2,3);
			var ft3 = food.substring(4,5);

			var et1 = ex.substring(1,2);
			var et2 = ex.substring(2,3);
			var et3 = ex.substring(4,5);

			console.log(ft1);

			if(ct1 ==',')
			{
				var e = calinput2.split(',')[0];
				var ee = calinput2.split(',')[1];
				calinput2 = (e*1000)+(ee*1);
			}
			if(ct2==',')
			{
				var e = calinput2.split(',')[0];
				var ee = calinput2.split(',')[1];
				calinput2 = (e*1000)+(ee*1);
			}
			if(ct3==',')
			{
				var e = calinput2.split(',')[0];
				var ee = calinput2.split(',')[1];
				calinput2 = (e*1000)+(ee*1);
			}

			if(ft1 ==',')
			{
				var e = food.split(',')[0];
				var ee = food.split(',')[1];
				food = (e*1000)+(ee*1);
			}
			if(ft2==',')
			{
				var e = food.split(',')[0];
				var ee = food.split(',')[1];
				food = (e*1000)+(ee*1);
			}
			if(ft3==',')
			{
				var e = food.split(',')[0];
				var ee = food.split(',')[1];
				food = (e*1000)+(ee*1);
			}

			if(et1 ==',')
			{
				var e = ex.split(',')[0];
				var ee = ex.split(',')[1];
				ex = (e*1000)+(ee*1);
			}
			if(et2==',')
			{
				var e = ex.split(',')[0];
				var ee = ex.split(',')[1];
				ex = (e*1000)+(ee*1);
			}
			if(et3==',')
			{
				var e = ex.split(',')[0];
				var ee = ex.split(',')[1];
				ex = (e*1000)+(ee*1);
			}



			console.log(calinput2);
			console.log(food);
			console.log(ex);

			var anstotal = calinput2-(food-ex);

			console.log('..'+anstotal);
			anstotal = anstotal*1;
			$('.totalcal').val(anstotal);
		}
	
		
	});



});
