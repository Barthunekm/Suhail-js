var numberD= 100 // number
var numberE ="100" // string
var numberF= 101; //number
var numberG = 100 // number
 // == --> double equality checks for values only

var result5= numberD == numberE; // 100 == 100
console.log(result5); // true

var result6 = numberD === numberE  //100 === "100" 
console.log(result6) ;
// === --> triple equality checks for data and the value present 

var result7 = numberD === numberF // 100 === 101
console.log(result7);
// again its false though  type is number  but value is not same

result8 =numberD === numberG // 100 === 100
console.log(result8);


