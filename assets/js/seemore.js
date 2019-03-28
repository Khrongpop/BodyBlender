// Copyright (C) 2016, KHRONGPOP PHONNGAM
		$(window).load(function () {

				var browser_w = $(window).width();
				var i =1;

				$('.reviewSeemore').click(function (){

					if(browser_w<=320){

						if(i==1)
							{
								$('.cm3').removeClass('tab');
								$('.cm3').addClass('fadeIn');
								i++;
							}

						else if(i==2)
							{
								$('.cm4').removeClass('tab');
								$('.cm4').addClass('fadeIn');
								$('.reviewSeemore').text("ซ่อน");
								i++;
							}
						else if(i==3)
							{
								$('.cm3').addClass('tab');
								$('.cm3').removeClass('fadeIn');
								$('.cm4').addClass('tab');
								$('.cm4').removeClass('fadeIn');
								$('.reviewSeemore').text("ดูเพิ่มเติม");
								i=1;
							}
						
					}

					else if(browser_w<=768){

						if(i==1)
							{
								$('.cm5').removeClass('des');
								$('.cm5').addClass('fadeIn');
								$('.cm6').removeClass('des');
								$('.cm6').addClass('fadeIn');
								i++;
							}

						else if(i==2)
							{
								$('.cm7').removeClass('hide');
								$('.cm7').addClass('fadeIn');
								$('.cm8').removeClass('hide');
								$('.cm8').addClass('fadeIn');
								$('.reviewSeemore').text("ซ่อน");
								i++;
							}
						else if(i==3)
							{
								$('.cm5').addClass('des');
								$('.cm5').removeClass('fadeIn');
								$('.cm6').addClass('des');
								$('.cm6').removeClass('fadeIn');
								$('.cm7').addClass('hide');
								$('.cm7').removeClass('fadeIn');
								$('.cm8').addClass('hide');
								$('.cm8').removeClass('fadeIn');
								$('.reviewSeemore').text("ดูเพิ่มเติม");
								i=1;
							}
						
					}

					else {

						if(i==1)
							{
								$('.cm7').removeClass('hide');
								$('.cm7').addClass('fadeIn');
								$('.cm8').removeClass('hide');
								$('.cm8').addClass('fadeIn');
								$('.cm9').removeClass('hide');
								$('.cm9').addClass('fadeIn');
								i++;
							}

						else if(i==2)
							{
								$('.cm10').removeClass('hide');
								$('.cm10').addClass('fadeIn');
								$('.cm11').removeClass('hide');
								$('.cm11').addClass('fadeIn');
								$('.cm12').removeClass('hide');
								$('.cm12').addClass('fadeIn');
								$('.reviewSeemore').text("ซ่อน");
								i++;
							}
						else if(i==3)
							{
								$('.cm7').addClass('hide');
								$('.cm7').removeClass('fadeIn');
								$('.cm8').addClass('hide');
								$('.cm8').removeClass('fadeIn');
								$('.cm9').addClass('hide');
								$('.cm9').removeClass('fadeIn');
								$('.cm10').addClass('hide');
								$('.cm10').removeClass('fadeIn');
								$('.cm11').addClass('hide');
								$('.cm11').removeClass('fadeIn');
								$('.cm12').addClass('hide');
								$('.cm12').removeClass('fadeIn');
								$('.reviewSeemore').text("ดูเพิ่มเติม");
								i=1;
							}
						
					}

				});

				$('.addCommentbtn').click(function(){

					
					var name = $('.Reviewcomment').parent().find('#name').val();
					var comment = $('.Reviewcomment').parent().find('#comment').val();
						if(name=='' && comment==''){
							$('#name').css('border',' 3px solid red');
							$('#comment').css('border',' 3px solid red');
							$('.Reviewcomment').addClass('shake');
							$('#name').removeClass('shake');
							$('#comment').removeClass('shake');
						}
						else if(comment==''){
							$('#comment').css('border',' 3px solid red');
							$('#name').css('border', '0 ');
							$('.Reviewcomment').removeClass('shake');
							$('#comment').addClass('shake');
						}
						else if(name=='') {
							$('#name').css('border',' 3px solid red');
							$('#comment').css('border', '0 ');
							$('.Reviewcomment').removeClass('shake');
							$('#name').addClass('shake');
						}
						else {
							$('#name').css('border', '0');
							$('#comment').css('border', '0 ');
							$('.Reviewcomment').removeClass('shake');
							$('#name').removeClass('shake');
							$('#comment').removeClass('shake');
							$('.setcomment').append('<div class="comment animated fadeIn"><div class="commentbox"><i class="fa fa-quote-left quote"></i><p>'+comment+'</p></div> <!-- commentbox --><div class="avatar"><div class="trigle"><div class="content-left"><div class="linel"></div></div> <!-- left --><div class="content-right"><div class="liner"></div></div> <!-- right --></div> <!-- trigle --><div class="avtpic"></div><article class="avt-txt">'+name+' <br><span>BKK, THAILAND</span></article> <!-- avt-txt -->	</div> <!-- avatar -->	</div>');
							$('#name').val('');
							$('#comment').val('');
						}
					

				});
			
		});
