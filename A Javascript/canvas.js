'use strict'
document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("canvas")
    let context = canvas.getContext('2d')
    context.strokeStyle = "skyblue"
    context.fillStyle = "skyblue";

    context.fillRect(60, 10, 60, 20);
    context.fillRect(130, 10, 60, 20);
    context.fillRect(200, 10, 60, 20);
    context.fillRect(270, 10, 60, 20);
    context.fillRect(340, 10, 60, 20);
    context.fillRect(410, 10, 60, 20);

    context.fillRect(60, 40, 60, 20);
    context.fillRect(130, 40, 60, 20);
    context.fillRect(200, 40, 60, 20);
    context.fillRect(270, 40, 60, 20);
    context.fillRect(340, 40, 60, 20);
    context.fillRect(410, 40, 60, 20);

    context.fillRect(60, 70, 60, 20);
    context.fillRect(130, 70, 60, 20);
    context.fillRect(200, 70, 60, 20);
    context.fillRect(270, 70, 60, 20);
    context.fillRect(340, 70, 60, 20);
    context.fillRect(410, 70, 60, 20);

    context.fillRect(60, 100, 60, 20);
    context.fillRect(130, 100, 60, 20);
    context.fillRect(200, 100, 60, 20);
    context.fillRect(270, 100, 60, 20);
    context.fillRect(340, 100, 60, 20);
    context.fillRect(410, 100, 60, 20);

    context.fillRect(230, 480, 125, 10);

    context.font = 'bold 18px sans-serif';
    context.fillStyle = "white";
    context.fillText(' world ✔', 100+context.
    mesureText('Hello 🙌').width+10, 150)
})