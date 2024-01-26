// print hello-world 5 times
for(var i = 0; i<5; i++) {
    console.log(i);
}
console.log("end")

// The above for loop is composed of 3 parts:
// 1. Initialization: var i = 0
// 2. Condition: i < 5 [if true, loop continues, else loop breaks]
// 3. Increment: i++ [i = i + 1]

// Let us explain each step in the loop until it hits the terminating condition
// 1. Initialization: var i = 0
// 2. Condition: i < 5 [if true, loop continues, else loop breaks]
// 3. Print the value of i; // 0
// 4. Increment: i++ [i = i + 1]
// 5. Condition i < 5 [if true, loop continues, else loop breaks]
// 6. Print the value of i; // 1
// 7. Increment: i++ [i = i + 1]
// 8. Condition i < 5 [if true, loop continues, else loop breaks]
// 9. Print the value of i; // 2

for (var i=0; i<10;i++){
    console.log(i);
}
console.log("end",i);
// it will print value of i  outside of loop because var is global variable--> // end 5

// loop will run for infinite times till battery runs out
for (var i=0; i<5 ;i++){
    console.log(i++);
}