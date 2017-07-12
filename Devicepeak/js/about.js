$(document).ready(function() {

    var constContact = $('.constant-contact');

    setTimeout(function () {
        constContact.animate({
            left: 10,
            bottom: 200,
            height: 'toggle'
        }, 2000);
    }, 2000);
});