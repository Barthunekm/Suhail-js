let arr=[1,2,3,4,5]
// normally to call value inside array we use index 
console.log(arr[0]);    //1
console.log(arr[1]);    //2
console.log(arr[2]);   //3
console.log(arr[3]);   //4
 
// other way is to use destructuring 
console.log("---------------")
const [f,s,t,fo,fifth]=arr;
console.log(f);
console.log(s);
console.log(t);
console.log(fo);
console.log(fifth);