// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(window).load(function () {
	
	$('#Foodsearch').keyup(function () {
			var input, filter,  li, a, i;
		    input = $(this);
		    filter = input.val().toUpperCase();
		    li = $('#setul>li');
		    for (i = 0; i < li.length; i++) {
		        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
		            li[i].style.display = "";
		        } else {
		            li[i].style.display = "none";
		        }
		    }
	});
});