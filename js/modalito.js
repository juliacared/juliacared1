//Esto es para el modal del h1
$('.minienlace1') .on('click', function(){
    $('.modal1') .fadeIn()
})

$('.minienlace2') .on('click', function(){
    $('.modal2') .fadeIn()
})

//$('.x') .on('click', function(){
//    $('.modal1, .modal2') .fadeOut()
//})

$('.modal1, .modal2').click(function(ev){
        $('.modal1, .modal2').fadeOut();
        ev.stopPropagation();
});

