// function sum(a, b) {
//     return a + b;
// }

// const x = function sum(a, b) {
//     return a + b;
// }  // function expression
// // because it is assigned to a variable

const x = function (a, b) {
    return a + b;
} // anonymous function expression
// still a function expression because it is 
// assigned to a variable
// but it is anonymous because it does not have a name

console.log(x(1,2));
// anonymous means without a name