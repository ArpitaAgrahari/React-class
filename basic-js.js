
// //Global var 
// var global = "I am global"
// console.log(global);

// //local
// function myLocal() {
//     var local = "I am local"
//     console.log(local);
// }
// //local();
// //console.log(local); //error :  diff btw local and global ...
// // local is declared inside the function so it is local to the function
// // global is declared outside the function so it is global to the function


// //REDECLARATION In var

// function abc(){
//     var x = 10;
//     var x = 20;   // redeclaration is allowed in var if we want to change the value of x
//     console.log(x);     //redeclaration is allowed only in same scope
// }
// abc();
// var x =5; 
// abc(); //20



// //REASSIGNMENT In var
// function abcd(){
// var y=45;
// //reassignment 
// y = 50; //reassignment is allowed in var
// console.log(y);
// }
// abcd();


// //Hoisting
// //a variable can be used before it has been declared 
// //Hoisting is JavaScript's default behavior of moving declarations to the top.

// function x(){
//     console.log(a); //undefined
//     var a = 10;
//     console.log(a); //10
// }
// x();



// //Let declaration
// //let is block scoped
// //let is not hoisted
// //let can not be redeclared
// //let can be reassigned
// function letDeclaration(){
//     let x = 10;
//     console.log(x);
//     //let x = 20; //error : redeclaration is not allowed in let
//     x = 20; //reassignment is allowed in let
//     console.log(x);
// }
// letDeclaration();



// //scope of let
// function letScope(){
//     let x = 10;
//     if(true){
//         let x = 20;
//         console.log(x); //20
//     }
//     console.log(x); //10
// }
// letScope();
// //let keyword redeclartion is not allowed in same scope
// //let keyword reassignment is allowed in same scope



// //reassignment in let
// function letReassignment(){
//     let x = 10;
//     x = 20;
//     console.log(x);
// }



// //hoistig in let
// //let is not hoisted
// function letHoisting(){
//     console.log(a); //error
//     let a = 10;
//     console.log(a);
// }
// letHoisting();


// //const declaration
// //const is block scoped
// //const is not hoisted
// //const can not be redeclared
// //const can not be reassigned
// function constDeclaration(){
//     const x = 10;
//     console.log(x);
//     //const x = 20; //error : redeclaration is not allowed in const
//     //x = 20; //error : reassignment is not allowed in const
// }
// constDeclaration();
// //const keyword redeclartion is not allowed in same scope
// //scoping in const
// function constScope(){
//     const x = 10;
//     if(true){
//         const x = 20;
//         console.log(x); //20
//     }
//     console.log(x); //10
// }


// //function
// //types of function : simple function 
// //simple function
// function simpleFunction(){
//     console.log("Simple function");
// }

// //function with loop
// function functionWithLoop(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
// }
// functionWithLoop();



// //function with parameters
// function functionWithParameters(a, b){
//     console.log(a+b);
// }
// functionWithParameters(10, 20);




//function with multiple parameters
// function functionWithMultipleParameters(a, b, c){
//     console.log(a+b+c);
// }
// functionWithMultipleParameters(10, 20, 30);




// //function with return
// function functionWithReturn(){
//     return "Hello";
// }
// console.log(functionWithReturn());




//aarow function
//arrow function is a short hand notation for function
//arrow function does not have its own this keyword
//arrow function does not have arguments object

//arrow functinn with single expression
// const sq = (x) => x*x;
// console.log(sq(5));


//arrow function with multiple expression
// const add = (a, b) => {
//     let sum = a+b;
//     return sum;
// }
// console.log(add(10, 20));


//arrow function with object literal
// const obj = (name, age) => ({
//         name: name,
//          age: age
//         });
// const person = obj("John", 25);
// console.log(person);


//use strict mode
// "use strict";
// console.log(this);              //window obj
// function strictMode(){
//     console.log(this);
// }
// strictMode();               //undefined
// window.strictMode();            //window obj
//when we use strict mode this keyword is undefined in function
//in strict mode this keyword is window object in function
//when you put refrenece it will give you window obj instrict mode also

//this keyword in object
// const obj = {
//     name: "John",
//     age: 25,
//     display: function(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }
// obj.display();


//call bind and apply(sharing of method)
//call
// const student= {
//     name: "John",
//     printName: function(){
//         console.log(this);
//     },
// };
// student.printName();
// const student2 = {
//     name: "Smith",
// };
// student.printName.call(student2);


//this keyword in arrow function
// const obj = {
//     name: "John",
//     display: () => {
//         console.log(this);
//     },
// };
// obj.display();            //window obj
//enclosing lexical context --> how this is written in code


// const obj = {
//     name: "John",
//     display: function(){
//         const inner = () => {
//             console.log(this);
//         };
//         inner();
//     },
// };
// obj.display();          //obj obj













//CLASS in JAVASCRIPT
// class Student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     printStudent(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }
// const student = new Student("John", 25);
// student.printStudent();


//inheritance in class
// class Car{
//     constructor(brand){
//         this.brand = brand;
//     }
//     display(){          //return a string which will describe the car
//         return "I am a " + this.brand;
//     }
// }

// class Model extends Car{
//     constructor(brand, model){
//         super(brand);
//         this.model = model;
//     }
//     show(){
//         return this.display() + " " + this.model;
//     }
// }
// const car = new Model("Ford", "Mustang");
// console.log(car.show());




//Array methods in ES6
//concat()
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);


//filter()
// const arr = [1, 2, 3, 4, 5];
// const arr1 = arr.filter((item) => item > 2);
// console.log(arr1);


// const arr = [1, 2, 3, 4, 5];
// const even = arr.filter((item) => item % 2 === 0);
// console.log(even);


//map()
// const arr = [1, 2, 3, 4, 5];
// const sq = arr.map((item) => item * item);
// console.log(sq);


// const arr = [1,2,3,4,5];
// const add1 = arr.map((item)=> item*2);
// console.log(add1);


//find()
// const arr = [1, 2, 3, 4, 5];
// const find = arr.find((item) => item > 2);
// console.log(find);


//array.from 
// const arr = "hello";
// const arr1 = Array.from(arr);
// console.log(arr1);



//copyWithin()
// const arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3);
// console.log(arr);


// //array.of
// const arr = Array.of(1, 2, 3, 4, 5);
// console.log(arr);


//entries()
// const arr = [1, 2, 3, 4, 5];
// const iterator = arr.entries();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);






//Modules in JS





