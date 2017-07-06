document.addEventListener("DOMContentLoaded", function() {

    function move() {
        var elem = $("#myBar");
        //var elem = $('#progressBar hr')
        console.log(elem);
        // console.log(allBar );
        var width = 1;
        var id = setInterval(frame, 50);
        function frame() {
            if (width >= 100) {
                clearInterval(id);

            } else {
                width++;
                elem.css({width: width + '%'});
            }
        }
    }

    move();

 });
