'use strict'
// l'opérateur spread(...) en js permet de copier rapidement tout ou une partie d'un tableau objet dans un autre tableau objet
 const arr1 = [1,2,3];
 const arr2 = [4,5,6];
 const arr3 = arr1.concat (arr2)
 console.log(arr3);
 const arr4 = [...arr1, ...arr2];
 console.log(arr4);
 console.log(...arr1);
 console.log(...arr2);
// "...arr" copie juste les éléments qui sont à l'intérieur du tableau   
    //   abreviation de l'ecriture d'un tableau 
let a = "amir"
let b = 'benjamin'
 
const obj ={
    a : a,
    b : b,
}
const obj2 ={a,b}
console.log(obj);
console.log(obj2);

console.log({..."bonjour"});

// rest paremeter : il prend le reste des paremètres derrière les variables et les met dans un tableau
function add(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
    
}
add(2, 3, 4, 5, 6, 7);
