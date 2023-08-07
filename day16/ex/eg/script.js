function display(a, b, c) {
  console.log(`a=${a}, b=${b}, c=${c}`);
}
var a = 10,
  b = 15,
  c = 5;
display(a, b, c);
function swap(a, b) {
  var temp;
  temp = a;
  a = b;
  b = a;
  display(a, b, c);
}
swap(a, b);
