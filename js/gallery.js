$(document).ready(function () {
    if (!flux.browser.supportsTransitions)
        alert("Flux Slider requires a browser that supports CSS3 transitions");

    window.f = new flux.slider('#slider', {
        autoplay: false,
        pagination: false,
        captions: true,
        transitions: ["bars3d", "cube", "tiles3d", "blinds3d", "turn"]
    });

    // If browser doesn't support 3D then inform the user
    if (!flux.browser.supports3d) {
        alert("The '" + event.target.innerHTML + "' transition requires a browser that supports 3D transforms");
        return;
    }

    $("#next_image").click(function () {
        window.f.next();
        z++;
        find_image_info();
    });
    $("#previous_image").click(function () {
        window.f.prev();
        z--
        find_image_info();
    });

    function shows(link, show) {
        $("#poveznica #ha").text(show);
        $("#poveznica a").attr("href", link)
        $("#poveznica").show("slow", function () {

        });
    }

    var z = 0;
    find_image_info();

    function hide() {
        $("#poveznica").hide("slow", function () {

        });
    }

    function find_image_info() {
        var link, show;
        z = (z + 11) % 11;
        if (z === 0 || z === 1) {
            link = "https://bicikli.mup.hr/";
            show = "bicikli.mup.hr";
            shows(link, show);
        }
        else if (z === 2) {
            link = "http://stolarija-sljiva.hr/";
            show = "stolarija-sljiva.hr";
            shows(link, show);
        }
        else if (z === 3) {
            link = "popusti.oglasnik.hr";
            show = "popusti.oglasnik.hr";
            shows(link, show);
        }
        else if (z === 4) {
            link = "http://ngnconsulting.se/en/";
            show = "ngnconsulting.se";
            shows(link, show);
        }
        else if (z === 5) {
            link = "http://ekarte.hr/";
            show = "ekarte.hr";
            shows(link, show);
        }
        else if (z === 6) {
            link = "http://dubrovnikdigest.com/";
            show = "dubrovnikdigest.com";
            shows(link, show);
        }
        else if (z === 7) {
            link = "http://djecjaknjiga.hr/";
            show = "djecjaknjiga.hr";
            shows(link, show);
        }
        // 8,9 = TV postaje
        else if (z === 10) {
            link = "https://play.google.com/store/apps/details?id=ml.smart_ideas.smarthome&hl=en";
            show = "Google play store";
            shows(link, show);
        }
        else {
            hide();
        }
    }
})