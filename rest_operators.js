let employee = {
    name: 'John',
    age: 30,
    salary: 1000
}

const {name, ...others} = employee;
// ...others means that all the other
//  properties of the object will be 
// stored in the others variable
// except the name property
// because we have already stored it in 
// the name variable
// ...others is called the rest operator
console.log(others);


const list = [1,2,3,4,5];
const [first, two, ...otherNumbers] = list;
console.log(otherNumbers)