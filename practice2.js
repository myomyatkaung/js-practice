var students = [
  {
    name: 'MMK',
    totalMarks: 140,
    numModules: 3,
  },
  {
    name: 'NNTH',
    totalMarks: 150,
    numModules: 3,
  },
  {
    name: 'HA',
    totalMarks: 110,
    numModules: 3,
  },
];

// {
//     name: 'MMK',
//     avgMarks: 46.667
// }

var avgList = students.map(function (a) {
  return {
    name: a.name,
    avgMarks: a.totalMarks / a.numModules,
  };
});

console.log(avgList);
