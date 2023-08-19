var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
// [1,2]
var diff = arrA.reduce(function (prev, current) {
  //   if (arr2.includes(current)) {
  //     prev.push(current);
  //   }
  arrB.includes(current) && prev.push(current);

  return prev;
}, []);
console.log(diff);
//noi 2 mang va su dung include van duoc
