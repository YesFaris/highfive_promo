'use strict'

const notes = [17, 14, 12, 13];
// const nicole = notes[0];
// const erfero = notes[1];
// const oderic = notes[2];
// const martin = notes[3]
const [nicole, erfero, ,martin]= notes;
console.log(nicole);
console.log(erfero);
// console.log(oderic);
console.log(martin);
const person = {
    firstname: "John",
    lastname: "Doe",
    age : 24
}
const {lastname, age} = person
console.log(age);
console.log(lastname);

// changer les variables qui sont contenues dans l'objet
const {firstname:fn , lastname:ln, age:a}= person;