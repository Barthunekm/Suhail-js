// in do while loop --- 1 loop is guaranteed irrespective of condition
// because in do first it executes then check for condition
var i=0;
do{
    console.log(i);
    i++;
}while(i<5)
console.log("end");
//break down of the steps od do-while loop
//1.initialization of the variable
//2.ececute the do block, everything that we want to execute will be placed inside do-while loop
//3.check the condition if the condition is true then go to step 2 else go to step 4


var j=10;
// here j is not less than given value-- j=11
do {
    console.log(j)
}while(j<5);

// print the table of 2
var k=1;
var l= 2;
do{
    result= (k*l);
    console.log(result);
    k++;
}while(k<=10);