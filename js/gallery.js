$(document).ready(function () {
    /*if (!flux.browser.supportsTransitions)
        alert("Flux Slider requires a browser that supports CSS3 transitions");
        */

    var image_number = 0;

    window.f = new flux.slider('#slider', {
        autoplay: true,
        pagination: false,
        captions: true,
        transitions: ["bars3d", "cube", "tiles3d", "blinds3d", "turn"],
        onTransitionEnd: function (data) {
            var img = data.currentImage;
            image_number = parseInt(img.alt);
            find_image_info();
        }
    });

    resize_gallery();
    $(window).resize(function () {
        resize_gallery();
    });

    function resize_gallery() {
        var ratio = $(window).width() / 1000;
        var margin = -80 * (1 / ratio);

        if (ratio > 1) {
            $('#gallery_container').css({transform: ''});
            $('#gallery_container').css("margin-left", "");
            $('#gallery_container').css("margin-right", "");
            $('#poveznica').css({transform: ""});
            $('#poveznica').css("margin-left", "");
            $('#poveznica').css("margin-right", "");
            $('#poveznica').css("margin-top", 20);
        }
        else {
            if ($(window).width() < 750)
                margin = -100 * (1 / ratio);
            if ($(window).width() < 350)
                margin = -95 * (1 / ratio);
            $('#gallery_container').css({transform: 'scale(' + ratio + ')'});

            $('#gallery_container').css("margin-left", margin + "px");
            $('#gallery_container').css("margin-right", margin + "px");
            //$('#poveznica').css({transform: 'scale(' + ratio + ')'});
            $('#poveznica').css("margin-left", margin + "px");
            $('#poveznica').css("margin-right", margin + "px");

            if ($(window).width() < 550 && $(window).width() > 350)
                $('#poveznica').css("margin-top", margin * 2);
            else if ($(window).width() < 350)
                $('#poveznica').css("margin-top", margin * 1.7);
            else
                $('#poveznica').css("margin-top", margin * 3);
        }
    }

    // If browser doesn't support 3D then inform the user
    /*if (!flux.browser.supports3d) {
        alert("The '" + event.target.innerHTML + "' transition requires a browser that supports 3D transforms");
        return;
    }*/

    $("#next_image").click(function () {
        window.f.stop();
        window.f.next();
        setTimeout(function () {
            if (window.f.isPlaying() === false)
                window.f.start();
        }, 1500);
        //z++;
        //find_image_info();
    });
    $("#previous_image").click(function () {
        window.f.stop();
        window.f.prev();
        setTimeout(function () {
            if (window.f.isPlaying() === false)
                window.f.start();
        }, 1500);
        //z--
        //find_image_info();
    });

    function shows(link, show) {
        $("#poveznica #ha").text(show);
        $("#poveznica a").attr("href", link)
        $("#poveznica").show("slow", function () {

        });
    }

    find_image_info();

    function hide() {
        $("#poveznica").hide("slow", function () {

        });
    }

    function find_image_info() {
        var link, show;
        image_number = (image_number + 13) % 13;
        if (image_number === 0 || image_number === 1) {
            link = "https://bicikli.mup.hr/";
            show = "bicikli.mup.hr";
            shows(link, show);
        }
        else if (image_number === 2) {
            link = "http://stolarija-sljiva.hr/";
            show = "stolarija-sljiva.hr";
            shows(link, show);
        }
        else if (image_number === 3) {
            link = "popusti.oglasnik.hr";
            show = "popusti.oglasnik.hr";
            shows(link, show);
        }
        else if (image_number === 4) {
            link = "http://ngnconsulting.se/en/";
            show = "ngnconsulting.se";
            shows(link, show);
        }
        else if (image_number === 5) {
            link = "http://ekarte.hr/";
            show = "ekarte.hr";
            shows(link, show);
        }
        else if (image_number === 6) {
            link = "http://dubrovnikdigest.com/";
            show = "dubrovnikdigest.com";
            shows(link, show);
        }
        else if (image_number === 7) {
            link = "http://djecjaknjiga.hr/";
            show = "djecjaknjiga.hr";
            shows(link, show);
        }
        // 8 = TV postaje
        else if (image_number === 9) {
            link = "https://play.google.com/store/apps/details?id=ml.smart_ideas.smarthome&hl=en";
            show = "Google play store";
            shows(link, show);
        }
        else if (image_number === 10) {
            link = "https://github.com/nikolamajcen/rent-a-car";
            show = "Github";
            shows(link, show);
        }
        else if (image_number === 11) {
            link = "https://play.google.com/store/apps/details?id=com.nikolamajcen.uhrs";
            show = "Google play store";
            shows(link, show);
        }
        else if (image_number === 12) {
            link = "https://github.com/nikolamajcen/on-the-map";
            show = "Github";
            shows(link, show);
        }
        else {
            hide();
        }
    }
})
