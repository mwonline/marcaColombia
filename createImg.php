<?php # Script 1
   $nombre = $_POST["nombre"];
   $nombreExplode = explode(" ", $nombre);
   $nombre_imagen = strtolower($nombreExplode[0]);
   $nombre = ucfirst (strtolower($nombreExplode[0]));
   // $nombre = strtolower($nombreExplode[0]);

   $fecha = date("d/m/Y");
   $fechaExplode = explode('/', $fecha);

   switch ($fechaExplode[1]) {
    case 01: $mes = 'Enero'; break;
    case 02: $mes = 'Febrero'; break;
    case 03: $mes = 'Marzo'; break;
    case 04: $mes = 'Abril'; break;
    case 05: $mes = 'Mayo'; break;
    case 06: $mes = 'Junio'; break;
    case 07: $mes = 'Julio'; break;
    case 08: $mes = 'Agosto'; break;
    case 09: $mes = 'Septiembre'; break;
    case 10: $mes = 'Octubre'; break;
    case 11: $mes = 'Noviembre'; break;
    case 12: $mes = 'Diciembre'; break;
   }

  // Establish image factors:

  // $text = $nombre." está en una relación con";
  // $text = " está en una relación con";
  $text = $nombre." está en una relación con";
  $font_size = 12; // Font size is in pixels.
  $font_file = 'css/fonts/americanTypewriter/american-typewriter.ttf'; // This is the path to your font file.

  $text_colombia = " COLOMBIA.";
  $font_size_colombia = 15; // Font size is in pixels.
  $font_file_colombia = 'css/fonts/futuraBold/futurab.ttf'; // This is the path to your font file.

  $text_fecha = $fechaExplode[0].' de '.$mes.' de '.$fechaExplode[2];
  $font_size_fecha = 10; // Font size is in pixels.
  $font_file_fecha = 'css/fonts/arial/arial.ttf'; // This is the path to your font file.

  // Retrieve bounding box:
  $type_space = imagettfbbox($font_size, 0, $font_file, $text);
  $type_space = imagettfbbox($font_size_colombia, 0, $font_file_colombia, $text_colombia);
  $type_space = imagettfbbox($font_size_fecha, 0, $font_file_fecha, $text_fecha);

  // Determine image width and height, 10 pixels are added for 5 pixels padding:
  // $image_width = abs($type_space[4] - $type_space[0]) + 10;
  $image_width = 800;
  $image_height = 240;

  // Create image:
  $image = imagecreatetruecolor($image_width, $image_height);

  // Allocate text and background colors (RGB format):
  $text_color = imagecolorallocate($image, 0, 0, 0);
  $text_color_colombia = imagecolorallocate($image, 6, 85, 163);
  $text_color_fecha = imagecolorallocate($image, 129, 129, 129);
  $bg_color = imagecolorallocate($image, 255, 255, 255);

  // Fill image:
  imagefill($image, 0, 0, $bg_color);

  // Fix starting x and y coordinates for the text:
  // $length_name = strlen($nombre);
  $pixels_vocals = 0;
  for($i=0;$i<strlen($nombre);$i++){ 
      echo $nombre[$i]; 

      switch ($nombre[$i]) {
        // MYUSCULAS
        case 'A': $pixels_vocals = $pixels_vocals + 11; break;
        case 'B': $pixels_vocals = $pixels_vocals + 12; break;
        case 'C': $pixels_vocals = $pixels_vocals + 8; break;
        case 'D': $pixels_vocals = $pixels_vocals + 11; break;
        case 'E': $pixels_vocals = $pixels_vocals + 9; break;
        case 'F': $pixels_vocals = $pixels_vocals + 7; break;
        case 'G': $pixels_vocals = $pixels_vocals + 10; break;
        case 'H': $pixels_vocals = $pixels_vocals + 12; break;
        case 'I': $pixels_vocals = $pixels_vocals + 7; break;
        case 'J': $pixels_vocals = $pixels_vocals + 5; break;
        case 'K': $pixels_vocals = $pixels_vocals + 12; break;
        case 'L': $pixels_vocals = $pixels_vocals + 8; break;
        case 'M': $pixels_vocals = $pixels_vocals + 18; break;
        case 'N': $pixels_vocals = $pixels_vocals + 12; break;
        case 'O': $pixels_vocals = $pixels_vocals + 10; break;
        case 'P': $pixels_vocals = $pixels_vocals + 14; break;
        case 'Q': $pixels_vocals = $pixels_vocals + 13; break;
        case 'R': $pixels_vocals = $pixels_vocals + 12; break;
        case 'S': $pixels_vocals = $pixels_vocals + 11; break;
        case 'T': $pixels_vocals = $pixels_vocals + 10; break;
        case 'U': $pixels_vocals = $pixels_vocals + 12; break;
        case 'V': $pixels_vocals = $pixels_vocals + 11; break;
        case 'W': $pixels_vocals = $pixels_vocals + 15; break;
        case 'X': $pixels_vocals = $pixels_vocals + 12; break;
        case 'Y': $pixels_vocals = $pixels_vocals + 11; break;
        case 'Z': $pixels_vocals = $pixels_vocals + 10; break;
        // minusculas
        case 'a': $pixels_vocals = $pixels_vocals + 10; break;
        case 'b': $pixels_vocals = $pixels_vocals + 11; break;
        case 'c': $pixels_vocals = $pixels_vocals + 19; break;
        case 'd': $pixels_vocals = $pixels_vocals + 10; break;
        case 'e': $pixels_vocals = $pixels_vocals + 8; break;
        case 'f': $pixels_vocals = $pixels_vocals + 6; break;
        case 'g': $pixels_vocals = $pixels_vocals + 11; break;
        case 'h': $pixels_vocals = $pixels_vocals + 11; break;
        case 'i': $pixels_vocals = $pixels_vocals + 6; break;
        case 'j': $pixels_vocals = $pixels_vocals + 4; break;
        case 'k': $pixels_vocals = $pixels_vocals + 11; break;
        case 'l': $pixels_vocals = $pixels_vocals + 5; break;
        case 'm': $pixels_vocals = $pixels_vocals + 16; break;
        case 'n': $pixels_vocals = $pixels_vocals + 10; break;
        case 'o': $pixels_vocals = $pixels_vocals + 9; break;
        case 'p': $pixels_vocals = $pixels_vocals + 13; break;
        case 'q': $pixels_vocals = $pixels_vocals + 12; break;
        case 'r': $pixels_vocals = $pixels_vocals + 11; break;
        case 's': $pixels_vocals = $pixels_vocals + 8; break;
        case 't': $pixels_vocals = $pixels_vocals + 7; break;
        case 'u': $pixels_vocals = $pixels_vocals + 11; break;
        case 'v': $pixels_vocals = $pixels_vocals + 10; break;
        case 'w': $pixels_vocals = $pixels_vocals + 14; break;
        case 'x': $pixels_vocals = $pixels_vocals + 11; break;
        case 'y': $pixels_vocals = $pixels_vocals + 10; break;
        case 'z': $pixels_vocals = $pixels_vocals + 9; break;
      }
  } 

  $pixels_plus = $pixels_vocals / 2;

  $x = 237 - $pixels_plus; // Padding of 5 pixels.
  $y = 110; // So that the text is vertically centered.|

  $x_colombia = 438 + $pixels_plus; // Padding of 5 pixels.

  $y_fecha = 140;
  $x_fecha = 335;

  // Add TrueType text to image:
  imagettftext($image, $font_size, 0, $x, $y, $text_color, $font_file, $text);
  imagettftext($image, $font_size_colombia, 0, $x_colombia, $y, $text_color_colombia, $font_file_colombia, $text_colombia);
  imagettftext($image, $font_size_fecha, 0, $x_fecha, $y_fecha, $text_color_fecha, $font_file_fecha, $text_fecha);

  // Generate and send image to browser:
  header('Content-type: image/png');
  imagepng($image,'images_fb/'.$nombre_imagen.'.png');

  // Destroy image in memory to free-up resources:
  // imagedestroy($image);

  // Establecer los márgenes para la estampa y obtener el alto/ancho de la imagen de la estampa
  $margen_dcho = 10;
  $margen_inf = 10;
  // $sx = imagesx($estampa);
  // $sy = imagesy($estampa);
  $im = imagecreatefrompng('images_fb/'.$nombre_imagen.'.png');
  $estampa = imagecreatefrompng('images/heart_status.png');
  imagecopy($im, $estampa,385, 50, 0, 0, 30, 28);
  // Generate and send image to browser:
  header('Content-type: image/png');
  imagepng($im,'images_fb/'.$nombre_imagen.'.png');
  // imagepng($im);

  // Destroy image in memory to free-up resources:
  // imagedestroy($image);

?>