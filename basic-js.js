/*
//Global var 
var global = "I am global"
console.log(global);

//local
function myLocal() {
    var local = "I am local"
    console.log(local);
}
//local();
//console.log(local); //error :  diff btw local and global ...
// local is declared inside the function so it is local to the function
// global is declared outside the function so it is global to the function


//REDECLARATION In var

function abc(){
    var x = 10;
    var x = 20;   // redeclaration is allowed in var if we want to change the value of x
    console.log(x);     //redeclaration is allowed only in same scope
}
abc();
var x =5; 
abc(); //20



//REASSIGNMENT In var
function abcd(){
var y=45;
//reassignment 
y = 50; //reassignment is allowed in var
console.log(y);
}
abcd();


//Hoisting
//a variable can be used before it has been declared 
//Hoisting is JavaScript's default behavior of moving declarations to the top.

function x(){
    console.log(a); //undefined
    var a = 10;
    console.log(a); //10
}
x();



//Let declaration
//let is block scoped
//let is not hoisted
//let can not be redeclared
//let can be reassigned
function letDeclaration(){
    let x = 10;
    console.log(x);
    //let x = 20; //error : redeclaration is not allowed in let
    x = 20; //reassignment is allowed in let
    console.log(x);
}
letDeclaration();

*/

//scope of let
function letScope(){
    let x = 10;
    if(true){
        let x = 20;
        console.log(x); //20
    }
    console.log(x); //10
}
letScope();


