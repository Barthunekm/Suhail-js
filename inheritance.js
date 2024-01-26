// we can also create varaible using /creating constructor  in base class--ie-- in animal class

class animal{
    constructor(){
        this.eyes= 2;
    }
    walk(){
        console.log("this animal walks")
    }

    legs(){
        console.log("i have for legs")
    }
} // All the common functionalities
// are represented in the class named Animal

class Herbivore extends animal{
     // Herbivore is a type of Animal
    // Using extends keyword, we can inherit
    // all the functionalities of Animal class
    eat () {
        console.log('i eat grass only')
    }
}
const rabbit= new Herbivore ();
rabbit.eat();
rabbit.walk(); // walk() is inherited from Animal class 
rabbit.legs(); // legs() is inherited from Animal class

class homeRabbit extends Herbivore {
    home(){
        console.log(" home rabbit stays at home");
    }
}

var homeR= new homeRabbit();
homeR.home();
homeR.eat();
homeR.walk();
// calling varaible from base class
 console.log(homeR.eyes);
