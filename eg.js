// function myFun(a, b, c) {
//   var sum = a + b;
//   return sum * c;
// }

// var myFun = function (a, b, c) {
//   var sum = a + b;
//   return sum * c;
// };

var myFun = (a, b, c) => {
  var sum = a + b;
  return sum * c;
};

// for (var i = 0; i < 10; i++) {
//   console.log(myFun(i, 2, 5));
// }

var i = 0;
while (i < 100) {
  i++;
  if (i % 3 == 0 && i % 5 == 0) {
    break;
  }
  console.log(i);
}
