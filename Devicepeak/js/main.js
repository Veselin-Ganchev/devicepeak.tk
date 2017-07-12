jQuery(document).ready(function($) {
    //SLIDER
    $('.my-slider').unslider({
        autoplay: true,
        delay: 3800,
        speed: 1020,
        infinite: true,
        animateHeight: true
    });
    var slides = $('.slidesies'),
        i = 0;
    slides
        .on('swipeleft', function(e) {
            unslider.prev();
        })
        .on('swiperight', function(e) {
            unslider.next();
        });
    $('.banner').unslider({infinite: true});

    //DP POLL
    $('.poll-item').click(function () {
        var val =  $(this).find('input:radio').prop('')?false:true;
        $(this).find('input:radio').prop('checked', val);
    });

    //OS INFO TABS
    $( function() {
        $( "#tabs" ).tabs();
    } );

});


