	// Copyright (C) 2016, KHRONGPOP PHONNGAM
function fade(){
	$('.statpic').removeClass('fadeIn');
}
	function showPreview(ele)

					{						
							var reader = new FileReader();
	
			 

								reader.onload = function (e) {
										$('.statpic').addClass('fadeIn');
										$('.statpic').css('background-image','url('+ e.target.result+')');
										$('.statpic').css('background-position','center');
										$('.statpic').css('border','0');
										$('.statpic').css('background-color','transparent');

									} 
					reader.readAsDataURL(ele.files[0]);
}