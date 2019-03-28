	// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(document).ready(function () {
	$('.subbtn').click(function () {
			swal({
				  title: 'ใส่อีเมล์ของคุณ',
				  input: 'email',
				  showCancelButton: true,
				  confirmButtonText: 'Subscribe',
				  showLoaderOnConfirm: true,
				  preConfirm: function (email) {
				    return new Promise(function (resolve, reject) {
				      setTimeout(function() {
				        if (email === 'taken@example.com') {
				          reject('This email is already taken.')
				        } else {
				          resolve()
				        }
				      }, 2000)
				    })
				  },
				  allowOutsideClick: false
				}).then(function (email) {
				  swal({
				    type: 'success',
				    title: 'Subscribe เรียบร้อย',
				    html: ' ข่าวสารของพวกเราจะส่งไปที่ ' + email,
				    timer: 2000,
			 		showConfirmButton: false
				  })
				});
	});
});