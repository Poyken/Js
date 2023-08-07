var showNumber = function (n) {
  console.log(n);
  return n > 1 && showNumber(n - 1);
  //special note
};
// showNumber(10);

var total = function (n) {
  //   return n > 0 && total(n);
  if (n === 1) return 1;
  return n + total(n - 1);
};

var total2 = function (n) {
  return n > 0 && n + total2(n - 1);
  //special note
};
// console.log(total(10));
console.log(total2(10));

var fibonacci = function (n) {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// console.log(fibonacci(10));
