var mmk = {
  modules: {
    OS: {
      grade: "A+",
      tutor: "KW Bel",
    },
    SE: {
      grade: "B",
      tutor: "Nay Toe",
    },
    MDDP: {
      grade: "C",
      tutor: "Ko Nay Ko Toe",
    },
  },
};

for (i = 0; i < Object.keys(mmk.modules).length; i++) {
  console.log(
    " Modules: " +
      Object.keys(mmk.modules)[i] +
      " Grades: " +
      mmk.modules[Object.keys(mmk.modules)[i]].grade +
      " Tutor: " +
      mmk.modules[Object.keys(mmk.modules)[i]].tutor
  );
}

console.log(Object.values(mmk.modules["MDDP"]));
