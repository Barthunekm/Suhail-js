let numbers =[200,44,67,999,1334,0,-1,-2,76]
 /*let sorted=numbers.sort(); //// by default sort sorts in ascending order
 console.log(sorted);
console.log(sorted[0])*/

// another way to write sorted 
let sorted= numbers.sort((a,b)=> a-b);
console.log(sorted);
// when a - b > 0, this means a > b, so a should be after b
// which means that larger number a should be after smaller number b
console.log(sorted[0]);

let sortedDesc = numbers.sort((a, b) => b - a); // sort in descending order
// when b - a > 0, this means b > a, so b should be after a
// which means that larger number b should be after smaller number a
// which will by default mean descending order
console.log(sortedDesc)