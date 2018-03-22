//This shit aint working well enough

$(window).scroll(function() {
    var arkkitehdiksiheight = $('#static-nav').offset().top;
    var currentheight = document.documentElement.scrollTop;
    var width = $( window ).width();
    var position = (arkkitehdiksiheight < currentheight); //if true -> fadeIn, if false -> fadeout

    if (width >= 770) {
      if (position) {
        $("#nav").fadeIn(300, function() {

        });
      } else if (!position) {
        $("#nav").fadeOut(300, function() {

        });
      }
    }

    if (width < 770) {
      var visible = false;

      if (position && !visible) {
        $("#nav").fadeIn(300, function() {
          visible = true;
        });
      } else if (!position && visible) {
        $("#nav").fadeOut(300, function() {
          visible = false;
        });
      }

     var lastScrollTop = $(window).scrollTop();
      $(window).scroll(function(event) {
        var st = $(window).scrollTop();
        var scrolldown = (st > lastScrollTop); //scrolling down
        if (position && !scrolldown && !visible) {
          $("#nav").fadeIn(300, function() {
            visible = true;
          });
        } else if ((scrolldown || !position) && visible ) {
          $("#nav").hide();
          visible = false;
        }
        lastScrollTop = st;
      });
    }

  });
