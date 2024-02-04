var students = [
  {
    name: "MMK",
    marks: {
      math: 100,
      cs: 100,
      eng: 100,
    },
  },
  {
    name: "NNTH",
    marks: {
      math: 10,
      cs: 60,
      eng: 20,
    },
  },
  {
    name: "HA",
    marks: {
      math: 10,
      cs: 60,
      eng: 20,
    },
  },
];

var answer = students.filter(function (a) {
  if (a.marks.math + a.marks.cs > 150) {
    return true;
  }
});

console.log(answer);

for (var i = 0; i < students.length; i++) {
  if (students[i].marks.math + students[i].marks.cs > 150) {
    console.log(students[i]);
  }
}

//students[0].marks[m[i]] 100

// for (var j = 0; j < students.length; j++) {
//   var m = Object.keys(students[j].marks);
//   var sum = 0;
//   for (var i = 0; i < m.length; i++) {
//     if (m[i] == "math" || m[i] == "cs") {
//       var module = students[j].marks[m[i]];
//       sum = sum + module;
//     }
//   }
//   if (sum > 150) {
//     console.log(sum);
//   }
// }

// var totalHigherThan150 = students.map(function (a, i) {
//   if (i == 0 || i == 1) {
//     return Object.values(a.marks);
//   }
// });

// for (var i = 0; i < students.length; i++) {
//   for (var j = 0; i < students.marks.length; j++) {
//     console.log(Object.keys(students[i].marks));
//   }
// }

// var totalHigherThan150 = students.filter(function (x) {
//   var totalMarks = Object.keys(x.marks).filter(function (a) {
//     if (x.marks == "math" && x.marks == "cs") {
//       return true;
//     }
//   }, 0);
//   if (totalMarks >= 150) {
//     return true;
//   }
// });

// console.log(totalHigherThan150);

// [
//   {
//     name: 'MMK',
//     marks: [100, 99, 98, 87],
//   },
// ]
