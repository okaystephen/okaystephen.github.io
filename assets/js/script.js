$(document).ready(function () {
    document.addEventListener('contextmenu', event => event.preventDefault());

    // insert images + animation
    var music = [
        `https://open.spotify.com/embed/track/53xj4nMCGtcFV2kieeI5pk`,
        `https://open.spotify.com/embed/track/5gSHlT2SI0dtjeHrjj96A1`,
        `https://open.spotify.com/embed/track/0OaWxhWXB47J93vzObroan`,
        `https://open.spotify.com/embed/track/1ZEFYW6nPEvIcsIvymgsLk`,
        `https://open.spotify.com/embed/track/2joEpsXflccZD0ZwKEdz5m`,
        `https://open.spotify.com/embed/track/4cwJYLZeVMTjF6o0Nzk9nq`,
        `https://open.spotify.com/embed/track/6ZCGKyXcGbYc6tdP6unPVY`,
        `https://open.spotify.com/embed/track/0zgDfVY84eFIzgTvK9KutN`,
    ];

    var imgs = [
        `<div class="move" style="left: ${getPos(`x`)}px; top: ${getPos(`y`)}px; width: 100%;"><iframe class="shadow-md" style="border-radius:12px" src="${music[Math.floor(Math.random() * music.length)]}?utm_source=generator" width="50%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>`,
        `<div class="move" style="left: ${getPos(`x`)}px; top: ${getPos(`y`)}px;"><img src="assets/img/frame-0.png"></div>`,
        `<div class="move" style="left: ${getPos(`x`)}px; top: ${getPos(`y`)}px;"><img src="assets/img/frame-1.png" style="width: 14vw;"></div>`,
        `<div class="move" style="left: ${getPos(`x`)}px; top: ${getPos(`y`)}px;"><img src="assets/img/frame-2.png" style="width: 12vw;"></div>`,
        `<div class="move" style="left: ${getPos(`x`)}px; top: ${getPos(`y`)}px;"><img src="assets/img/frame-3.png" style="width: 20vw;"></div>`,
    ];

    for (let i = 0; i < imgs.length; i++) {
        $("#image").append(imgs[i]);
    }

    var images = $(".move").map(function () {
        return this;
    }).get();
    dragElement(images);
});

function dragElement(elements) {
    elements.forEach(function (elmnt) {
        var pos1 = 1200,
            pos2 = 1200,
            pos3 = 1200,
            pos4 = 10000;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    });
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$("#title-name").on("click", function () {
    var words = [
        "“To be sensual, I think, is to respect and rejoice in the force of life, of life itself, and to be present in all that one does, from the effort of loving to the breaking of bread.” \n― James Baldwin, The Fire Next Time",
        "“Those sounds, on such a quiet night, sounded like heartbeats.” \n― Your Name Engraved Herein (2020)",
        "“As long as there is love, there will be grief.” \n― Heidi Priebi",
        "“You said that memories exist outside of time and have no beginning or end.” \n― Euphoria (2019)",
        "“Every rejection, every disappointment has led you here to this moment.” \n― Everything Everywhere All at Once (2022)",
        "“If memories could be canned, would they also have expiry dates? If so, I hope they last for centuries.” \n― Chungking Express (1994)"
    ];
    alert(words[Math.floor(Math.random() * words.length)]);
});

var moveHeight = document.getElementById('bio').clientHeight;
var moveWidth = document.getElementById('image').clientWidth;

function getPos(coordinate) {
    if (coordinate == "x") {
        return (getRandom(0, moveWidth - 300));
    } else {
        return (getRandom(0, moveHeight - 300));
    }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}