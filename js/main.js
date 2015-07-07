

$(document).ready(function () {

    $(".intro").show();
    $(".name-step, .result, .questions,.main-header").hide();

    if ($('.intro').css("visibility") == "hidden")
    {
        alert('intro is hidden');
    }
    else
    {
       $("body").addClass('yellow');
       $(".url-co").addClass('co-icon-blue');
    }

     /*==========  nav top items  ==========*/

    //  $(".item-navtop").on ('mouseenter', function () {
    //    $(this).children('span').css('display', 'inherit');
    //    $(this).children('.thumb_slider').css('display', 'inherit');
    // });

    //  $(".item-navtop").on( 'mouseleave', function () {
    //       $(this).children('span').css('display', 'none');
    //       $(this).children('.thumb_slider').css('display', 'none');
    // });


    $(".next-btn-arrow").click(function(event){
      event.preventDefault();
      $(".intro").fadeOut(300);
      $(".slidernav-top").hide();
      $(".main-header, .name-step").delay(400).fadeIn(1000);
      $("body").removeClass('yellow').addClass('blue');
      $(".url-co").removeClass('co-icon-blue').addClass('co-icon-yellow');
    })

    $("#next-name").click(function(event){
      event.preventDefault();
      $(".name-step").fadeOut(100);
      $(".name-step").removeClass('on');
      $(".questions, .slidernav-top").show();
      $(".first-q").addClass('on');
      $(".first-q").fadeIn(1000);
      $(".url-co").removeClass('co-icon-yellow').addClass('co-icon-blue');
      $("body").css('background-color','#CE2432');
      $(".slidernav-top ol").addClass('bg-red');
      $(".oneli").addClass('actived');

      if ($(".item-navtop").hasClass("actived")) {
        $(".item-navtop.actived").children('span').css('display', 'inherit');
        $(".item-navtop.actived").children('.thumb_slider').css('display', 'inherit');
      }

    })

    $("#next-01").click(function(event){
      event.preventDefault();
      $(".first-q").fadeOut(100);
      $(".first-q").removeClass('on');
      $(".second-q").addClass('on');
      $(".second-q").fadeIn(1000);
      $(".url-co").removeClass('co-icon-yellow').addClass('co-icon-blue');
      $("body").css('background-color','#F2C245');
      $(".slidernav-top ol").removeClass('bg-red').addClass('bg-yellow');
      $(".oneli").removeClass('actived');
      $(".oneli .thumb_slider, .oneli span").hide();
      $(".twoli").addClass('actived');

      if ($(".item-navtop").hasClass("actived")) {
        $(".item-navtop.actived").children('span').css('display', 'inherit');
        $(".item-navtop.actived").children('.thumb_slider').css('display', 'inherit');
      }

    })


    $("#next-02").click(function(event){
      event.preventDefault();
      $(".second-q").fadeOut(100);
      $(".second-q").removeClass('on');
      $(".tirth-q").addClass('on');
      $(".tirth-q").fadeIn(1000);
      $(".url-co").removeClass('co-icon-blue').addClass('co-icon-red');
      $("body").css('background-color','#234789');

      $(".slidernav-top ol").removeClass('bg-yellow').addClass('bg-blue');
      $(".twoli").removeClass('actived');
      $(".twoli .thumb_slider, .twoli span").hide();
      $(".threeli").addClass('actived');

      if ($(".item-navtop").hasClass("actived")) {
        $(".item-navtop.actived").children('span').css('display', 'inherit');
        $(".item-navtop.actived").children('.thumb_slider').css('display', 'inherit');
      }

    })

    $("#next-03").click(function(event){
      event.preventDefault();
      $(".tirth-q").fadeOut(100);
      $(".tirth-q").removeClass('on');
      $(".fourth-q").addClass('on');
      $(".fourth-q").fadeIn(1000);
      $(".url-co").removeClass('co-icon-red').addClass('co-icon-yellow');
      $("body").css('background-color','#CE2432');

      $(".slidernav-top ol").removeClass('bg-blue').addClass('bg-red');
      $(".threeli").removeClass('actived');
      $(".threeli .thumb_slider, .threeli span").hide();
      $(".fourli").addClass('actived');

      if ($(".item-navtop").hasClass("actived")) {
        $(".item-navtop.actived").children('span').css('display', 'inherit');
        $(".item-navtop.actived").children('.thumb_slider').css('display', 'inherit');
      }

    })

    $("#next-04").click(function(event){
      event.preventDefault();
      $(".fourth-q").fadeOut(100);
      $(".fourth-q").removeClass('on');
      $(".fifth-q").addClass('on');
      $(".fifth-q").fadeIn(1000);
      $(".url-co").removeClass('co-icon-yellow').addClass('co-icon-blue');
      $("body").css('background-color','#F2C245');

      $(".slidernav-top ol").removeClass('bg-red').addClass('bg-yellow');
      $(".fourli").removeClass('actived');
      $(".fourli .thumb_slider, .fourli span").hide();
      $(".fiveli").addClass('actived');

      if ($(".item-navtop").hasClass("actived")) {
        $(".item-navtop.actived").children('span').css('display', 'inherit');
        $(".item-navtop.actived").children('.thumb_slider').css('display', 'inherit');
      }

    })

    $("#next-05").click(function(event){
      event.preventDefault();
      $(".fifth-q").fadeOut(100);
      $(".fifth-q").removeClass('on');
      $(".sixth-q").addClass('on');
      $(".sixth-q").fadeIn(1000);
      $(".url-co").removeClass('co-icon-blue').addClass('co-icon-red');
      $("body").css('background-color','#234789');

      $(".slidernav-top ol").removeClass('bg-yellow').addClass('bg-blue');
      $(".fiveli").removeClass('actived');
      $(".fiveli .thumb_slider, .fiveli span").hide();
      $(".sixli").addClass('actived');

      if ($(".item-navtop").hasClass("actived")) {
        $(".item-navtop.actived").children('span').css('display', 'inherit');
        $(".item-navtop.actived").children('.thumb_slider').css('display', 'inherit');
      }
    })

    $("#next-result").click(function(event){
      event.preventDefault();
      $(".sixth-q").fadeOut(100);
      $(".sixth-q").removeClass('on');
      $(".result").fadeIn(1000);
      $(".slidernav-top").hide();
      $("body").css('background-color','#F2C245');
      $(".arrow_right").hide();
    })


    if($(".first-q").hasClass("on")){
      $("body").css('background-color','#CE2432');
    }else{
      $(".first-q").hide();
    }

    if($(".second-q").hasClass("on")){
      $("body").css('background-color','#F2C245');
    }else{
      $(".second-q").hide();
    }

    if($(".tirth-q").hasClass("on")){
      $("body").css('background-color','#234789');
    }else{
      $(".tirth-q").hide();
    }

    if($(".fourth-q").hasClass("on")){
      $("body").css('background-color','#CE2432');
    }else{
      $(".fourth-q").hide();
    }


    if($(".fifth-q").hasClass("on")){
      $("body").css('background-color','#F2C245');
    }else{
      $(".fifth-q").hide();
    }

    if($(".sixth-q").hasClass("on")){
      $("body").css('background-color','#234789');
    }else{
      $(".sixth-q").hide();
    }

});

