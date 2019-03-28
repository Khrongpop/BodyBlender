// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(document).ready(function(){
					 
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
							}
						});

						$('.fbutton').click(function (){
							var name = $('#ffname').val();
							var name2 = name.split('@')[0];
							if(name2!=''){
								$('.stat-title').text("สวัสดีคุณ "+name2);
								$('.uname').text(name2);
								$('.fne').text(name2);
								$('#ffname').val('');
							}
							$('input[name=fbname]').val('');
						});

						$('.tbutton').click(function (){
							var name = $('#ttname').val();
							var name2 = name.split('@')[0];
							if(name2!=''){
								$('.stat-title').text("สวัสดีคุณ "+name2);
								$('.uname').text(name2);
								$('.fne').text(name2);
								$('input[name=fbname]').val('');
							}
							$('input[name=fbname]').val('');
						});

						$('.logbtn2').click(function (){
							var name = $('#usn').val();
							var name2 = name.split('@')[0];
							if(name2!=''){
								$('.stat-title').text("สวัสดีคุณ "+name2);
								$('.uname').text(name2);
								$('.fne').text(name2);
								$('#usn').val('');
								$('input[name=password]').val('');
							}
							$('#usn').val('');
							$('input[name=password]').val('');

						});


						$('.fblog').click(function () {
							
									swal({
										  title: "แชร์เรียบร้อย",
										  text: "กรุณารอสักครู่",
										  timer: 1000,
										  showConfirmButton: false
										});

						});

						$('.ttb').click(function () {

								swal({
										  title: "ทวิตเรียบร้อย",
										  text: "กรุณารอสักครู่",
										  timer: 1000,
										  showConfirmButton: false
										});

						});

				
					
					
});