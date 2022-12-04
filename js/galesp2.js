//Esto es para el modal de las fotos
$('.items') .on('click', function(){    
    $(this) .parent() .find('.modal').fadeIn() 
    $(this) .parent() .siblings() .find('.modal') .hide();
})

//boton cerrar fotos
$('.botonesx').on('click', function(){
    $('.modal') .fadeOut()
    $('.datos') .slideUp()
})
//boton derecho
$('.contbotones').on('click', '.botonesr', function(){
    var derecha = $(this) .parent() .parent() .parent() .fadeOut() .parent() .next() .find('.modal') .fadeIn();
    
    derecha;
    
    $('.datos') .slideUp();
})
//boton izquierdo
$('.contbotones').on('click', '.botonesl', function(){
    var izquierda = $(this) .parent() .parent() .parent() .fadeOut() .parent() .prev() .find('.modal') .fadeIn();
    
    izquierda;
    
    $('.datos') .slideUp();
})

//boton informacon cada foto (esto puse primero)
//$('.botonesi , .botonesx2') .on('click', function(){
//    $('.datos') .slideToggle();    
//})


//boton informacion cada foto (esto puse junto con .datos slideup)
$('.botonesi') .on('click', function(){
    $(this) .parent() .siblings() .find('.datos') .slideToggle()
})

$('.botonesx2') .on('click',function(){
    $('.datos') .slideUp()
})




//Esto es para el modal del h1
$('.minienlace1') .on('click', function(){
    $('.modal1') .fadeIn()
})

$('.minienlace2') .on('click', function(){
    $('.modal2') .fadeIn()
})

$('.botonesx1') .on('click', function(){
    $('.modal1, .modal2') .fadeOut()
})

$('.modal1, .modal2').click(function(ev){
        $('.modal1, .modal2').fadeOut();
        ev.stopPropagation();
});