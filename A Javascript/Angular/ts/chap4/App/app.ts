'use strict'
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
// function decorer(obj: User, methotd: string, descripteur: PropertyDescriptor) {

//     console.log("appelle du décorateur");
//     console.log(descripteur);


//     descripteur.value()
// }
// class User {
//     constructor(private name: string) { }
//     @decorer
//     greet() {
//         console.log(`Salut ${this.name}`);

//     }
// }
//  let u = new User("Golbert");
//  u.greet;

function decorateur(target : Function){
    console.log("appelle du décorateur");
    
}
@decorateur
class User{
    constructor(){
        console.log("constructeur de User...");
        
    }
}