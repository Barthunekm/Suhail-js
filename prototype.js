function animal(){
    this.walk= function(){
        console.log("i am wallking")
    }
    this.legs=function(){
        console.log("i have 4 legs")
    }
}

function Herbivore(){
    this.eat=function(){
        console.log("i eat only plants")
    }
}

Herbivore.prototype=new animal();
const rabbit=new Herbivore();
rabbit.walk();