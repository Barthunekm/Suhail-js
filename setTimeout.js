// setTimeout is also a Async function  

setTimeout(function(){
      console.log("stating to download MP4")
},3000)

console.log("Staring to download of MP4");
console.log("starting now");

// another exaple to understand that unless until js executes synchronous code it will 
// not execute Asynchronous code 

setTimeout(function(){
    console.log("executes after sync execution completes ")
})
while(true){
   console.log("this executes first coz its sync code")
}