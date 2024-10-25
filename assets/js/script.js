document.addEventListener('contextmenu', event => event.preventDefault());

$(document).ready(function () {
    $('.bio-more').hide();
});

dragElement($('.move-1')[0]);
dragElement($('.move-2')[0]);
dragElement($('.move-3')[0]);
dragElement($('.move-4')[0]);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
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
}

$("#title-name").on("click", function () {
    if ($('.bio-main').is(":hidden")) {
        $('.bio-main').show();
        $('.bio-more').hide();
    } else {
        $('.bio-main').hide();
        $('.bio-more').show();
    }
});
