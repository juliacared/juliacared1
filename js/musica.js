///* botones de generos musicales */
//$(".ul3 a") .on('click', function(){
//    $(this).addClass('marcador')
//    $(this).siblings().removeClass('marcador')
//});
///* botones de generos musicales */

/* botones de generos musicales */
$(".li3") .on('click', function(){   
    var marc = '<div class="marcadorm"></>';
    $(this).append(marc);    
    $(this).parent().siblings().find('.marcadorm').remove('.marcadorm');    
});



$(".li3") .on('click', function(){   
   $(this) .addClass('li3-activo');
   $(this) .parent().siblings().find('.li3').removeClass('li3-activo');
   
});

//$(".li3") .on('click', function(){   
//    $(this) .addClass('flechita6');
//    $(this) .parent().siblings().find('li').removeClass('flechita6');
//});

$('.li3') .on('click', function(){
    $('#menumusica') .trigger('click')
})



/* botones de generos musicales */
