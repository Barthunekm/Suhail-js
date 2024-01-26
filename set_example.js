let studentAgeList = [
    20, 21, 22, 20, 23, 25, 27, 22, 29, 30
];
console.log(studentAgeList)
// unique ages = [20, 21, 22, 23, 25, 27, 29, 30]

var ageSet = new Set();
// we use set when we want to store 
// unique values and we don't care about 
// the order
ageSet.add(20);
ageSet.add(21);
ageSet.add(22);
ageSet.add(20);
ageSet.add(20);
ageSet.add(20);
ageSet.add(20);
ageSet.add(25);

console.log(ageSet); //{ 20, 21, 22, 25 }
console.log(ageSet.has(20));//true
console.log(ageSet.size); //4-- unique numbers in given set

let listWithDuplicateValues = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10];
let uniqueValues = new Set(listWithDuplicateValues);
console.log(uniqueValues);

console.log(listWithDuplicateValues.length, "..", uniqueValues.size);

//MDN Set Page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set



