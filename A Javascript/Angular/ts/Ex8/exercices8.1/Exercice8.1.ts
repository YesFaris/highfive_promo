'use strict'
function readonly (target, key, descriptor){
    descriptor.writable = false; 
    return descriptor;
}
 
class Bike{
    @readonly
    speed (){
        return 8;
    }
}

let bike = new Bike;
bike.speed = () => 5;
console.log(bike.speed());
