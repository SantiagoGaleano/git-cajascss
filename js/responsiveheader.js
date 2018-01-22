var icono = $('#menu-res')
var navbar = $('#navbar')

var width = $(window).width()

if(width < 800){
    navbar.hide()
}

icono.on('click', function(e){
    
    navbar.fadeToggle()
    icono.toggleClass('fa-bars')
    icono.toggleClass('fa-times')
})

$(window).on('resize', function(){
    if($(this).width() > 800){
        navbar.show();
        icono.addClass('fa-times');
        icono.removeClass('fa-bars')
    }

    if($(this).width() < 800){
        navbar.hide();
        icono.addClass('fa-bars')
        icono.removeClass('fa-times')
    }

})