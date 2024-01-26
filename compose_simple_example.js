function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sin(theta) {
    return Math.sin(theta);
}

function cos(theta) {
    return Math.cos(theta); 
}

function composeExample(arg1, arg2) {
    var x = 1;
    var y = 2;

    var result1 = arg1(x, y); // Call arg1 function (e.g., sum) with (1, 2) -> 3// 3
    var result2 = arg2(x,y); // Call arg2 function (e.g., subtract) with (1, 2) -> -1// -1

    return result1 * result2; // Return the product of results (3 * -1) -> -3
}

console.log(composeExample(sum, subtract)); // Should log -3
console.log(composeExample(sin, cos)); // Should log a value based on sine and cosine functions --0.4546487134128409