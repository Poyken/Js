var snt = function (n) {
  for (var i = 2; i < n; i++) {
    return n % i === 0 ? false : true;
  }
};
var n = 17;
if (n === 2 || n === 3) console.log(true);
else console.log(snt(n));
