$(document).ready(function() {
    $(".nav-link,.dropdown-item").click(function() {
        var t = $(this).attr("href");
        $('.active').removeClass('active');
        $("html, body").animate({
            scrollTop: $(t).offset().top - 50
        }, {
            duration: 1e3,
        });

        $('body').scrollspy({ target: '#navbar-example2',offset: $(t).offset().top });
        $(this).parent().addClass('active');





        return false;
    });

});



//navbar
var distance = $('#site-header').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $('#site-header').addClass('fixed-nav')
    }
    if ( $window.scrollTop() <= distance ) {
        $('#site-header').removeClass('fixed-nav')
    }
});


$('body').scrollspy({ target: '#navbar-example2',offset: 0 });