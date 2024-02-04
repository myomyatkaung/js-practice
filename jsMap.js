var list = [2, 3, 7, -10];

var list2 = [];

for (var i = 0; i < list.length; i++) {
  list2[i] = list[i] + 1;
}

// console.log('list2', list2);

var list3 = list.map(function (l) {
  return l * 2;
});

var divisibleBy3 = list.filter(function (l) {
  if (l % 3 == 0) {
    return true;
  }
});

var sum = list.reduce(function (prev, l) {
  return prev + l;
}, 0);

console.log('divisibleBy3', divisibleBy3);
console.log('sum', sum);
