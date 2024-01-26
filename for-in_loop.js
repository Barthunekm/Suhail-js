var students={
    sname: "kavita",
    age: 20,
    class: 'VII',
    city: "aurangabad"
}
//  using for-in loop 

for (var key in students){
   // console.log(key)
    console.log(key, "...", students[key])
}

//for-in loop is used when 
//1.you want to iterate over the properties of am object
//2. you dont care about the order

