'use strict'
document.addEventListener("DOMContentLoaded", function (){
    let mouvement = 0;
let zombie = document.getElementById("zombietomb")

let image = document.getElementById("imge")

let img = image.offsetWidth;
let zomb = zombie.offsetWidth-2;
// console.log(zomb);
// console.log(img)
const updateSpeed = 250;


    function moveWidthSetTimeout(){
        mouvement-=100;
        if(mouvement <= -img){
        mouvement =0;
       }
      
         image.style.transform = "translateX(" + mouvement + "px)";
        setTimeout(moveWidthSetTimeout, updateSpeed ); 
        
      }
    
      moveWidthSetTimeout();
});

