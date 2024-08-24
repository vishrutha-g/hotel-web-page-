(function($) {
    "use strict";

    //Page cursors
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    if (t && e && i) {
        document.body.addEventListener("mousemove", function(n) {
            var x = n.clientX + "px",
                y = n.clientY + "px";
            t.style.left = x;
            t.style.top = y;
            e.style.left = x;
            e.style.top = y;
            i.style.left = x;
            i.style.top = y;
        });

        function n() {
            e.classList.add("hover");
            i.classList.add("hover");
        }

        function s() {
            e.classList.remove("hover");
            i.classList.remove("hover");
        }

        var r = document.querySelectorAll(".hover-target");
        r.forEach(function(target) {
            target.addEventListener("mouseover", n);
            target.addEventListener("mouseout", s);
        });
    }

    // Background image movement
    var pos = 0;
    window.setInterval(function() {
        pos++;
        document.getElementsByClassName('moving-image')[0].style.backgroundPosition = pos + "px 0px";
    }, 18);

    // Case study hover effects
    $(document).ready(function() {
        $('.case-study-name:nth-child(1)').on('mouseenter', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(1)').addClass("show");
            $(this).addClass('active');
        });

        $('.case-study-name:nth-child(2)').on('mouseenter', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(2)').addClass("show");
            $(this).addClass('active');
        });

        $('.case-study-name:nth-child(3)').on('mouseenter', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(3)').addClass("show");
            $(this).addClass('active');
        });

        $('.case-study-name:nth-child(4)').on('mouseenter', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(4)').addClass("show");
            $(this).addClass('active');
        });

        $('.case-study-name:nth-child(1)').trigger('mouseenter');
    });

})(jQuery);
