// ชื่อ:ธีธัช บุญธรรม รหัสนักศึกษา:660610764
interface Students{
  name: string;
  score: number;
}


// assign interface/type to the function definition properly
function findTopNames(students: Students[]) {
  let a:Students[] = students.filter((s:Students)=> s.score > 8);
  let b:string[] = a.map((n:Students)=> n.name);
  return b;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
