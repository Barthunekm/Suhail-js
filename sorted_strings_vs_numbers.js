// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//let arr= [3, 56, -1, 0, -45, 899, 78]
//let sorted= arr.sort();

let arr = ["oranges", "apples", "aaples", "bananas"];
let sorted = arr.sort(); 
// sort function sorts the array in lexographical order
// which means it will sort the array as if it is a string
// so the output will be [-1, -45, 0, 3, 56, 78, 899]
// because -1 comes before -45, 0 comes before 3, etc.

console.log(sorted);

let array1 = [3, 56, -1, 0, -45, 899, 78]
let sorted1 = array1.sort((a , b)=> a - b );
console.log(sorted1);
// a - b means ascending order
// b - a means descending order