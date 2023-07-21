'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function decorateur(target) {
    console.log("appelle du décorateur");
}
let User = class User {
    constructor() {
        console.log("constructeur de User...");
    }
};
User = __decorate([
    decorateur
], User);
