'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
function modify(model) {
    let newModel = model;
    return function (target, key, descriptor) {
        descriptor.value = () => newModel;
    };
}
class Bike {
    speed() {
        return 8;
    }
    model() { return 'normal'; }
}
__decorate([
    readonly
], Bike.prototype, "speed", null);
__decorate([
    modify('electric')
], Bike.prototype, "model", null);
let bike = new Bike;
bike.speed = () => 5;
console.log(bike.speed());
console.log(bike.model());
function Feature(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'swim', {
            value: () => config.action,
        });
    };
}
let Duck = class Duck {
    swim() { return "je suis un oiseau"; }
};
Duck = __decorate([
    Feature({
        action: "Nage comme un canard"
    })
], Duck);
let duck = new Duck();
console.log(duck.swim());
