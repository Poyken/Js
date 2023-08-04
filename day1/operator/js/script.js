var a = 20,
  b = 10,
  //   c = parseInt(a) + parseInt(b);
  c = +a + +b;
// console.log(c);

var count = 10;
count++;
console.log(`Count=${count}`);

var count = 1;
var total = count++ + ++count + count++;
console.log(total);
//7
