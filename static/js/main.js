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

$(window).scroll(function() {
    var arkkitehdiksiheight = $('#static-nav').offset().top;
    var currentheight = document.documentElement.scrollTop;
    if (arkkitehdiksiheight < currentheight) {
      $("#nav").fadeIn(300, function() {
        console.log("is anything happening");
      });
    } else if (arkkitehdiksiheight > currentheight) {
      $("#nav").fadeOut(300, function() {
        console.log("something is happening");
      });
    }
  });

});
