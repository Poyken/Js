var arr = [4, 7, 5, 3, 6, 8, 9, 2];
var max = arr.reduce(function (pre, cur) {
  return pre > cur ? pre : cur;
});
var min = arr.reduce(function (pre, cur) {
  return pre < cur ? pre : cur;
});

var result1 = arr.findIndex(function (arr) {
  if (arr === max) return true;
});
var result2 = arr.findIndex(function (arr) {
  if (arr === min) return true;
});
console.log(arr);
console.log("max=", max);
console.log("min=", min);
console.log("index of max=", result1);
console.log("index of min=", result2);
console.log("=====================");
