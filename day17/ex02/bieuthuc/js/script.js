var bt = function (n) {
  if (n === 0) return 0;
  return n * (n + 1) + bt(n - 1);
};
console.log(bt(4));
