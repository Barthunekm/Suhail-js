/**
 *  const name = 'Rex';
    const age = 2;
    const color = "brown";
    function description() {
        console.log(
            `This is ${name}, he is ${age} years old and his color is ${color}`
        )
    }
    description();
    // This is an example of functional programming. 
    // The function description is a pure function. 
    // It does not depend on any external variables. 
    // It only uses the variables that are passed
    // to it as arguments. This is a good practice. 
    // It makes the code more readable and easier to maintain. 
    // It also makes the code more testable.
 */
function dog (){
    const name= " rex"
    const age= 2;
    const color= "brown"

    function description(){ //back ticks `` should be use in console instead of " "--> double quotes
        console.log(`This is ${name}, he is ${age} years old and his color is ${color}`)
    }

    function makeSound(){
        if (age <2){
            console.log("barf...barf")
        } else {
                console.log("woof... woof")
            }  
    }
    function dogDiet(){
        if (age < 2){
            console.log("only eats small chicken piece")
        } else {
            console.log("eats bones")
        }
    }
    return{
        description: description,
        makeSound: makeSound,
        message : " hello",
        dogDiet: dogDiet    

    }

}
const myPet= dog(); // call to Dog returns an object; hence myPet is an object
 myPet.description();
 myPet.makeSound();
 console.log(myPet.message)
 myPet.dogDiet();