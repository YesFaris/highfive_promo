'use strict'
let x = 3;
// @param {number} num
// @return
function isPositive(num) {
    // if(num >= 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    
    return num >= 0 ? `${num} est positif` : `${num} est négatif`;
}
console.log(isPositive(3));

// operateur ternaire
