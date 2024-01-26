function sum(a, b) {
    return a + b;
}

function printSum() {
    return sum;
} // printSum is now a higher-order function
// because it returns a function as a result

// printSum() will return a function sum and then you 
// can make call from the returned value
// var s = printSum()
// s(1,2)

function printSumVersion2(arg) {
    // arg is now equivalent to sum
    var r = arg(5, 10);
    console.log(r);
} // printSumVersion2 is now a higher-order function
//because it takes a function as an argument

printSumVersion2(sum)