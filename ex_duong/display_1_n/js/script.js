var display = function (n) {
  if (i <= n) {
    console.log(i);
    i++;
    display(n);
  }
  return "";
};
var i = 1;
console.log(display(100));
