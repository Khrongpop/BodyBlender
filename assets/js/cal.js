// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(document).ready(function () {

	$('#bmi').click(function () {
		$('.bmi').removeClass('hide');
		$(this).addClass('calmenuActive');
		$('#bf').removeClass('calmenuActive');
		$('.bf').addClass('hide');
		$('input[name=height]').val('0');
		$('input[name=weight]').val('0');
		$('.bmicircle').text('0.00');
	});

	$('#bf').click(function () {
		$('.bf').removeClass('hide');
		$('.bmi').addClass('hide');
		$(this).addClass('calmenuActive');
		$('#bmi').removeClass('calmenuActive');
		$('input[name=height2]').val('0');
		$('input[name=weight2]').val('0');
		$('input[name=waist]').val('0');
		$('.bfans').text('0.00 %');
	});

	$('#bmical').click(function () {
		var h = $('input[name=height]').val();
		var w = $('input[name=weight]').val();
		var H = h/100;
		var num = w/H/H;
		var bmi = num.toFixed(2);

		$('.bmicircle').text(bmi);


	});

	$('#bfcal').click(function () {
		var h = $('input[name=height2]').val();
		var w = $('input[name=weight2]').val();
		var s = $('input[name=waist]').val();


		 w = w*2.2;
		var f1 = (w*1.082) + 94.42;
		var f2 = s * 4.15;
		var lbm = f1-f2;
		var bfm = w-lbm;
		var num = (bfm*100)/w;

		var bf = num.toFixed(2);

		// console.log(w);
		// console.log(f1);
		// console.log(f2);
		// console.log(lbm);

		$('.bfans').text(bf+' %');

	});

	$('#nutN').keypress(function (e) {
		if(e.which==13){
				var Nval1 = $(this).val();
				var Nval2 = $('#nutN2').val();
				var numval2 = Nval2.split(' ')[1];

				var cal = (30/6)*numval2*Nval1;
				var CAL =cal.toFixed(2);

				var fat =((14/10)/6)*numval2*Nval1;
				var FAT =fat.toFixed(2);

				var carb = (4/6)*numval2*Nval1;
				var CARB =carb.toFixed(2);

				var pro = (0.2/6)*numval2*Nval1;
				var PRO =pro.toFixed(2);

				$('.Nut1Ans1').text(Nval1);
				$('.Nut2Ans1').text(Nval2);

				$('.txtcal').text(CAL);
				$('.textcal').text('calories');

				$('.totalcal').text(CAL);
				$('.totalfat').text(FAT);
				$('.totalcarb').text(CARB);
				$('.totalpro').text(PRO);

				var 	walk = (CAL*27)/100;
				var   run =  (CAL*12)/100;
				var   swim =  (CAL*9)/100;
				var   byt =  (CAL*16)/100;

				var totalwalk = walk.toFixed(0);
				var totalrun = run.toFixed(0);
				var totalswim = swim.toFixed(0);
				var totalbyt = byt.toFixed(0);

				$('.ntotalwalk').text(totalwalk);
				$('.totalrun').text(totalrun);
				$('.totalswim').text(totalswim);
				$('.totalbyt').text(totalbyt);

				var dist = (totalwalk/100)*90;
				var persen = dist;

				var walk2 = (totalwalk/100)*dist;
				var run2 = (totalrun/100)*dist;
				var swim2 = (totalswim/100)*dist;
				var byt2 = (totalbyt/100)*dist;

				var totalwalk2 = walk.toFixed(0);
				var totalrun2 = run.toFixed(0);
				var totalswim2 = swim.toFixed(0);
				var totalbyt2 = byt.toFixed(0);

				if(totalwalk2<60) {totalwalk2=60;}
				if(totalrun2<40) {totalrun2=40;}
				if(totalswim2<30) {totalswim2=30;}
				if(totalbyt2<50) {totalbyt2=50;}

				if(totalwalk2>100) {totalwalk2=100;}
				if(totalrun2>80) {totalrun2=80;}
				if(totalswim2>70) {totalswim2=70;}
				if(totalbyt2>90) {totalbyt2=90;}

				$('.ntotalwalk3').css('width',totalwalk2+'%');
				$('.totalrun2').css('width',totalrun2+'%');
				$('.totalswim2').css('width',totalswim2+'%');
				$('.totalbyt2').css('width',totalbyt2+'%');


		}
	});


	$('#nutN').change( function () {
		var Nval1 = $('#nutN').val();
		var Nval2 = $('#nutN2').val();
		var numval2 = Nval2.split(' ')[1];

		var cal = (30/6)*numval2*Nval1;
		var CAL =cal.toFixed(2);

		var fat =((14/10)/6)*numval2*Nval1;
		var FAT =fat.toFixed(2);

		var carb = (4/6)*numval2*Nval1;
		var CARB =carb.toFixed(2);

		var pro = (0.2/6)*numval2*Nval1;
		var PRO =pro.toFixed(2);

		$('.Nut1Ans1').text(Nval1);
		$('.Nut2Ans1').text(Nval2);

		$('.txtcal').text(CAL);
		$('.textcal').text('calories');

		$('.totalcal').text(CAL);
		$('.totalfat').text(FAT);
		$('.totalcarb').text(CARB);
		$('.totalpro').text(PRO);

		var 	walk = (CAL*27)/100;
		var   run =  (CAL*12)/100;
		var   swim =  (CAL*9)/100;
		var   byt =  (CAL*16)/100;

		var totalwalk = walk.toFixed(0);
		var totalrun = run.toFixed(0);
		var totalswim = swim.toFixed(0);
		var totalbyt = byt.toFixed(0);

		$('.ntotalwalk').text(totalwalk);
		$('.totalrun').text(totalrun);
		$('.totalswim').text(totalswim);
		$('.totalbyt').text(totalbyt);

		var dist = (totalwalk/100)*90;
		var persen = dist;

		var walk2 = (totalwalk/100)*dist;
		var run2 = (totalrun/100)*dist;
		var swim2 = (totalswim/100)*dist;
		var byt2 = (totalbyt/100)*dist;

		var totalwalk2 = walk.toFixed(0);
		var totalrun2 = run.toFixed(0);
		var totalswim2 = swim.toFixed(0);
		var totalbyt2 = byt.toFixed(0);

		if(totalwalk2<60) {totalwalk2=60;}
		if(totalrun2<40) {totalrun2=40;}
		if(totalswim2<30) {totalswim2=30;}
		if(totalbyt2<50) {totalbyt2=50;}

		if(totalwalk2>100) {totalwalk2=100;}
		if(totalrun2>80) {totalrun2=80;}
		if(totalswim2>70) {totalswim2=70;}
		if(totalbyt2>90) {totalbyt2=90;}

		$('.ntotalwalk3').css('width',totalwalk2+'%');
		$('.totalrun2').css('width',totalrun2+'%');
		$('.totalswim2').css('width',totalswim2+'%');
		$('.totalbyt2').css('width',totalbyt2+'%');
	});


	$('.form3Box').change( function () {
		var Nval1 = $('#nutN').val();
		var Nval2 = $('#nutN2').val();
		var numval2 = Nval2.split(' ')[1];

		var cal = (30/6)*numval2*Nval1;
		var CAL =cal.toFixed(2);

		var fat =((14/10)/6)*numval2*Nval1;
		var FAT =fat.toFixed(2);

		var carb = (4/6)*numval2*Nval1;
		var CARB =carb.toFixed(2);

		var pro = (0.2/6)*numval2*Nval1;
		var PRO =pro.toFixed(2);

		$('.Nut1Ans1').text(Nval1);
		$('.Nut2Ans1').text(Nval2);

		$('.txtcal').text(CAL);
		$('.textcal').text('calories');

		$('.totalcal').text(CAL);
		$('.totalfat').text(FAT);
		$('.totalcarb').text(CARB);
		$('.totalpro').text(PRO);

		var 	walk = (CAL*27)/100;
		var   run =  (CAL*12)/100;
		var   swim =  (CAL*9)/100;
		var   byt =  (CAL*16)/100;

		var totalwalk = walk.toFixed(0);
		var totalrun = run.toFixed(0);
		var totalswim = swim.toFixed(0);
		var totalbyt = byt.toFixed(0);

		$('.ntotalwalk').text(totalwalk);
		$('.totalrun').text(totalrun);
		$('.totalswim').text(totalswim);
		$('.totalbyt').text(totalbyt);

		var dist = (totalwalk/100)*90;
		var persen = dist;

		var walk2 = (totalwalk/100)*dist;
		var run2 = (totalrun/100)*dist;
		var swim2 = (totalswim/100)*dist;
		var byt2 = (totalbyt/100)*dist;

		var totalwalk2 = walk.toFixed(0);
		var totalrun2 = run.toFixed(0);
		var totalswim2 = swim.toFixed(0);
		var totalbyt2 = byt.toFixed(0);

		if(totalwalk2<60) {totalwalk2=60;}
		if(totalrun2<40) {totalrun2=40;}
		if(totalswim2<30) {totalswim2=30;}
		if(totalbyt2<50) {totalbyt2=50;}

		if(totalwalk2>100) {totalwalk2=100;}
		if(totalrun2>80) {totalrun2=80;}
		if(totalswim2>70) {totalswim2=70;}
		if(totalbyt2>90) {totalbyt2=90;}

		$('.ntotalwalk3').css('width',totalwalk2+'%');
		$('.totalrun2').css('width',totalrun2+'%');
		$('.totalswim2').css('width',totalswim2+'%');
		$('.totalbyt2').css('width',totalbyt2+'%');
	});



	
});
