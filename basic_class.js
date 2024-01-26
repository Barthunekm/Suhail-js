// without construcotr we are creating objects like this
// var dog = {
//     name: 'Rex',
//     age: 2,
//     color: "brown",
// }


// here class is dog --- we creating constructor

function dog (name, breed, color){
  this.name= name;
   // this keyword refers to the current object
    // this is the object that is created when the 
    // function is called with new keyword
  this.breed=breed;
  this.color=color

}// whenever you use this keyword inside a function 
// the function is called constructor function
// and the name of the function is the class name
// we are initializing the class objects
 var rex = new dog('rex','streetDog', 'white')
 console.log(rex); ///dog { name: 'rex', breed: 2, color: 'white' }
 const lassie = new dog('Lassie', 'Collie', 'white');
const buzo = new dog('Buzo', 'Labrador', 'black');
console.log(lassie);
console.log(buzo);
 