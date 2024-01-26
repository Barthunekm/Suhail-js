function sum(a, b) {
    let sum = a + b;
    return sum;
    // role of return is to "return" the 
    // value of sum to the caller
}

function isUserLoggedIn() {
    let user = {
        name: "John",
        loggedIn: true
    }
    return user.loggedIn;
}

// let x = 300
// or to write this using function you can 
// write as follows
let x = sum(100, 200);
console.log(x);
let y = sum(10, 100);
console.log(y);

let arr=[3,56,-1,0,-45,899,78]
let sorted =arr.sort(); // by default this sorts in ascending order
console.log(sorted);
 
let arr1=[3,56,-1,0,-45,899,78]
let sorted1= arr.sort((a,b)=>a-b);
console.log(sorted1)