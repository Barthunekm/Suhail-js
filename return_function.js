// return must return something
// return can return values , booleans ---> whatever  we will provide in return

function sum(a, b) {
  let sum = a - b;
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
let x = sum(600, 200);
console.log(x);
let y = sum(10, 100);
console.log(y);

isUserLoggedIn();
 