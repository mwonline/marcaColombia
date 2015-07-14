$(document).ready(function () {

  var inputName = '';
  var path_name = '';

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

    //  $(".item-navtop").no( 'mouseleave', function () {
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
      $(".arrow_right").addClass('hide_arrow');
      $('.next-name').parent().removeClass('hide_arrow');
    })

    $(".next-name").click(function(event){
      inputName = $("#name").val();
      var splitName = inputName.split(' ');
      path_name = splitName[0];
      path_name = path_name.toLowerCase();
      randomString();

      $.ajax({
        method: "POST",
        data: { nombre: inputName },
        url: "createImg.php",
      }).done(function() {
        console.log('creando Imagen');
      });

      $(".name").text(inputName);
      if (inputName == '' || inputName == null) {
        console.log('Ingrese su nombre !!');
        $("#name").attr("placeholder", "Ingresa tu nombre");
        $("#name").addClass("error");
        return false;
      }
      else{
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
        $('.next-name').parent().addClass('hide_arrow');
        $('.next-01').parent().removeClass('hide_arrow');
      }
    })

    $(".next-01").click(function(event){
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
      $('.next-01').parent().addClass('hide_arrow');
      $('.next-02').parent().removeClass('hide_arrow');
    })


    $(".next-02").click(function(event){
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
      $('.next-02').parent().addClass('hide_arrow');
      $('.next-03').parent().removeClass('hide_arrow');
    })

    $(".next-03").click(function(event){
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
      $('.next-03').parent().addClass('hide_arrow');
      $('.next-04').parent().removeClass('hide_arrow');
    })

    $(".next-04").click(function(event){
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
      $('.next-04').parent().addClass('hide_arrow');
      $('.next-05').parent().removeClass('hide_arrow');
    })

    $(".next-05").click(function(event){
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
      $('.next-05').parent().addClass('hide_arrow');
      $('.next-result').parent().removeClass('hide_arrow');
    })

    $(".next-result").click(function(event){
      event.preventDefault();
      $(".sixth-q").fadeOut(100);
      $(".sixth-q").removeClass('on');
      $(".result").fadeIn(1000);
      $(".slidernav-top").hide();
      $("body").css('background-color','#F2C245');
      $(".arrow_right, .arrow_right_last").hide();
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

    $("#compartir_fb").click(function(){

      $.ajax({
        method: "POST",
        data: { nombre: inputName },
        url: "createImg.php",
      }).done(function() {
          var width  = 575,
                 height = 400,
                 left   = ($(window).width()  - width)  / 2,
                 top    = ($(window).height() - height) / 2,
                 url = 'https://www.facebook.com/sharer/sharer.php?u=http://mwonline.com.co/marcaColombia/'+path_name+'.png&t=TEstTitulo',
                 opts   = ',width='  + width  +
                          ',height=' + height +
                          ',top='    + top    +
                          ',left='   + left;
             
             window.open(url, 'facebook', opts);
          
             return false;

      });

    });


    $("#compartir_tw").click(function(){

      $.ajax({
        method: "POST",
        data: { nombre: inputName },
        url: "createImg.php",
      }).done(function() {
          // $(location).attr('href','');
          // window.open('https://twitter.com/?status= &#35;nunarelacionconCOlombia http://mwonline.com.co/marcaColombia/'+path_name+'.png');
          var width  = 575,
                 height = 400,
                 left   = ($(window).width()  - width)  / 2,
                 top    = ($(window).height() - height) / 2,
                 url    = 'https://twitter.com/?status=%23enunarelacionconCOlombia http://mwonline.com.co/marcaColombia/'+path_name+'.png',
                 opts   = ',width='  + width  +
                          ',height=' + height +
                          ',top='    + top    +
                          ',left='   + left;
             
             window.open(url, 'twitter', opts);
          
             return false;

      });

    });

    
});

function randomString(){
  var b = 1;
  var a = 3;
  var aleatorio = Math.round(Math.random()*(b-a)+parseInt(a));
  console.log(aleatorio);
  if (aleatorio == 1) {
    $(".msg-final").text('¡Son el complemento perfecto!');
    $(".msg-second").text('Sigue alimentando ese amor todos los días. ');
  }
  if (aleatorio == 2) {
    $(".msg-final").text('¡Son la combinación ideal!');
    $(".msg-second").text('Tú y Colombia hacen un gran equipo juntos');
  }
  if (aleatorio == 3) {
    $(".msg-final").text('¡Son el uno para el otro!');
    $(".msg-second").text('Tú y COLOMBIA van juntos por buenas cosas.');
  }
}