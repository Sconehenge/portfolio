 $(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {

    event.preventDefault();

      $('html, body').animate({
        scrollTop: $(this.hash).offset().top-0
      }, 200, function(){});
    }
  });
});