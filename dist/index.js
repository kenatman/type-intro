"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = new Human(`kong`, 24, `female`);
const sayHello = (hallow) => {
    return `hello ${hallow.name}, you are ${hallow.age} years old, also you are ${hallow.gender}!!!`;
};
console.log(sayHello(person));
//# sourceMappingURL=index.js.map