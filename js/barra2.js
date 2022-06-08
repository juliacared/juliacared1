$('.ul1 > li').on('click', function(){    
    $('.ul2') .slideToggle();
    $(this) .siblings() .find('.ul2') .hide();
})


$(".ul1 > li") .on('click', function(){
    $(this).toggleClass('liactivo')
    $(this).siblings().removeClass('liactivo')
});

$('nav > label') .on('click', function(){
    $('.ul1 > li') .removeClass('liactivo')
    $('.ul2').hide()
})
    

