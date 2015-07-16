


// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '866748646748336',
//     xfbml      : true,
//     version    : 'v2.4'
//   });
//   };

//   (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

$(document).ready(function () {

  // alert(screen.width);

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

    $(document).keypress(function(e) {
        if(e.which == 13) {
            inputName = remplace_caracteres($("#name").val().toLowerCase());

            var splitName = inputName.split(' ');
            path_name = splitName[0];
            path_name = path_name.toLowerCase();
            inputName = path_name.charAt(0).toUpperCase() + path_name.slice(1);

            randomString();

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
        }
    });

    $(".next-name").click(function(event){
      inputName = remplace_caracteres($("#name").val().toLowerCase());

      var splitName = inputName.split(' ');
      path_name = splitName[0];
      path_name = path_name.toLowerCase();
      inputName = path_name.charAt(0).toUpperCase() + path_name.slice(1);

      randomString();

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

      $("#compartir_tw").attr('href','');

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

      $('#compartir_tw').attr('href','https://twitter.com/?status=Yo estoy %23enunarelacionconCOlombia http://mwonline.com.co/marcaColombia/'+path_name+'.png Descubre si tu también estás en una relación con COlombia:http://20dejulio.colombia.co');

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


    $('#compartir_fb').on('click',function(){

      $.ajax({
        method: "POST",
        data: { nombre: inputName },
        url: "createImg.php",
      });

      FB.ui({
        method: 'share',
        href: '20dejulio.colombia.co/',
        // href: 'https://developers.facebook.com/docs/',
        picture: '20dejulio.colombia.co/images_fb/'+path_name+'.png',
        name: 'prueba de name',
        caption:'prueba de caption',
        description:'prueba de description',
        title: 'prueba de titulo',
      }, function(response){});
      return false;

    });


     $('#compartir_tw').on('click',function(){
      $.ajax({
        method: "POST",
        data: { nombre: inputName },
        url: "createImg.php",
      });
      // twttr.widgets.load();
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

myFunction();
function myFunction() {
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Augosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";

    var date = new Date();
    var mes = month[date.getMonth()];
    var dia = date.getDate();
    var year = date.getFullYear();
    var fecha = dia + ' de ' + mes + ' de ' + year;
    $('.date-txt').text(fecha);
}

function remplace_caracteres(nombre)
{
  nombre=nombre.replace('Á','A');
  nombre=nombre.replace('á','a');
  nombre=nombre.replace('à','a');
  nombre=nombre.replace('É','E');
  nombre=nombre.replace('é','e');
  nombre=nombre.replace('è','e');
  nombre=nombre.replace('Í','I');
  nombre=nombre.replace('í','i');
  nombre=nombre.replace('ì','i');
  nombre=nombre.replace('Ó','O');
  nombre=nombre.replace('ó','o');
  nombre=nombre.replace('ò','o');
  nombre=nombre.replace('Ú','U');
  nombre=nombre.replace('ú','u');
  nombre=nombre.replace('ù','u');
  nombre=nombre.replace('Ñ','N');
  nombre=nombre.replace('ñ','n');
  nombre=nombre.replace('Ä','A');
  nombre=nombre.replace('ä','a');
  nombre=nombre.replace('Ë','E');
  nombre=nombre.replace('ë','e');
  nombre=nombre.replace('Ï','I');
  nombre=nombre.replace('ï','i');
  nombre=nombre.replace('Ö','O');
  nombre=nombre.replace('ö','o');
  nombre=nombre.replace('Ü','U'); 
  nombre=nombre.replace('ü','u'); 
  return nombre;
}