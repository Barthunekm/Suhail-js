// (&& : and operator)
//True && true ==True
// True && false== False
// false && true == False
// false && False== False


if(3>2 && 4>3){ //True && true ==True --> both needs to be true
    console.log("both are true")
}
if (3>2 && 4<3 ) { // True && false== False
     // one is true then still it wont execute
    console.log("one is true")

}
//----------------------------------------------------
// OR Operators 

// True || True == True
// True || false == True
// False  || True == True
// False || False == False 

if(3>2 ||  4<3 )
{  // if any one condition is true then it will execute
  // True || True == True
  console.log("one is true")
}

if(3>2 || 4 < 3){
    // True || false == True
    console.log("one is true")
}

var number= 20;

if (number % 2== 0){ 
// % is  the modules operator 
//if the remainder of the number is divided by 2 is 0 then its is even
    console.log("true")
}else{
    console.log("false")
}
