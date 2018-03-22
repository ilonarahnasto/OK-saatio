$(document).ready(function(){

  var myFade = function() {
    $("body").fadeIn(1800, function() {

    });
  }

  window.setTimeout(myFade, [800]);

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

});
