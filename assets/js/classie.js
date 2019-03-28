/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
  $(window).load(function(){


          $('#showRightPush').click(function(){
            var Exits = $('.Exits').attr('class').split(' ')[1];
            var Exits2 = $('.Exits').attr('class').split(' ')[2];
    
          if(Exits=='fa-reorder'){
            $('.Exits').addClass('fa-times');
            $('.Exits').removeClass('fa-reorder');
            
          }
          else if(Exits2=='fa-times'){

            $('.Exits').removeClass('fa-times');
            $('.Exits').addClass('fa-reorder');
            
          }
          else if(Exits2=='fa-reorder'){

            $('.Exits').removeClass('fa-reorder');
            $('.Exits').addClass('fa-times');
            
          }
          $('.bg').toggleClass('hide');
          $(this).toggleClass('tog');

          $('bg').click(function () {
            $('#showRightPush').removeClass('tog');

            if(Exits=='fa-reorder'){
            $('.Exits').addClass('fa-times');
            $('.Exits').removeClass('fa-reorder');
            
            }
            else if(Exits2=='fa-times'){

              $('.Exits').removeClass('fa-times');
              $('.Exits').addClass('fa-reorder');
              
            }
            else if(Exits2=='fa-reorder'){

              $('.Exits').removeClass('fa-reorder');
              $('.Exits').addClass('fa-times');
              
            }
          });
          
        });

      
  });
  var menuRight = document.getElementById('cbp-spmenu-s');
        var showRightPush = document.getElementById('showRightPush');
        var hideRightPush = document.getElementById('hideRightPush');
        body = document.body;

        showRightPush.onclick = function() {
          classie.toggle(this,'active');
          classie.toggle(body,'cbp-spmenu-push-toleft');
          classie.toggle(menuRight,'cbp-spmenu-open');
          classie.toggle(showRightPush,'disabled');
        };

        $('.bg').click(function () {
          $(this).addClass('hide');
          classie.toggle(this,'active');
          classie.toggle(body,'cbp-spmenu-push-toleft');
          classie.toggle(menuRight,'cbp-spmenu-open');
          classie.toggle(showRightPush,'disabled');
          $('#showRightPush').removeClass('tog');
          var Exits = $('.Exits').attr('class').split(' ')[1];
          var Exits2 = $('.Exits').attr('class').split(' ')[2];
          if(Exits=='fa-reorder'){
            $('.Exits').addClass('fa-times');
            $('.Exits').removeClass('fa-reorder');
            
            }
            else if(Exits2=='fa-times'){

              $('.Exits').removeClass('fa-times');
              $('.Exits').addClass('fa-reorder');
              
            }
            else if(Exits2=='fa-reorder'){

              $('.Exits').removeClass('fa-reorder');
              $('.Exits').addClass('fa-times');
              
            }
       });
( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );