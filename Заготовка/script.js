'use strict'

let area = document.getElementById('area');
let rect = document.getElementById('rect');

area.onclick = (event) => {
    // console.log(event);
    // console.log('offsetX: ', event.offsetX, 'offsetY: ', event.offsetY)
    // console.log('PageX: ', event.pageX, 'PageY: ', event.pageY)
    // console.log('clientX: ', event.clientX, 'clientY: ', event.clientY)
}

function elemDrag(event){
    let shiftX = event.clientX - rect.getBoundingClientRect().left;
    let shiftY = event.clientY - rect.getBoundingClientRect().top;
    rect.style.position = 'absolute';

    document.addEventListener('mousemove', elemMove);
    document.addEventListener('mouseup', elemDrop);
    function elemDrop(event){
        document.removeEventListener('mousemove', elemMove);
        document.removeEventListener('mouseup', elemDrop);
    }

    function elemMove (event){
        moveAt(event.pageX, event.pageY)
    }
    function moveAt(pageX, pageY){
        rect.style.left = pageX - rect.offsetWidth / 2 - shiftX + 'px';
        rect.style.top = pageY - rect.offsetHeight / 2 - shiftY + 'px';
    }
}
rect.onmousedown = elemDrag;
rect.ondragstart = function() {return false};

rect.onmouseover = function () {
    rect.style.backgroundColor = 'rgb(170, 10, 10)';
}
rect.onmouseout = function () {
    rect.style.backgroundColor = 'red';
}



