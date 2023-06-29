'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#FF0000",
    length: 20,
    x: 10,
    y: 10
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;



document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext('2d')

    document.addEventListener("keydown",
        function moveSquare(e) {
            // on détecte la touche et la direction puis on change les coordonnées
            switch (e.key) {
                case 'ArrowRight':
                    if (square.x + square.length < canvas.width) square.x++;
                    break;
                case 'ArrowLeft':
                    if (square.x > 0) square.x--;
                    break;
                case 'ArrowUp':
                    if (square.y > 0) square.y--;
                    break;
                case 'ArrowDown':
                    if (square.y + square.length < canvas.height) square.y++;
                    break;
                case 'Enter':
                    square.color = 'blue';
                    break;
                case 's':
                    square.color = 'skyblue';
                    break;
                case 'p':
                    square.color = 'pink';
                    break;
                case 'd':
                    square.color = '#dd5735';
                    break;
                case 'y':
                    square.color = 'yellow';
                    break;

            }
            displaySquare()
            console.log(e.code);
        })


    function displaySquare() {
        // On vide le Canvas avant de redessiner
        context.clearRect(0, 0, canvas.width, canvas.height);

        // On dit au contexte que la couleur de remplissage est gris
        context.fillStyle = '#DDDDDD';
        // On rempli le Canvas de gris
        context.fillRect(0, 0, canvas.width, canvas.height);

        // On dit au contexte que la couleur de remplissage est rouge
        context.fillStyle = square.color;

        // On trace un nouveau carré rempli (fill) avec cette couleur
        context.fillRect(square.x, square.y, square.length, square.length);
    }
    displaySquare()
});



