'use strict'
const students= [
   "Faris",
   "Possidius",
   "Warris",
   "Bailse",
   "Martin",
   "leRoux",
   "Odéric",
   "Gabriel",
]
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
    
// }
// students.forEach(students => {
//     console.log(students);
// })


// Le for...in : permet de parcourir les propriétés/indices d'un tableau ou d'un objet
 for(let i in students){
    console.log(students[i]);
 }
 for(let prop in obj){
    console.log(obj[prop]);
 }