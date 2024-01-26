// Input 5
// output 11
// (5 + 5) + 1

function multiply(n){
    return 2 * n
}

function add(n) {
    return n + 1
}


function compose(x, y) {
    // x = add
    // y = multiply
    return function(n) {
        // y(n) = 10
        return x(y(n))
    }
}

let multiplyAndAdd = compose(add, multiply)
var result = multiplyAndAdd(5)
console.log(result)