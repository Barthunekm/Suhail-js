var student ={
    name: "manoj",
    age:20,
    course:"cse",
    college:"csve",
    parentNameList:['girish','sarita']
}
// converting string to JSON 
var convertedToString =JSON.stringify(student);
  console.log(convertedToString);
  // output---{"name":"manoj","age":20,"course":"cse","college":"csve","parentNameList":["girish","sarita"]}

  // now convert JSON to object --->
  var convertedToObject = JSON.parse(convertedToString);
   console.log(convertedToObject);