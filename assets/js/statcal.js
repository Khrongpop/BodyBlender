// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(window).load(function () {

	var full = $('.fulltime');
	var rest = $('.resttime');
	var showtime = $('.stattime');
	var showdist = $('.statdist');
	var showcal = $('.statcal');
	var zero = '0';

	full.keypress(function (e) {

		
		if(e.which==13)
		{
			var time = full.val();
			var resttime = rest.val();
			var h = time.split('.')[0];
			var m = time.split('.')[1];
			var s = time.split('.')[2];
			h=h*1;
			m=m*1;
			s=s*1;

			if(m>59) {
				var M = m%60;
				var MM = (m-M)/60;

				// console.log(M);
				// console.log(MM);

				// MM = MM/2;
				h = h+MM; 
				m = M;
			}

			if(s>59) {
				var S = s%60;
				var SS = (s-S)/60;

				m = m +SS;
				s = S;

				 // console.log(S);
				 // console.log(SS);
			}
			

			var r_h = resttime.split('.')[0];
			var r_m = resttime.split('.')[1];
			var r_s = resttime.split('.')[2];

			var totalh = (h - r_h)*60;
			var totalm = ((m - r_m)+totalh) *60 ;
			var totals = (s - r_s);
			
			var totaltime = totalm + totals;

			var totalcal = ((totaltime / 60) * 10).toFixed(1);

			var setdist = ((totaltime/60)/60)*5;
			var totaldist = setdist.toFixed(2);

			// console.log(h);
			 // console.log(setdist);

			if(m<10)
			{
				// var zm = m.split('0')[1];
				m = zero + m;
			}
			if (s<10 )
			{
			
				s = zero + s;
			}
		
			if(h==0)
			{	
				showtime.text("22:17");
				showtime.removeClass('H');
				showcal.text(totalcal);
				showdist.text('');
				showdist.append(totaldist+'<span id="km">km</span>')
				setTimeout(function () {
					showtime.text("45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("30:40");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);
			}
			else if(h<10)
			{				
				h = zero + h ;
				showtime.text("02:15:30");
				showtime.addClass('H');
				showcal.text('34.5');
				showdist.text('');
				showdist.append('10.5<span id="km">km</span>')

				setTimeout(function () {
					showtime.text("07:45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("12:30:00");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("11:57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(h+":"+m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);
			}
			else if(h>=10){

				showtime.text("02:15:30");
				showtime.addClass('H');
				showcal.text('34.5');
				showdist.text('');
				showdist.append('10.5<span id="km">km</span>')

				setTimeout(function () {
					showtime.text("07:45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("12:30:00");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("11:57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(h+":"+m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);

			}

		}

	});

	full.change(function () {
	
			var time = full.val();
			var resttime = rest.val();
			var h = time.split('.')[0];
			var m = time.split('.')[1];
			var s = time.split('.')[2];
			h=h*1;
			m=m*1;
			s=s*1;

			if(m>59) {
				var M = m%60;
				var MM = (m-M)/60;

				// console.log(M);
				// console.log(MM);

				// MM = MM/2;
				h = h+MM; 
				m = M;
			}

			if(s>59) {
				var S = s%60;
				var SS = (s-S)/60;

				m = m +SS;
				s = S;

				 // console.log(S);
				 // console.log(SS);
			}
			

			var r_h = resttime.split('.')[0];
			var r_m = resttime.split('.')[1];
			var r_s = resttime.split('.')[2];

			var totalh = (h - r_h)*60;
			var totalm = ((m - r_m)+totalh) *60 ;
			var totals = (s - r_s);
			
			var totaltime = totalm + totals;

			var totalcal = ((totaltime / 60) * 10).toFixed(1);

			var setdist = ((totaltime/60)/60)*5;
			var totaldist = setdist.toFixed(2);

			// console.log(h);
			 // console.log(setdist);

			if(m<10)
			{
				// var zm = m.split('0')[1];
				m = zero + m;
			}
			if (s<10 )
			{
			
				s = zero + s;
			}
		
			if(h==0)
			{	
				showtime.text("22:17");
				showtime.removeClass('H');
				showcal.text(totalcal);
				showdist.text('');
				showdist.append(totaldist+'<span id="km">km</span>')
				setTimeout(function () {
					showtime.text("45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("30:40");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);
			}
			else if(h<10)
			{				
				h = zero + h ;
				showtime.text("02:15:30");
				showtime.addClass('H');
				showcal.text('34.5');
				showdist.text('');
				showdist.append('10.5<span id="km">km</span>')

				setTimeout(function () {
					showtime.text("07:45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("12:30:00");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("11:57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(h+":"+m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);
			}
			else if(h>=10){

				showtime.text("02:15:30");
				showtime.addClass('H');
				showcal.text('34.5');
				showdist.text('');
				showdist.append('10.5<span id="km">km</span>')

				setTimeout(function () {
					showtime.text("07:45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("12:30:00");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("11:57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(h+":"+m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);

			}

		

	});

	rest.keypress(function (e) {
		
		$('#km').removeClass('pull-right');
		
			if(e.which==13)
		{
			var time = full.val();
			var resttime = rest.val();
			var h = time.split('.')[0];
			var m = time.split('.')[1];
			var s = time.split('.')[2];
			h=h*1;
			m=m*1;
			s=s*1;

			if(m>59) {
				var M = m%60;
				var MM = (m-M)/60;

				// console.log(M);
				// console.log(MM);

				// MM = MM/2;
				h = h+MM; 
				m = M;
			}

			if(s>59) {
				var S = s%60;
				var SS = (s-S)/60;

				m = m +SS;
				s = S;

				 // console.log(S);
				 // console.log(SS);
			}
			

			var r_h = resttime.split('.')[0];
			var r_m = resttime.split('.')[1];
			var r_s = resttime.split('.')[2];

			var totalh = (h - r_h)*60;
			var totalm = ((m - r_m)+totalh) *60 ;
			var totals = (s - r_s);
			
			var totaltime = totalm + totals;

			var totalcal = ((totaltime / 60) * 10).toFixed(1);

			var setdist = ((totaltime/60)/60)*5;
			var totaldist = setdist.toFixed(2);

			// console.log(h);
			 // console.log(setdist);

			if(m<10)
			{
				// var zm = m.split('0')[1];
				m = zero + m;
			}
			if (s<10 )
			{
			
				s = zero + s;
			}
			if(h==0)
			{	
				showtime.text("22:17");
				showtime.removeClass('H');
				showcal.text(totalcal);
				showdist.text('');
				showdist.append(totaldist+'<span id="km">km</span>')
				setTimeout(function () {
					showtime.text("45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("30:40");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);
			}
			else if(h<10)
			{				
				h = zero + h ;
				showtime.text("02:15:30");
				showtime.addClass('H');
				showcal.text('34.5');
				showdist.text('');
				showdist.append('10.5<span id="km">km</span>')

				setTimeout(function () {
					showtime.text("07:45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("12:30:00");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("11:57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(h+":"+m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);
			}
			else if(h>=10){

				showtime.text("02:15:30");
				showtime.addClass('H');
				showcal.text('34.5');
				showdist.text('');
				showdist.append('10.5<span id="km">km</span>')

				setTimeout(function () {
					showtime.text("07:45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("12:30:00");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("11:57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(h+":"+m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);

			}

		}

	});

	rest.change(function () {
	
			var time = full.val();
			var resttime = rest.val();
			var h = time.split('.')[0];
			var m = time.split('.')[1];
			var s = time.split('.')[2];
			h=h*1;
			m=m*1;
			s=s*1;

			if(m>59) {
				var M = m%60;
				var MM = (m-M)/60;

				// console.log(M);
				// console.log(MM);

				// MM = MM/2;
				h = h+MM; 
				m = M;
			}

			if(s>59) {
				var S = s%60;
				var SS = (s-S)/60;

				m = m +SS;
				s = S;

				 // console.log(S);
				 // console.log(SS);
			}
			

			var r_h = resttime.split('.')[0];
			var r_m = resttime.split('.')[1];
			var r_s = resttime.split('.')[2];

			var totalh = (h - r_h)*60;
			var totalm = ((m - r_m)+totalh) *60 ;
			var totals = (s - r_s);
			
			var totaltime = totalm + totals;

			var totalcal = ((totaltime / 60) * 10).toFixed(1);

			var setdist = ((totaltime/60)/60)*5;
			var totaldist = setdist.toFixed(2);

			// console.log(h);
			 // console.log(setdist);

			if(m<10)
			{
				// var zm = m.split('0')[1];
				m = zero + m;
			}
			if (s<10 )
			{
			
				s = zero + s;
			}
		
			if(h==0)
			{	
				showtime.text("22:17");
				showtime.removeClass('H');
				showcal.text(totalcal);
				showdist.text('');
				showdist.append(totaldist+'<span id="km">km</span>')
				setTimeout(function () {
					showtime.text("45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("30:40");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);
			}
			else if(h<10)
			{				
				h = zero + h ;
				showtime.text("02:15:30");
				showtime.addClass('H');
				showcal.text('34.5');
				showdist.text('');
				showdist.append('10.5<span id="km">km</span>')

				setTimeout(function () {
					showtime.text("07:45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("12:30:00");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("11:57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(h+":"+m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);
			}
			else if(h>=10){

				showtime.text("02:15:30");
				showtime.addClass('H');
				showcal.text('34.5');
				showdist.text('');
				showdist.append('10.5<span id="km">km</span>')

				setTimeout(function () {
					showtime.text("07:45:37");
					showcal.text('91.3');
					showdist.text('');
					showdist.append('13.67<span id="km">km</span>')
				},100);

				setTimeout(function () {
					showtime.text("12:30:00");
					showcal.text('77.0');
					showdist.text('');
					showdist.append('22.02<span id="km">km</span>')
				},200);

				setTimeout(function () {
					showtime.text("11:57:49");
					showcal.text('24.6');
					showdist.text('');
					showdist.append('30.73<span id="km">km</span>')
				},300);

				setTimeout(function () {
					showtime.text("00:00:00");
					showcal.text('00.0');
					showdist.text('');
					showdist.append('00.00<span id="km">km</span>')
				},400);

				setTimeout(function () {
					showtime.text(h+":"+m+":"+s);
					showcal.text(totalcal);
					showdist.text('');
					showdist.append(totaldist+'<span id="km">km</span>')
				},500);

			}

		

	});

});