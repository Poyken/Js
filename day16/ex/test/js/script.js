function test() {
  if ((a * b > 0 && a != 0) || b != 0) console.log(`${a} ${b} cung dau`);
  else console.log(`${a} ${b} khac dau`);
}
var a = -5,
  b = 3;
test();
