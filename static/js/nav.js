// This shit aint working well enough
// Here's the html

/*
<head>
  <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossorigin="anonymous"></script>
  <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/regular.js" integrity="sha384-t7yHmUlwFrLxHXNLstawVRBMeSLcXTbQ5hsd0ifzwGtN7ZF7RZ8ppM7Ldinuoiif" crossorigin="anonymous"></script>
  <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/brands.js" integrity="sha384-sCI3dTBIJuqT6AwL++zH7qL8ZdKaHpxU43dDt9SyOzimtQ9eyRhkG3B7KMl6AO19" crossorigin="anonymous"></script>
  <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossorigin="anonymous"></script>
</head>
<nav id="nav" class="navbar navbar-expand-lg position-fixed" style="display: none;">
  <div class="navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fab fa-accessible-icon"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#arkkitehdiksi">Arkkitehdiksi</a>
          <a class="dropdown-item" href="#saatio">Säätiö</a>
          <a class="dropdown-item" href="#galleria">Galleria</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

*/


$(window).scroll(function() {
    var arkkitehdiksiheight = $('#static-nav').offset().top;
    var currentheight = document.documentElement.scrollTop;
    var width = $( window ).width();
    var position = (arkkitehdiksiheight < currentheight); //if true -> fadeIn, if false -> fadeout

    //if (width >= 770) {
      if (position) {
        $("#nav").fadeIn(300, function() {

        });
      } else if (!position) {
        $("#nav").fadeOut(300, function() {

        });
      }
    //}
/*
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
    }*/

  });
