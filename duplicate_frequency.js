//we have to get the frequency of numbers here,
//The goal is to count how many times each unique value appears in the array.
let listWithDuplicateValues = [1,1,1,1,2,3,4,5,6,5];
let frequencyMap = {};
/**
 * { // basically it would be key value pair 
 *  1:4,--> 1 is key and 4 is frequency
 *  2: 1,
 *  3: 1
 * }
 */
for(let i = 0; i < listWithDuplicateValues.length; i++) {
    let item = listWithDuplicateValues[i];
    let itemFromFrequencyMap = frequencyMap[item];// Here we are trying to get
    // the item from the frequency map
    // here item is the key and frequencyMap[item] is the value

    if(itemFromFrequencyMap) { // this if statement will be true if the item 
        // is not undefined (which means that the item is already present in the frequency map)
        frequencyMap[item] = itemFromFrequencyMap + 1;
        // This means that the item is already present in the frequency map
        // and we need to increment the frequency
    }else {
        frequencyMap[item] = 1; // This will be the initial frequency
    }
}
console.log(frequencyMap) //{ '1': 4, '2': 1, '3': 1, '4': 1, '5': 2, '6': 1 }