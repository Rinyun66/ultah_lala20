function openLetter() {
    document.querySelector('.letter').style.display = "none";
    document.getElementById('content-hidden').style.display = "block";
    document.getElementById('audio').play();
}

function swap2() {
    alert("🎂 Jangan lupa traktir ya! 🎉");
}

function mediaBtn() {
    var music = document.getElementById("audio");
    var icon = document.getElementById("media-button").children[0];

    if (music.paused) {
        music.play();
        icon.className = "fas fa-pause";
    } else {
        music.pause();
        icon.className = "fas fa-play";
    }
}
