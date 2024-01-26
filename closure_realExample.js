function dog(){
    const name= "buzo";
    const age=3;
    const color="black";
    const sound ="woof";

    function bark(){
        console.log(sound);
    }

    function getAge(){
        console.log(age);
    }

    function getColor(){
        return color;
    }

   
return {
    bark: bark,
    getAge: getAge,
    getColor: getColor,
}
}
 var myDog= dog();

 myDog.bark();
 myDog.getAge();
  console.log(myDog.getColor());
