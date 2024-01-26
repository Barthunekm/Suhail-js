function greet(name){
    return `hello ${name}`
}
function shout(anyfunc, name){
    const text = anyfunc(name)
    // toUpperCase is a built-in function of the
    // String object which returns the value of 
    // the string converted to uppercase (capital letters)
   // const shouttext=text.toUpperCase();
    return text;
}// here shout is a higher order function
// because it takes a function as an argument

var a= shout(greet, 'john');
console.log(a);