function printOpeningMessage(){
    console.log("welcome to coding")
}
function code(){
      printOpeningMessage();
    console.log("calling function from funtion")
}
function sum(a,b){
    code();
    console.log(a+b);
}

sum(1,2);
sum(3,4);
sum(5,4);
