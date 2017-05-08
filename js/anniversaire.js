var $C1, $C2, $C3, $C4, $C5, $Liste;
var $Lg1, $Lg2, Lg3;
var $T1, $T2, $T3, $T4;
var $P1, $P2, $P3;
var $Audio;

$T1 = "Your're a great friend.";
$T2 = "Today your's birthday!";
$T3 = "Wishing you all the best.";
$T4 = "Happy birthday!!!";

$Liste = $('#liste');

$Audiomp3 = new Audio("./sound/Kevin_Lax_-_Happy_Birthday.mp3");

$C1 = $('#c1');
$C2 = $('#c2');
$C3 = $('#c3');
$C4 = $('#c4');
$C5 = $('#c5');

$C1.hide(1);
$C2.hide(1);
$C3.hide(1);
$C4.hide(1);
$C5.hide(1);

$C1.show(1);
$C1.css('visibility' , 'visible');

$C1.on('click', function(event) {
  $Liste.append('<li class="lig">' + $T1 +   '</li>');
   $Lg1 = $('li');
    $Lg1.css('background-color','green'); 
    $Lg1.css('color','white'); 
    
    $C1.hide(100);
    
    $C2.css('visibility' , 'visible');
    
    $C2.fadeIn(3000);
});


$C2.on('click', function(event) {
  $Liste.append('<li class="lig">' + $T2 +   '</li>');
    $Lg2 = $('li:eq(1)');
    $Lg2.css('background-color','yellow'); 
    $Lg2.css('color','black'); 
    
    $C2.hide(100);
    $C3.css('visibility' , 'visible');
    $C3.show(3000);
});

$C3.on('click', function(event) {
  $Liste.append('<li class="lig">' + $T3 +   '</li>');
    $Lg3 = $('li:eq(2)');
    $Lg3.css('background-color','pink'); 
    $Lg3.css('color','white'); 
    
    $C3.hide(300);
    $C4.css('visibility' , 'visible');
     $C4.show(4000);
});

$C4.on('click', function(event) {
  $('#ma_carte').css('background', 'url(./image/happy_B.jpg) 100%');
    $('#debut').css('color', 'red');
    $Audiomp3.play();
    $Lg1.text($T4); 
    $Lg2.text($T4);  
    $Lg3.text($T4); ; 
    
    $C4.hide(100);    
    $C5.css('visibility' , 'visible');
    $C5.show(20000);
});

$C5.on('click', function(event) {
  $('#ma_carte').css('background', '#85cff7');
    $('#debut').css('color', 'black');
    $Lg1.remove();
    $Lg2.remove();
    $Lg3.remove();
    
    
    $C1.show();    
    
    $C5.hide(100);
});
