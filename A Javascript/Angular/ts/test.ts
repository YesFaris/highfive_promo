// 'use strict'
// // type de variable en typescritp
// // let|const nomVariale : typeVariable = valeur
// let x : number = 5;
// const pi : number = 3.14;
// // hexadecimal 
// let hex : number = 0xf00d;
// // binaire
// let bin: number = 0b0001;
// // string
// let color: string = "blue";
// // boolean
// let isFree: boolean = false;
// // un array constitué de number
// let array: number[] = [1, 2, 3]
// // un array constitué de strings
// let str: string[] = ['a', 'b', 'c']
// // un array constitué de number et de string
// let arr2: [string, number] = ["a", 2]
// // cela veut dire que j'ai deux paramètres de type number qui vont me retourner un number
// function add(a: number, b: number): number{
//     return a + b;
// }
// function sayHello(): void {
//     console.log("hello !");

// type de variables
/* 
-number: les nombres, qu'ils soient entiers ou à virgule
-string : représente les chaîne de caractères
-boolean: représente les valeurs booléennes, ie true or false
-array: représente un tableau contenant des éléments du même type
-object: représente tout type d'objet
-null: représente la valeur "null"
-undefined: représente la valeur "undefined"

TYPE DE VARIABLES EN TS
-any: représente un type non spécifique ou dynamique.(eviter d'utiliser any)
-unknown: représente un élément dont on ne connait pas le type
-enum: représente un ensemble de valeur nommées
-turple: représente un tableau avec un nombre fixe d'éléments de types difficiles.


*/
    
// } ATTEND... Je suis congolais,je suis antillais ,je suis italien, marocains, maliennnn .Nous sommes des trompeurs même quand elles ne nous aiment pas, les femmes ne nous résistent pas, même si elles le méritent pas, elles aiment les problèmes, mais pourquoi? elles aiment les problèmes pourquoi? mais pourquoi? c'est pas ma faute j'suis comme ça, et jamais rien ne changeras, je suis infidèle, mais pourquoiii (elles aiment les problèmes pourquoi) maiiis pourquoiii (c'est pas ma faute j'suis comme ca)ouuuuuuh et jamais rien ne changeras, je suis infidèle ooouuuuhhh je suis infidèleee ouuuuh...🚶‍♂️...


// exercice
// class Product {
//     private _name: string 
//     protected _ref: number = 1000;
     
//     constructor(name : string){
//         this._name = name;
//     }
//     set name(name:string){
//         this.name = name;
//     }
//     get name(): string{
//         return this._name;
//     }
// }
// let bike = new Product ('Super Bike')
// console.log(bike.name);


// type rectangle={
//     height:number,
//     width:number,
// }
// const rect : rectangle = {
//     height : 35,
//      width: 50,
// } 



// type user ={
//     fname: string,
//     lname: string,
//     age: number
// }= {fname:'john', lname:'Doe'}

// class Music {
//     protected _instrument: string;
//     play(): string{
//         return "play music";
//     }
    
// }

// class Guitar extends Music{

// } 


// Union des Types( | )

// function add(a:number | string, b: number | string): number{
//     if(typeof a === 'string' && typeof b === 'string'){
//         return parseInt(a) + parseInt(b)

//     }
//     else if (typeof a === 'number' && typeof b === 'number'){
//         return a + b;
//     }
// return-1
// }


//  type Rectangle = {
//     x: number,
//     y: number,
//  }
//  type Circle ={
//     cx: number,
//     cy: number,
//     cr: number
//  }

//  let shape : Rectangle | Circle = {
//     x: 23,
//     y:59,}
// type User = {
//      readonly id?: number,
//     fname: string,
//     lname: string,
//     age? : number
// }

// let u: User = {
//     id :1,
//     fname: 'john',
//     lname: 'Doe',
//     age:98
// }
// u.id = 20;
// console.log(u);
// // Protected: permet l'accès dans la classe et dans les enfants de la classe si


// class Person {
  
//     constructor(  
//         private _fname: string,
//         private _lname : string
//         ){
      
//     }
   
// }
// class Programer extends Person{
//     constructor(
//         fname:string, 
//         lname:string, 
//         private languages:string[])
//         {
//         super(fname, lname);
    
//     }
// } 
// Classe abstraite
/*Une classe absraite est un concept de la POO
C'est une classe qui ne peut être instancier directement, ie qu'on ne  peut pas creéer d'objets directement à partir de cette classe.
Au lieu de cela elle est conçue pour être utilisé comme une classe à partir de laquelle les autres peuvent hériter
*/



// exercice 3
// interface Duck{
//     name : string ;
//      swim():  string;
// }

// class Thing implements Duck{
    
//      name= "odéric";
//  swim(): string {
//      return "swim like a duck"
//  }
// }

// // exercice 4
// const nage = new Thing()
// console.log(nage.swim());


// let recipes : Recipe[] = ["john", 25]
// class Recipe {
//     constructor(name:string, star?:number){

//     }
    
// }
// interface Bike{
//     name: string;
//     type? : string;
// }

// let bikes : Bike[] = [];


// // exercie 4.1 
// class Recipes {
//     constructor(notes:number[]){
//     }
// }
// let recipess: Recipes[] = [20, 18];
// console.log(Recipes.notes);

// //  exercice 5.1

// // class Queue{
// //     constructor(Queue:number){

// //     }
// // }
// let queue = new Queue<number>();
// queue.push(1);
// queue.push(2)
// queue.push(3)
// queue.push(4)
// queue.push(4)

// console.log(queue.pop());
// let queueAray = new Queue<Array<number>>();
// queueAray.push([1, 2]);
// queueAray.push([3, 4]);
// queueAray.push([5, 6]);
// queueAray.push([7, 8]);

// console.log(queueArray.pop());
