$('.items').on('click', function(e){
    
    var imgs =e.target.src;
    var modal = '<div class="modal" id="modal"><div class="contmi"> <img class="modalimg" src="'+ imgs +'" alt=""></div> <div class="botonx" id="botonx"> X </div> </div>';     
    $('body').append(modal); 
    $('.modal') .hide() .fadeIn(400);  //<----esto es solo visual//
    $('#botonx').click(function(){
        $('#modal').remove();
    });
    
    $('.modal').click(function(ev){
        $('.modal').remove();
        ev.stopPropagation();
    });    
    
    
});

$(document).keyup(function(e){
    if (e.which==27) {
        $('#modal').remove();
    }
});

//<div class="modal" id="modal"> <img class="modalimg" src="'+ imgs +'" alt=""> <div class="botonx" id="botonx"> X </div> </div>
//.target.src

//solo para el juego.

//$("#nivel").on('click', function(){
//    $(".flotante1").slideToggle();
//});
//
//$("#info").on('click', function(){
//    $(".flotante2").slideToggle();
//});