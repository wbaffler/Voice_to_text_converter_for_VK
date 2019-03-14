 <?php
function add($ogg_link){
 $filename = 'link.txt';
 file_put_contents($filename , $_POST);
 $filename_2 = 'mes.txt';
 //while (file_get_contents($filename_2 , $_POST) == false) {
 //}
 $text = file_get_contents($filename_2);
 //unlink($filename_2);
 echo $text;
 //return $text;
}
 ?>
