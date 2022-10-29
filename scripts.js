$("#play-btn").click(() => {
    if (document.getElementById("audio-play").paused) {
        $("#audio-play").trigger("play");
    } else {
        $("#audio-play").trigger("pause");
    }
});

$("#tab-works").click(() => {
    $("#works").show();
    $("#links").hide();
    $("#tab-works").css({ color: "#404040" });
    $("#tab-links").css({ color: "#b5b5b5" });
    $("#tab-blogs").css({ color: "#b5b5b5" });
});

$("#tab-links").click(() => {
    $("#works").hide();
    $("#links").show();
    $("#tab-works").css({ color: "#b5b5b5" });
    $("#tab-links").css({ color: "#404040" });
    $("#tab-blogs").css({ color: "#b5b5b5" });
});
