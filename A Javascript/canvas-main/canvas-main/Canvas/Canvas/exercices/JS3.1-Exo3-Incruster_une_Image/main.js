'use strict';

document.addEventListener('DOMContentLoaded', function () {
    
    let canvasDom = document.querySelector("#canvas")
    let ctx = canvasDom.getContext('2d')
    let img = new Image()
    img.src = "./goku_blue_left.png"
    img.onload = function(){
        ctx.drawImage(img,10,10);
    }
});

