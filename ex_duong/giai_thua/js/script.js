var giaithua = function (n) {
  if (n == 1) return 1;
  return n * giaithua(n - 1);
};
console.log(giaithua(6));
