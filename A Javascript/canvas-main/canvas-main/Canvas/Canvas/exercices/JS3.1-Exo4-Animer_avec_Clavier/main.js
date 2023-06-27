'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#FF0000",
    length:20,
    x:10,
    y:10
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById("canvas")
    let context = canvas.getContext('2d')
    context.strokeStyle = "skyblue"
    context.fillStyle = "skyblue";
    context.fillRect(80, 10, 100, 100);

});

