
$(document).ready(function () { // .ready() After loading page 
    'use strict';
    $(window).scroll(function () { // .scroll() While scrolling
        'use strict';
        if ($(window).scrollTop() < 300) // Before reaching the head-section
        {
            // Hide Up Arrow
            $('.up-arrow').css({
                'opacity': '0'
            });
        } else {
            // Show Up Arrow
            $('.up-arrow').css({
                'opacity': '1'
            });
        }
    });
});

// Initalization of Wow from Animate

$(document).ready(function(){
    'use strict';
    
    new WOW().init();
});