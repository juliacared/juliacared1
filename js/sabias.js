$('.contenido').on('click','h1',function() {
	var t = $(this);
	var tp = t.next();
	var p = t.parent().siblings().find('.articulo');
	tp.slideToggle();
	p.slideUp();
    });

$('.contenido').on('click','h1',function() {
	var t = $(this);
	var tp = t.find('.flechita5, .marcador');
	var p = t.parent().siblings().find('.flechita5, .marcador');
	tp.slideToggle();
	p.slideUp();
    });

//$('.contenido').on('click','h1',function() {
//	var t = $(this);
//	var tp = t.find('.after');
//	var p = t.parent().siblings().find('.after');
//	tp.slideToggle();
//	p.slideUp();
//    });

//$('.tit1') .on('click', function(){
//   $('.flechita5').slideToggle('fast');
//   $('.flechita6').slideUp('.flechita6');
//       
//          
//});
//
//$('.tit2') .on('click', function(){
//   $('.flechita6').slideToggle('fast');
//    $('.flechita5').slideUp('.flechita5');
//});

