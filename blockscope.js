//var is global scope
if(3>2){
    //all the variable declared using var are hoisted to the top of file / function
    // var is global scope
  // since var gas "global scope" js treats it as accessible from anywhere
    var a= 5; // output--- 5
}
console.log(a);

// if(4>3){
//     // let is block scope varible
//     //it creates a block scope variable
//     let c = 5;

// } // a is not accessesible since it is outside the scope
//  console.log(c) // a is not defined

 if (3>2){
    let a=5;
    console.log(a) // 5
    let b= a+10;
    console.log(b); //15
    var sum= a+b
 }
   console.log(sum); //20
