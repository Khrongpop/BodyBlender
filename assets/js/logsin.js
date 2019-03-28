// Copyright (C) 2016, KHRONGPOP PHONNGAM
$(document).ready(function () {

    var login = $('.applog');
    var signup = $('.appsign');
    var n = $('input[name=usid]');
    var e = $('input[name=usemail]');
    var p = $('input[name=uspass]');
    var c = $('input[name=uscpass]');
    var N = $('#usid');
    var P = $('#uspass');

    login.click(function () {

      var id = n.val();
      var pass = p.val();
      var name = id.split('@')[0];


      if(id=='' & pass==''){
        $('.id').addClass('shake');
        $('.id').addClass('err');
        $('.pas').addClass('shake');
        $('.pas').addClass('err');
        setTimeout(function () {
          $('.id').removeClass('shake');
          $('.pas').removeClass('shake');
        },500)
      }
      else if(id==''){
        $('.id').addClass('shake');
        $('.id').addClass('err');
        $('.pas').removeClass('shake');
        $('.pas').removeClass('err');
        setTimeout(function () {
          $('.id').removeClass('shake');
        },500)
      }
      else if(pass==''){
        $('.pas').addClass('shake');
        $('.pas').addClass('err');
        $('.id').removeClass('shake');
        $('.id').removeClass('err');
        setTimeout(function () {
          $('.pas').removeClass('shake');
        },500)
      }
      else  {
        $('.id').removeClass('shake');
        $('.id').removeClass('err');
        $('.pas').removeClass('shake');
        $('.pas').removeClass('err');
        $('.bblogin').addClass('hide');
        $('.bbsigh').addClass('hide');
        $('.bbhome').addClass('hide');
        $('.sreen1').removeClass('hide');
        $('.setmenuapp').removeClass('hide');

        $('.username').text(name);

        var male = $('.ram');
      	var female = $('.rafe');

        $('input[name=setname]').val(name);

      	male.click(function (){
      		male.css('background-color','#003a9c');
      		female.css('background-color','transparent');
      	});

      	female.click(function (){
      		female.css('background-color','#003a9c');
      		male.css('background-color','transparent');
      	});

        $('input[name=setname]').keypress(function(e){
          if(e.which==13){
            var nname = $('input[name=setname]').val();
              $('.username').text(nname);
          }
        });

      }




    });


    signup.click(function() {
        var id = N.val();
        var pass = P.val();
        var confirm = c.val();
        var mail = e.val();
        var name = id.split('@')[0];
        var i =0;
        

      if(id==''){
        $('.id').addClass('shake');
        $('.id').addClass('err');
        setTimeout(function () {
          $('.id').removeClass('shake');
        },500);
      }


      if(mail==''){
        $('.mail').addClass('shake');
        $('.mail').addClass('err');
          setTimeout(function () {
          $('.mail').removeClass('shake');
        },500);
      }

     
      if(pass==''){
        $('.pas').addClass('shake');
        $('.pas').addClass('err');
        setTimeout(function () {
          $('.pas').removeClass('shake');
        },500);
      }

      
      if(confirm==''){
        $('.con').addClass('shake');
        $('.con').addClass('err');
        setTimeout(function () {
          $('.con').removeClass('shake');
        },500);
      }

      if(id!=''){
        $('.id').removeClass('shake');
        $('.id').removeClass('err');
        i++;
        console.log("555");
      }

      if(mail!=''){
        $('.mail').removeClass('shake');
        $('.mail').removeClass('err');
        i++;
        console.log("555");
      }

      if(pass!=''){
        $('.pas').removeClass('shake');
        $('.pas').removeClass('err');
        i++;
      }

      if(confirm!=''){
        $('.con').removeClass('shake');
        $('.con').removeClass('err');
        i++;
      }

      if(i==4){
        $('.bblogin').addClass('hide');
        $('.bbsigh').addClass('hide');
        $('.bbhome').addClass('hide');
        $('.sreen1').removeClass('hide');
        $('.setmenuapp').removeClass('hide');

        $('.username').text(name);

        var male = $('.ram');
        var female = $('.rafe');

        $('input[name=setname]').val(name);

        male.click(function (){
          male.css('background-color','#003a9c');
          female.css('background-color','transparent');
        });

        female.click(function (){
          female.css('background-color','#003a9c');
          male.css('background-color','transparent');
        });

        $('input[name=setname]').keypress(function(e){
          if(e.which==13){
            var nname = $('input[name=setname]').val();
              $('.username').text(nname);
          }
        });
      }
      // console.log(i);

    });
});
