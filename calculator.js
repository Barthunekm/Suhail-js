function calculator (operation, a, b){
    if(operation=="add"){
        return a+b;
    }else if(operation=="substract"){
        return a-b;
    }else if(operation=="multiply"){
        return a*b;
    }else if(operation=="divide"){
        return a/b
    }else {
        return "invalid operations"
    }
}
console.log(calculator("add",2,3)) // 5
console.log(calculator("substract",2,3)) //-1
console.log(calculator("multiply",2,3)) // 6
console.log(calculator("divide",2,3))  // 0.666666
console.log(calculator("modulus",2,3)) //invalid operations

// you cannot return multiple values in return statement
// return 3,56,6,----> wrong
// return 2,
//return 3 ;