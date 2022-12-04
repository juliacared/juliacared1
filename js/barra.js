
$('.ul1 > li').on('click', function(){    
    $('.ul2') .slideToggle();
    $(this) .siblings() .find('.ul2') .hide();
})


$(".ul1 > li") .on('click', function(){
    $(this).toggleClass('liactivo')
    $(this).siblings().removeClass('liactivo')
});


//$('.li_a1:eq(1)') .on('click', function(){
//    $('.ul_a2:eq(0)') .slideToggle()
//    $('.ul_a2:eq(1)') .slideUp()
//})
//$('.li_a1:eq(2)') .on('click', function(){
//    $('.ul_a2:eq(1)') .slideToggle()
//    $('.ul_a2:eq(0)') .slideUp()
//})


