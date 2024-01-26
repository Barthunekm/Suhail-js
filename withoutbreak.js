var a = 5;

switch (a) {
    case 1:
        console.log('a is 1');
        break;
    case 2:
        console.log('a is 2');
        break;
    case 4:
        console.log('a is 4');
    case 5:
        console.log('a is 5');
    // if we dont use break then js will understand it as true 
    // and it will print the next number
    case 6:
        console.log('a is 6');
        break;
        default:
            console.log("break is required to cut the flow of code")    
}
console.log("end");