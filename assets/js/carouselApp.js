$('#projectCarousel').carousel({
    interval: false
  })

 
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 2;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }


      for (var i=0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });



/*
  $(document).ready(function(){
    // Activate Carousel
    $('#projectCarousel').carousel();
      
    // Enable Carousel Indicators
    $(".item0").click(function(){
      $('#projectCarousel').carousel(0);
    });
    $(".item1").click(function(){
      $('#projectCarousel').carousel(1);
    });
    $(".item2").click(function(){
      $('#projectCarousel').carousel(2);
    });
    $(".item3").click(function(){
      $('#projectCarousel').carousel(3);
    });
    $(".item4").click(function(){
      $('#projectCarousel').carousel(4);
    });
      
      
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#projectCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#projectCarousel").carousel("next");
    });
  });
  */