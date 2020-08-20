$ = jQuery;
$(document).ready (function () {
    "use strict";

    var trxDemowrap = $('.trx_addons_demo_options_wrapper');

    // Open/Close Demo Panel
    $('#toggle_quick_options').on( 'click' , function(e) {
        trxDemowrap.toggleClass('open');
        return false;
    });

    $(document).on( 'keyup', function(e) {
        if ( e.keyCode == 27 && trxDemowrap.hasClass('open') )
            trxDemowrap.toggleClass('open');
    });
    
    $(document).click(function(e){
        if ( $(e.target).closest('#trx_addons_demo_panel').length == 0 && trxDemowrap.hasClass('open') )
            trxDemowrap.removeClass('open');
    });

    // Open/Close Demo Options Toolbar on Mobile
    $('#mobile_button').on('click', function(e) {
        $( '.trx_addons_demo_options_toolbar' ).toggleClass('open');
        if( trxDemowrap.hasClass('open') )
            trxDemowrap.removeClass('open');
    });
});

