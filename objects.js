// objects always containsv key value pair 

var manish= {
    name : 'manish',
     age : 25,
     city: 'banglore',
     employee: true,
     id : 1,
     skills: ['html','css','js'],
     keyName: 'value'
}

console.log(manish)

// to access property of manish object we use (.) operator 
// first declare the variable then add property name then add . operator
var name= manish.name;
var age= manish.city;
console.log(name, age);

var age= manish["age"];
console.log(age);
//var allKeys= Object.keys(manish);
//var  allValues= Object.Values(manish);
///////

var cat ={name :'kitty',
          color : 'black',
          age : 2,
         isHungry : true

}
console.log(cat);
