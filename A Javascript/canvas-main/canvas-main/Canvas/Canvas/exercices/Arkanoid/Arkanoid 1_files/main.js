'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let circle = {
    color: "skyblue",
    radius: 15,
    x: 200,
    y: 22,
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;
let direction = 1;
let speed = 10;  


let paddle = {
    length: 10,
    x: 170,
    y: 560,
};


document.addEventListener('DOMContentLoaded', function () {
     canvasDom = document.getElementById("canvas")
     ctx = canvasDom.getContext('2d');
     let context = canvasDom.getContext('2d')
     
     // document.addEventListener("keydown",
     //     function movecircle(e) {
         //         // on détecte la touche et la direction puis on change les coordonnées
    //         // switch (e.key) {
    //         //     case 'ArrowRight':
    //         //         if (circle.x + circle.radius < canvas.width) circle.x+=10;
    //         //         break;
    //         //     case 'ArrowLeft':
    //         //         if (circle.x - circle.radius > 0) circle.x-=10;
    //         //         break;
    //         //     case 'ArrowUp':
    //         //         if (circle.y - circle.radius > 0) circle.y-=10;
    //         //         break;
    //         //     case 'ArrowDown':
    //         //         if (circle.y + circle.radius < canvas.height) circle.y+=10;
    //         //         break;
    //         //     case 'Enter':
    //         //         circle.color = 'blue';
    //         //         break;
    //         //     case 's':
    //         //         circle.color = 'skyblue';
    //         //         break;
    //         //     case 'p':
    //         //         circle.color = 'pink';
    //         //         break;
    //         //     case 'd':
    //         //         circle.color = '#dd5735';
    //         //         break;
    //         //     case 'y':
    //         //         circle.color = 'yellow';
    //         //         break;

    //         // }
    
    //         displaycircle()
    //         console.log(e.code);
    //     })
   
   

    movement()
    
});

function displaycircle() {
    
    // On vide le Canvas avant de redessiner
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est gris
    ctx.fillStyle = '#ddd';
    // On rempli le canvasDom de gris
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
    
    // On dit au contexte que la couleur de remplissage est rouge
    ctx.fillStyle = circle.color;

    ctx.beginPath()
    
    // On trace un nouveau carré rempli (fill) avec cette couleur
    ctx.arc(circle.x, circle.y, circle.radius, 0,2*Math.PI);
    ctx.fill()

    ctx.fillStyle = "skyblue";
    ctx.fillRect(paddle.x,paddle.y, 81, paddle.length);

}

document.addEventListener("keydown",
function movePaddle(e){
    // on détecte la touche et la direction puis on change les coordonnées
    switch (e.key) {
        case 'ArrowRight':
            if (paddle.x + 81 < canvas.width) paddle.x+=10;
            break;
        case 'ArrowLeft':
            if (paddle.x > 0) paddle.x-= 10;
            break;
        case 'ArrowUp':
            if (paddle.y > 0) paddle.y-= 10;
            break;
        case 'ArrowDown':
            if (paddle.y + 10 < canvas.height) paddle.y+=10;
            break;

    }
   
})

function movement(){
    
    // circle.y = circle.y + direction*speed;
    // if(circle.y >= canvasDom.height - circle.radius){
    //     circle.y = canvasDom.height - circle.radius;
    //     direction = -1
    // }
    // else if(circle.y <= circle.radius){
    //     circle.y = circle.radius
    //     direction = 1
    // }
    if(circle.y <= circle.radius){
        direction = 1
    }
    else if(circle.y + circle.radius >= 560){
        direction = -1
    }
    circle.y = circle.y + direction*speed;
    
    displaycircle()
    requestAnimationFrame(movement)
    
}
