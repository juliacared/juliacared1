var buscador = $("#table").DataTable();

$("#input-search").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#input-search").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
});



//aumentado por mi

$(document).keyup(function(e){
    if (e.which==27) {
        $('.content-search').fadeOut(300);
        $('#input-search').val('');
    }
});

$('.xbuscador') .on('click',function() {
    $('.content-search').fadeOut(300);
    $('#input-search').val('');    
})