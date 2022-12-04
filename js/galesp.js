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




//Esto es para el modal de los items
$('.botonesi , .botonesx2') .on('click', function(){
    $('.datos') .slideToggle();    
})



//$('.minienlace').on('click', function(e){
//    
//    var imgs =e.target.src;
//    var modal = '<div class="modal1" id="modal1"><div class="contmi"> <p>Si alguna vez pensaste o te dijeron que Juliaca no es bella, estas imágenes te mostraran  todo lo contrario y te harán ver  el gran potencial y belleza que tiene Juliaca y sus distritos; sin embargo, también es inevitable decir que Juliaca luce mal gran parte del tiempo, debido al descuido de sus pobladores y autoridades, quienes no le dan el valor y cuidado que merece la ciudad que los cobija.</p></div> <div class="botonx" id="botonx"> X </div> </div>';     
//    $('body').append(modal); 
//    $('.modal1') .hide() .fadeIn(400);  //<----esto es solo visual//
//    $('#botonx').click(function(){
//        $('#modal1').remove();
//    });
//    
//    $('.modal1').click(function(ev){
//        $('.modal1').remove();
//        ev.stopPropagation();
//    });    
//    
//    
//});
