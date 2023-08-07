var bt = function (n) {
  if (n === 1) return 1;
  return 1 / n + bt(n - 1);
};
console.log(bt(3));
