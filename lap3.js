let students = ["Omar","Ali","Ahmed","Rahaf","Rand","Shahad"]

let nameLength1 = students.filter((students) => students.length>4)
console.log(nameLength1);

let nameUpperCase = students.map((student) => student.toUpperCase(student))
console.log(nameUpperCase);

let namewithA = students.filter((student) => student.toUpperCase().startsWith("A"))
console.log(namewithA);

let namewithR1 = students.find((student) => student.toLowerCase().startsWith("r"))
console.log(namewithR1);

let sortedNames = students.toSorted();
console.log(sortedNames);