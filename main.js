$(document).ready(function(){

  var imgwidth;
  var imgheight;
  if ($(document).width() < 480) {
    imgwidth = $(document).width()/2;
    imgheight = imgwidth/1.65;
  } else {
    imgwidth = $(document).width()/3
    imgheight = imgwidth/1.65;
  }
  var topmargin = imgheight/2;/* Half the height */
  var leftmargin = imgwidth/2;/* Half the width */

  /*document.getElementById("logo").style.width = 'imgwidth';
  document.getElementById("logo").style.height = 'imgheight';
  document.getElementById("logo").style.marginTop = 'topmargin';
  document.getElementById("logo").style.marginLeft = 'leftmargin';*/

  /*$("img#logo").css( "position", "absolute" );
  $("img#logo").css( "top", "50%");
  $("img#logo").css( "left", "50%");
  $("img#logo").css( "width", imgwidth );
  $("img#logo").css( "height", imgheight );
  $("img#logo").css( "margin-top", topmargin );
  $("img#logo").css( "margin-left", leftmargin );*/


  var myFade = function() {
    $("body").fadeIn(1800, function() {

    });
  }
  window.setTimeout(myFade, [800]);

});
