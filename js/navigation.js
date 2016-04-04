$(document).ready(function () {
    if (!flux.browser.supportsTransitions)
        alert("Flux Slider requires a browser that supports CSS3 transitions");

    window.f = new flux.slider('#slider', {
        autoplay: false,
        pagination: false,
        transitions: ["bars3d", "cube", "tiles3d", "blinds3d", "turn"]
    });

    // If this is a 3D transform and the browser doesn't support 3D then inform the user
    if (!flux.browser.supports3d) {
        alert("The '" + event.target.innerHTML + "' transition requires a browser that supports 3D transforms");
        return;
    }

    $("#next_image").click(function () {
        window.f.next();
    });
    $("#previous_image").click(function () {
        window.f.prev();
    });
})