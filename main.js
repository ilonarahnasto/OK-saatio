$(document).ready(function(){

  var myFade = function() {
    $("#fadeout").fadeOut(1000, function() {
      $("#fadein").fadeIn(1500, function() {

      });
    });
  }
  window.setTimeout(myFade, [2000]);

});
