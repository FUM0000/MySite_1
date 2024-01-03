$(function() {
    //// System Bar
    // Audio
    let audio = $("#bgm_1").get(0);
    let playing = false;
    audio.volume = 0.5;
    $("#speaker_1").on("click", function () {
        if( playing ) {
            $(this).removeClass("mdi-volume-source");
            $(this).addClass("mdi-volume-variant-off");
            audio.pause();
        }
        else {
            $(this).removeClass("mdi-volume-variant-off");
            $(this).addClass("mdi-volume-source");
            audio.play();
        }
    });
    audio.onplaying = function() { playing = true; };
    audio.onpause = function() { playing = false; };
    // Arrow
    // let arrow = $("#arrow_1");
    // arrow.css("animation", "animation_arrow_1 .5s infinite")
});