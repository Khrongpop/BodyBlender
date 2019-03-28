	// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(window).load(function () {
	$('.sendbtn').click(function () {

		var i=0;

		var sendname = $('#sendname').val();
		var sendemail = $('#sendemail').val();
		var sendmessage = $('#sendmessage').val();
		var sendphone = $('#sendphone').val();

		var window_w = $(window).width();

		if(sendname==''){
			$('#sendname').addClass('shake');
			if(window_w<=320){
				$('#sendname').css('border','1px solid red');
				$('#sendname').css('margin','3px 5px');
			}
			else {
				$('#sendname').css('border','3px solid red');
			}
		}
		if(sendemail==''){
			$('#sendemail').addClass('shake');
			if(window_w<=320){
				$('#sendemail').css('border','1px solid red');
				$('#sendemail').css('margin','3px 5px');
			}
			else {
				$('#sendemail').css('border','3px solid red');
			}
		}
		if(sendmessage==''){
			$('#sendmessage').addClass('shake');
			if(window_w<=320){
				$('#sendmessage').css('border','1px solid red');
				$('#sendmessage').css('margin','3px 5px');
			}
			else {
				$('#sendmessage').css('border','3px solid red');
			}
		}
		if(sendphone==''){	
			$('#sendphone').addClass('shake');
			if(window_w<=320){
				$('#sendphone').css('border','1px solid red');
				$('#sendphone').css('margin','3px 5px');
			}
			else {
				$('#sendphone').css('border','3px solid red');
			}
		}
		if(sendname!='') {
			$('#sendname').removeClass('shake');
			$('#sendname').css('border',' 0');
			if(window_w<=320){$('#sendname').css('margin',' 5px');}
			i++;	
		}
		if(sendemail!='') {
			$('#sendemail').removeClass('shake');
			$('#sendemail').css('border',' 0');
			if(window_w<=320){$('#sendemail').css('margin',' 5px');}			i++;	
		}
		if(sendmessage!='') {
			$('#sendmessage').removeClass('shake');
			$('#sendmessage').css('border',' 0');
			if(window_w<=320){$('#sendmessage').css('margin',' 5px');}			i++;	
		}
		if(sendphone!='') {
			$('#sendphone').removeClass('shake');
			$('#sendphone').css('border',' 0');
			if(window_w<=320){$('#sendphone').css('margin',' 5px');}
			i++;	
		}
		if(i==4){
			swal({
			  title: "ขอบคุณสำหรับความคิดเห็น",
			  text: "กรุณารอสักครู่",
			  timer: 1000,
			  showConfirmButton: false
			});
		}
	});
});