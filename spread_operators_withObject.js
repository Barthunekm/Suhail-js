let student={
    name:"john",
    age: 23,
    city: "paris"
}

let studentParentDetails={
    father: 'mike',
    mother:'janet'
}

let studentDetails={
    // using spread operators here(...) 3 dot is spread operator
    ...student,
    ...studentParentDetails
}

console.log(studentDetails);