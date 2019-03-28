	// Copyright (C) 2016, KHRONGPOP PHONNGAM
	$(document).ready(function () {

					var j=1;
					var i=0;
					 	
					 	
					 		$('.desmenu-login').click(function(){
					 			if(i%2==0)
					 			{
					 				$('.login-container').removeClass('hide');
									 $('.login-container').addClass('bounceInDown');
									 $('#inputid').removeClass('inputerr');
									$('#inputpass').removeClass('inputerr');
									 i++;
									 
									 	
					 			}
					 			else {
					 				$('.login-container').addClass('hide');
									$('.login-container').removeClass('bounceInDown');
									$('#inputid').removeClass('inputerr');
									$('#inputpass').removeClass('inputerr');
									i++;
					 			}
							 
							});
							$('.bt').click(function(){
					 			if(i%2==0)
					 			{
					 				$('.login-container').removeClass('hide');
									 $('.login-container').addClass('bounceInDown');
									 $('#inputid').removeClass('inputerr');
									$('#inputpass').removeClass('inputerr');
									 i++;
									 	
					 			}
					 			else {
					 				$('.login-container').addClass('hide');
									$('.login-container').removeClass('bounceInDown');
									$('#inputid').removeClass('inputerr');
									$('#inputpass').removeClass('inputerr');
									i++;
					 			}
							 
							});
					 	
				

						$('.exits-login').click(function(){
							$('.login-container').addClass('hide');
							$('.login-container').removeClass('bounceInDown');
							$('#inputid').removeClass('inputerr');
							$('#inputpass').removeClass('inputerr');
							i++;
						});
						
						$('.logbtn').click(function(){
							var id = $('#id-login').val();
							var pass =$('#pass-login').val();
							if(id==''&pass==''){
								$('#inputid').addClass('inputerr');
								$('#inputpass').addClass('inputerr');
								$('.login-container').removeClass('bounceInDown');
								$('.login-container').addClass('shake');
							}
							else if(id==''){
								$('#inputid').addClass('inputerr');
								$('#inputpass').removeClass('inputerr');
								$('.login-container').removeClass('bounceInDown');
								$('.login-container').addClass('shake');
							}
							else if(pass==''){
								$('#inputid').removeClass('inputerr');
								$('#inputpass').addClass('inputerr');
								$('.login-container').removeClass('bounceInDown');
								$('.login-container').addClass('shake');
							}
							else {
								$('.stat-title').text("สวัสดีคุณ "+id);
								$('.uname').text(id);
								$('.login-container').addClass('hide');
								$('.login-container').removeClass('bounceInDown');
								$('.login-container').removeClass('shake');
								$('#inputid').removeClass('inputerr');
								$('#inputpass').removeClass('inputerr');
								$('#id-login').val('');
								$('#pass-login').val('');								
								i++;

								$('.Chatnow').removeClass('fadeIn');
							
								$('.checklogin').addClass('hide');
								$('.chatitem').removeClass('hide');
								$('.chatinput').removeClass('hide');

								$('.nameuser').text(id);
								j++;
							}
							$('input[name=chat]').keypress(function(e){
						
							 var text = $(this).val();

							 if(e.which==13)
							 {
							 	if(text!=''){
							 		$('.chatbar').append('<div class="setchatbar animated fadeIn"><div class="setpic"><div class="chatpic"></div></div> <div class="settext">'+text+'</div> </div>');
								 $(this).val('');
							 	}
							 }		
							});

							$('.fa-thumbs-o-up').click(function () {
								$('.chatbar').append('<div class="setchatbar animated fadeIn"><div class="setpic"><div class="chatpic"></div></div> <div class="settext"><span><i class="fa fa-thumbs-up "></i></span></div> </div>');
							});

						});

					$('.btnChatLogin').click(function () {

						var user = $('input[name=chatID]').val();
						var pass = $('input[name=pass]').val();


						if(user=="" && pass=="")
						{
							$('.Chatnow').removeClass('fadeIn');
							$('.setani').addClass('shake');
							$('input[name=chatID]').addClass('errinput');
							$('input[name=pass]').addClass('errinput');
						}
						else if (user=="")
						{
							$('.Chatnow').removeClass('fadeIn');
							$('.setani').removeClass('shake');
							$('input[name=chatID]').addClass('shake');
							$('input[name=chatID]').addClass('errinput');
							$('input[name=pass]').removeClass('errinput');
						}
						else if (pass=="")
						{
							$('.Chatnow').removeClass('fadeIn');
							$('.setani').removeClass('shake');
							$('input[name=pass]').addClass('shake');
							$('input[name=pass]').addClass('errinput');
							$('input[name=chatID]').removeClass('errinput');
						}
						else {
							$('.Chatnow').removeClass('fadeIn');
							$('.setani').removeClass('shake');

							$('input[name=chatID]').removeClass('shake');
							$('input[name=pass]').removeClass('shake');

							$('.checklogin').addClass('hide');
							$('.chatitem').removeClass('hide');
							$('.chatinput').removeClass('hide');

							$('.nameuser').text(user);
							j++;
						}

						$('input[name=chat]').keypress(function(e){
						
							 var text = $(this).val();

							 if(e.which==13)
							 {
							 	if(text!=''){
							 		$('.chatbar').append('<div class="setchatbar animated fadeIn"><div class="setpic"><div class="chatpic"></div></div> <div class="settext">'+text+'</div> </div>');
								 $(this).val('');
							 	}
							 }
							
							 
						});

						$('.fa-thumbs-o-up').click(function () {
							$('.chatbar').append('<div class="setchatbar animated fadeIn"><div class="setpic"><div class="chatpic"></div></div> <div class="settext"><span><i class="fa fa-thumbs-up "></i></span></div> </div>');
						});
						
					});

					$('.chatbtn').click(function() {

						$('.Chatnow').removeClass('hide');

						$('.headchat').click(function() {
									
								if(j==1)	
								{
									$('.Chatnow').toggleClass('out');
									$('.checklogin').toggleClass('hide');
								}	
								if(j==2)
								{
									$('.Chatnow').toggleClass('out');
									$('.chatitem').toggleClass('hide');
									$('.chatinput').toggleClass('hide');
								}																																																								
						});
						
					});

					$('.chatclose').click(function() {
						$('.Chatnow').addClass('hide');										
					});


					
					
				});