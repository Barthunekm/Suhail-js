// destructure of object

let employee = {
    name: 'John',
    age: 30,
    salary: 1000
}

// we used to access like this --- to get element from object
 //console.log(employee.name)

let {salary, name} = employee;
// this is an example of destructuring 
// assignment. We call this as destructuring
// because we are destructuring the object
// employee into two variables salary 
// and name
console.log(salary); // 1000
console.log(name); // John