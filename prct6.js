var studentList = [
  {
    name: "Gaung G",
    age: 23,
  },
  {
    name: "KW Bel",
    age: 23,
  },
  {
    name: "Ko Nay Toe",
    age: 24,
  },
];

var printingStudents = function () {
  for (i = 0; i < studentList.length; i++) {
    console.log(
      "Student name is " +
        studentList[i].name +
        " and the age is " +
        studentList[i].age +
        "."
    );
  }
};

var addStudent = function (name, age) {
  studentList.push({ name: name, age: age });
  console.log(" ");
  console.log("Successfully added a student");
};

printingStudents();
addStudent("Nway Nway Than Hlaing", 24);
console.log("-------------------------");
console.log("The new list of students: ");
console.log(" ");
printingStudents();
