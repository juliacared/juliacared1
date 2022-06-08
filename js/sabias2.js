//deslizables
$('.respaldo').on('click','.tit2',function() {
	var t = $(this);
	var tp = t.next();	
    var p = t.parent().siblings().find('.articulo');
	tp.slideToggle();
	p.slideUp();
    });

$('.respaldo').on('click','.tit2',function() {
	var t = $(this);
	var tp = t.find('.flechita5, .marcador');
	var p = t.parent().siblings().find('.flechita5, .marcador');
	tp.slideToggle();
	p.slideUp();
    });

$('.respaldo').on('click','.tit2',function() {
	var t = $(this);
	var tp = t.find('span, img');
	var p = t.parent().siblings().find('span, img');
	tp.toggleClass('voltear');
	p.removeClass('voltear');
    });


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

$('.x') .on('click', function(){
    $('.modal1, .modal2') .fadeOut()
})

$('.modal1, .modal2').click(function(ev){
        $('.modal1, .modal2').fadeOut();
        ev.stopPropagation();
});



//https://programacion.net/articulo/como_controlar_el_reproductor_de_youtube_con_javascript_1285