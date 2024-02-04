var students = [
  {
    name: 'John',
    age: 24,
    grades: [
      {
        module: 'Maths',
        marks: 80,
      },
      {
        module: 'English',
        marks: 90,
      },
    ],
  },

  {
    name: 'Alex',
    age: 22,
    grades: [
      {
        module: 'Maths',
        marks: 70,
      },
      {
        module: 'English',
        marks: 60,
      },
    ],
  },
];

for (i = 0; i < students.length; i++) {
  var sum = 0;
  for (j = 0; j < students[i].grades.length; j++) {
    sum = sum + students[i].grades[j].marks;
  }
  console.log('name: ' + students[i].name + ', totalMarks: ' + sum);
}

// name: John, totalMarks: 170
// name: Alex, totalMarks: 130
