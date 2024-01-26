// closure is a function having access to the parent scope

function greet(){
  var  mesaage="good evening";

  function sayHi()
{
    console.log(mesaage)
}// Here closure is created, 
    // sayHi function has access to message variable
   return sayHi;
}// greet function is returning another function named sayHi
// sayHi is a function declared inside greet function
var fn = greet();
// returns sayHi function
fn(); // sayHi function is called

console.log(message); // message is not accessible here
// because message is not in the global scope
// the reason it is not in the global scope is because
// greet function has returned and it's execution context
// has been removed from the stack

// message here is also the private variable
// we call it as a private variable because it is not
// accessible outside the greet function