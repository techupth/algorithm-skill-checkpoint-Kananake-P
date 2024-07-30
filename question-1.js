function findStudentById(students, id) {
  // Your code here
  let result = null;
  for (let n = 0; n < students.length; n++) {
    if (students[n].id === id) {
      return (result = students[n]);
    }
  }
  return result;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
