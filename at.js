var students = [
  {
    name: "MMK",
    modules: [
      {
        name: "cs",
        mark: 100,
      },
      {
        name: "math",
        mark: 100,
      },
      {
        name: "eng",
        mark: 90,
      },
    ],
  },
  {
    name: "NNTH",
    modules: [
      {
        name: "cs",
        mark: 10,
      },
      {
        name: "math",
        mark: 20,
      },
      {
        name: "eng",
        mark: 90,
      },
    ],
  },
  {
    name: "HA",
    modules: [
      {
        name: "cs",
        mark: 70,
      },
      {
        name: "math",
        mark: 10,
      },
      {
        name: "eng",
        mark: 20,
      },
    ],
  },
];

var answer = students.filter(function (student) {
  // filter out unwanted modules
  var targetModules = student.modules.filter(function (module) {
    if (module.name == "cs" || module.name == "math") {
      return true;
    }
  });

  // targetModules only contains math and cs with their respective marks

  // sum up all the marks for each student
  var sum = targetModules.reduce(function (prev, current) {
    return prev + current.mark;
  }, 0);

  if (sum >= 150) {
    return true;
  }
});

// var list = [
//   {
//     name: "htet",
//   },
//   { name: "aung" },
// ];

// list.map(function (l) {
//   console.log("l is ", l);
// });

console.log(answer[0].name);
