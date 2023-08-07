function display(a, b) {
  console.log(`a=${a}, b= ${b}`);
}
var a = 15;
var b = 10;
display(a, b);
a -= b;
b += a;
a = b - a;
display(a, b);
