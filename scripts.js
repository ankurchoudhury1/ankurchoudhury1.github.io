$("#play-btn").click(() => {
    if (document.getElementById("audio-play").paused) {
        $("#audio-play").trigger("play");
    } else {
        $("#audio-play").trigger("pause");
    }
});

$("#tab-works").click((e) => {
    e.preventDefault();
    $("#works").show();
    $("#links").hide();
    $("#tab-works").css({ color: "#404040" });
    $("#tab-links").css({ color: "#b5b5b5" });
    $("#tab-blogs").css({ color: "#b5b5b5" });
});

$("#tab-links").click((e) => {
    e.preventDefault();
    $("#works").hide();
    $("#links").show();
    $("#tab-works").css({ color: "#b5b5b5" });
    $("#tab-links").css({ color: "#404040" });
    $("#tab-blogs").css({ color: "#b5b5b5" });
});

$(".f").click(() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

$(".content-image").mouseenter((e) => {
    // console.log(e.target);
    $(e.target).css({ transform: "scale(1.1)" });
});

$(".content-image").mouseout((e) => {
    // console.log(e.target);
    $(e.target).css({ transform: "scale(1)" });
});
