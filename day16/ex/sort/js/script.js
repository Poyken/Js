var a = 2,
  b = 4,
  c = 1,
  temp;
console.log(a, b, c);
if (a >= c) {
  temp = a;
  a = c;
  c = temp;
} else if (a >= b) {
  temp = a;
  a = b;
  b = temp;
} else if (b >= c) {
  temp = c;
  c = b;
  b = temp;
}
console.log(a, b, c);
