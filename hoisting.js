console.log(x);
var x=1;
// Here x is undefined
// because JavaScript hoists declarations
// which means that the declaration is 
// automatically moved to the top of 
// the current scope

greet();
// greet function is hoisted
// only because of hoisting we can call 
// the function before declaring it

function greet() {
    console.log("Hello..!");
}
console.log(y);

let y = 1;
// y is not hoisted
// because it is declared using let
// let and const are not hoisted--------> IMP
// only var is hoisted