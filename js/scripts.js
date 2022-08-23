// Nav
document.addEventListener("DOMContentLoaded", ()=> { 
    if ($(window).width() > 991){
        $('.navbar-light .d-menu').hover(()=> {
                $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
            }, function () {
                $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
            });
    }
});