'use srtict';

$(document).ready(function(){
    $('#toggle').click(function(e){
       e.stopImmediatePropagation();
        $('#main-nav').animate({
            'left' : '0'
        }, 1000);
    });
    
    $('body').click(function() {
        $('#main-nav').animate({
            'left' : '-300px'
        }, 1000);
    });
    
    $('#main-nav').click(function(e){
        e.stopImmediatePropagation();
    });
})