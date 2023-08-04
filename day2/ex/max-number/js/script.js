function display(a, b) {
  console.log(`a=${a}, b= ${b}, c=${c}`);
}
function max(a, b, c) {
  a = a > b ? a : b;
  return a > c ? a : c;
}
var a = 2,
  b = 1,
  c = 3;
display(a, b, c);
console.log(max(a, b, c));
