let i=0;
function greet (){
    i++;
    console.log("hello world ", i)
    if (i>=5){
        return;
    }
    // it is very important to have a base case
    // if you do not have a base case, you will
    // have an infinite loop
    // and your program will crash (stack overflow)
    
    greet();  // recursive call
    // recursion means a function calling 
    // itself
}

greet();