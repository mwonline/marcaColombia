<?php
  $ancho=100;
  $alto=30;
  $imagen=imageCreate($ancho,$alto);
  $amarillo=ImageColorAllocate($imagen,255,255,0);
  ImageFill($imagen,0,0,$amarillo);
  $rojo=ImageColorAllocate($imagen,255,0,0);
  $valoraleatorio='texto';
  ImageString($imagen,5,25,5,$valoraleatorio,$rojo);

  Header ("Content-type: image/jpeg");
  ImageJPEG ($imagen);
  // imagepng($im,"yo.png"); 
  ImageDestroy($imagen);
?>