var snt = function (n) {
  if (n < 2) return false;
  for (var i = 2; i < n - 1; i++) if (n % i === 0) return false;
  return true;
};
for (var i = 0; i < 100; i++) console.log(i, snt(i));
