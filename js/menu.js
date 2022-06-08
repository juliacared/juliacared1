//$('.ul1 > li').on('click', function(){    
//    $('.ul2') .slideToggle();
//    $(this) .siblings() .find('.ul2') .hide();
//})
//
//$(".ul1 > li") .on('click', function(){
//    $(this).toggleClass('liactivo')
//    $(this).siblings().removeClass('liactivo')
//});
//
//
//$('nav > label, header, .envase') .on('click', function(){
//    $('.ul1 > li') .removeClass('liactivo')
//    $('.ul2').slideUp()
//})

$('[class^="li1"]').on('click',function() {
	var t = $(this) .toggleClass('liactivo');
	var tp = t.find('.ul2');
	var p = t.siblings().find('.ul2');
    t.siblings().removeClass('liactivo');
	tp.slideToggle();
	p.hide();
});

$('nav > label, header, .envase') .on('click', function(){
    $('.ul1 > li') .removeClass('liactivo')
    $('.ul2').slideUp()    
})


    

