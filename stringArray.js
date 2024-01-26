// var students =["kavita",
//     "reema",
//     "divya",
//     "mohan",
//     "varun",
//     "spandan"];

//     var length= students.length
//     for(var i=0; i<length;i++){
//         var studentsName= students[i]
//         //console.log(studentsName);
//         console.log(studentsName[1]);
//     }

var students = [
    "Sudarshan", // 0th index
    "Anish", // 1st index
    "Chinmay", // 2nd index
    "Rahul", // 3rd index
    "Tushar",
    "Syed",
    "Sudarshan",
    "Subhrojoti"
];
console.log(students.length);
// students[0] -> "Sudarshan"
// students[1] -> "Anish"
// students[2] -> "Chinmay"
var length = students.length;
for(let i = 0; i < length; i++) {
    var studentName = students[i];
    // printing the character from all name ---> index [1] -- will print 1st character from every name 
   // console.log(studentName[1]);
   // console.log(studentName);
   //studentName[studentName.length - 1]
   //console.log(studentName.length-1);
   var lastcharacter=studentName.charAt(studentName.length-1);
   console.log(lastcharacter);
   
}