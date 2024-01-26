// proto is like inheritance


let livingThing={
    doesliveInfinity(){
        console.log("i dont live for infinitely")
    }
}
 let animal={
    eats: true,
    walk(){
        console.log("Animal walks")
    },
    __proto__: livingThing
 }
 let rabbit={
    jumps:true,
    __proto__: animal
 }

 console.log(rabbit.jumps);
 rabbit.walk();
 rabbit.doesliveInfinity();