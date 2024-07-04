// assign interface/type to the function definition properly
function findTopNames(students) {
    var a = students.filter(function (s) { return s.score > 8; });
    var b = a.map(function (n) { return n.name; });
    return b;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
