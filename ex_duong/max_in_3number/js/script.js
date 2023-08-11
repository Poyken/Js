var max = function (a, b, c) {
  a = a > b ? a : b;
  return c > a ? c : a;
};
console.log(max(7, 5, 2));
