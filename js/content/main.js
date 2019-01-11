document.addEventListener("DOMContentLoaded", function() {

    // lazy-load plugin
    //import jquery-lazyload from 'jquery-lazyload';
    // var lazyload = require('jquery-lazyload');
    //jQuery('.lazy').lazyload();

// progress bar needs to be develop
    // function move() {
    //     var elem = $("#myBar");
    //     //var elem = $('#progressBar hr')
    //     console.log(elem);
    //     // console.log(allBar );
    //     var width = 1;
    //     var id = setInterval(frame, 50);
    //     function frame() {
    //         if (width >= 100) {
    //             clearInterval(id);
    //
    //         } else {
    //             width++;
    //             elem.css({width: width + '%'});
    //         }
    //     }
    // }
    //
    // move();

    var aboutUs = $('.section__about-us__img-container');

    aboutUs.mouseenter(function(){
        var hoverBackground = $(this).find('p');
        var hoverImg = $(this).find('img');
        //console.log(test);
        hoverBackground.css("visibility", "visible");
        hoverImg.css({"top": "-10px", "left": "-10px"});
    });
    aboutUs.mouseleave(function(){
        var hoverBackground = $(this).find('p');
        var hoverImg = $(this).find('img');
        //console.log(test);
        hoverBackground.css("visibility", "hidden");
        hoverImg.css({"top": "0", "left": "0"});
    });

 });
