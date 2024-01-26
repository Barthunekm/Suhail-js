
 function greaterThan(n) {
    return function(m) {
        return m > n;
    };
}

var greaterThanTen = greaterThan(10);
var result1 = greaterThanTen(11)
console.log(result1) //true

var result2 = greaterThanTen(9)
console.log(result2) //false