<?php # Script 1
   $nombre = $_POST["nombre"];
   $nombreExplode = explode(" ", $nombre);
   $nombre = $nombreExplode[0];

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
  $text = $nombre." está en una relación con";
  $font_size = 14; // Font size is in pixels.
  $font_file = 'css/fonts/americanTypewriter/american-typewriter.ttf'; // This is the path to your font file.

  $text_colombia = " COLOMBIA.";
  $font_size_colombia = 17; // Font size is in pixels.
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
  $image_width = 660;
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
  $x = 90; // Padding of 5 pixels.
  $y = 110; // So that the text is vertically centered.

  $x_colombia = 410; // Padding of 5 pixels.

  $y_fecha = 140;
  $x_fecha = 265;

  // Add TrueType text to image:
  imagettftext($image, $font_size, 0, $x, $y, $text_color, $font_file, $text);
  imagettftext($image, $font_size_colombia, 0, $x_colombia, $y, $text_color_colombia, $font_file_colombia, $text_colombia);
  imagettftext($image, $font_size_fecha, 0, $x_fecha, $y_fecha, $text_color_fecha, $font_file_fecha, $text_fecha);

  // Generate and send image to browser:
  header('Content-type: image/png');
  imagepng($image,$nombre.'.png');

  // Destroy image in memory to free-up resources:
  imagedestroy($image);

  // Establecer los márgenes para la estampa y obtener el alto/ancho de la imagen de la estampa
  $margen_dcho = 10;
  $margen_inf = 10;
  $sx = imagesx($estampa);
  $sy = imagesy($estampa);
  $im = imagecreatefrompng($nombre.'.png');
  $estampa = imagecreatefrompng('images/heart_status.png');
  imagecopy($im, $estampa,315, 50, 0, 0, 30, 28);
  // Generate and send image to browser:
  header('Content-type: image/png');
  imagepng($im,$nombre.'.png');

  // Destroy image in memory to free-up resources:
  imagedestroy($image);
?>