/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// Object literal
let objLiteral = {
    name: 'name', 
    age: 1
};
console.log(objLiteral + '\n');

// Constructor function
function ObjConstructed(name, age) {
    this.name = name;
    this.age = age;
}
var objConstr = new ObjConstructed('name', 1);
console.log(objConstr + '\n');

// es6 class
class Obj {
    constructor(name, age){
        this.name = 'name';
        this.age = 1;
    }
}
let obj = new Obj();
console.log(obj.name);
console.log(obj.age);
