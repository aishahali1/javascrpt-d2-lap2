const students = ["Omar","Ali","Ahmed","Rahaf","rand","Shahad"]

let nameLength1 = students.filter((students) => students.length>4)
console.log(nameLength1);

let nameUpperCase = students.map((student) => student.toUpperCase(student))
console.log(nameUpperCase);

let namewithA = students.filter((student) => student.toUpperCase().startsWith("A"))
console.log(namewithA);

let namewithR1 = students.find((student) => student.toLowerCase().startsWith("r"))
console.log(namewithR1);

let sortedNames1 = students.toSorted((student) => student.toLowerCase());
console.log(sortedNames1);

let nameOmar = students.some((student)=>student.toLowerCase() ==="omar");
console.log(nameOmar);

let newStudent = students.filter((student)=> student.length % 2 == 0);
console.log(newStudent);

let studentsReverse = students.map((student)=> student.split('').reverse().join(' '))
console.log(studentsReverse);

let omitName = students.filter((student)=> !student.toLowerCase().includes('o'))
console.log(omitName);


