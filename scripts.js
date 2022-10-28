$("#play-btn").click(() => {
    if (document.getElementById("audio-play").paused) {
        $("#audio-play").trigger("play");
    } else {
        $("#audio-play").trigger("pause");
    }
});
