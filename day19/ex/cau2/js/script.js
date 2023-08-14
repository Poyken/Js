var snt = function (n) {
  flag = true;
  if (n < 2) flag = false;
  else if (n === 2 || n === 3) flag = true;
  else
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
      flag = true;
    }
  return flag;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var result = arr.filter(function (a) {
  return snt(a);
});
console.log(result);
var max = result.reduce(function (a, b) {
  return a + b;
});
if (max === 0) console.log("Không có Số nguyên tố");
else console.log(max / result.length);
