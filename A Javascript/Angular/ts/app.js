"use strict";
// import { Book } from "./book";
// let book = new Book;
// book.name = "L île Mistérieuse";
// console.log(book.name); 
class user {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Salut ${this.name}`);
    }
}
let u = new user("Golbert");
u.greet;
