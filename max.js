let list=[1,2,100,-1,0,999,55,65];
// assume max number as 1--> assumption
let maxNumber=list[0];
let minNumber=list[0];

for(let i=0; i<list.length;i++){
    if (list[i]>maxNumber){
        maxNumber=list[i]
    }
}
console.log(maxNumber);
// step1= 1st max number is 1; 1>1--> false
//step2=  now 2 is max number is 1--> 2 > 1----> true
// loop will continue till lenght of maxnumber

for(let j=0; j<list.length; j++){
    if (list[j]<minNumber){
        minNumber=list[j]
    }
}
console.log(minNumber);