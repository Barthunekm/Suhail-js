let list=[1,2,3,4,5,6]
let newList=[];
 // adding +1 in array using forloop
 for (let i=0; i<list.length;i++){
    const newNumber=list[i]+1
    newList.push(newNumber);
 }
 console.log(newList); //[ 2, 3, 4, 5, 6, 7 ]
// trying another function using mapfunction 
 let number=[1,2,3,4,5]
 let multiply=[];
 //we can use a map function to achieve this
// map function takes a callback function as an argument
// and returns a new array

 let result = number.map(function(item){
    return item*2
})
console.log(result); //[ 2, 4, 6, 8, 10 ]

//MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map