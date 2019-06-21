
$(document).ready(function(){


var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

  var isNavActive = false;
  $("#nav-open").click(function(){
    if (isNavActive == true) {
      $("header").removeClass("header-responsive");
      isNavActive = false;
    }
    else{
      $("header").addClass("header-responsive");
      isNavActive = true;
    }
  });

  /*Анимация свертывания меню*/
  $("#nav-close").click(function(){
    $(".nav-menu").slideUp();
  });

  /*Плавный скролл*/
  $("a").on('click', function(event) {

    if (this.hash !== "") {

    event.preventDefault();

      $('html, body').animate({
        scrollTop: $(this.hash).offset().top-30
      }, 800, function(){});
    }
  });
});
