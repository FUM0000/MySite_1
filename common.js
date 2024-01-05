
let Name = "clair_de_lune.mp3";

$(function() {
    //// System Bar
    // Audio
    let audio = $("#current_bgm")[0];
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
            audio.src = "https://fum0000.github.io/MySite_1/Audio/" + Name;
            audio.play();
        }
    });
    audio.onplaying = function() { playing = true; };
    audio.onpause = function() { playing = false; };
    // Arrow
    // let arrow = $("#arrow_1");
    // arrow.css("animation", "animation_arrow_1 .5s infinite")
});

function Change_BGM_Name(_name) {
    Name = _name;
}