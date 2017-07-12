jQuery(document).ready(function($) {

    $(function () {
        var commercial = $('#commercial');
        var commersBgr = [
            'url(images/commercial.jpg) no-repeat',
            'url(images/commercial_2.jpg) no-repeat'];
        var currBgr = 0;

        function nextBgr() {
            commercial.css({
                'background': commersBgr[currBgr = ++currBgr % commersBgr.length],
                'background-size': 'cover'});
            setTimeout(nextBgr, 3000);
        }
        setTimeout(nextBgr, 3000);
        commercial.css('background', commersBgr[0]);
    });

    $('#gallery-trigger').click(function () {
       $('.gallery').toggle(1000, function () {
           if($('#gallery-trigger').text() == 'View gallery'){
               $('#gallery-trigger').text('Hide galley');
           }else {
               $('#gallery-trigger').text('View gallery');
           }
       });
   });
});











