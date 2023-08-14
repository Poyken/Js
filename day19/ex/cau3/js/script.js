// var result = [];
// var result2 = [];
// for (var i = 0; i < arr.length; i++) {
//   if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) result.push(arr[i]);
// }
// console.log(result);
// for (var i = 0; i < arr.length; i++) {
//   if (result.includes(arr[i])) continue;
//   result2.push(arr[i]);
// }
// console.log(result2);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 3, 6, 5, 4, 7, 9, 12, 15, 15];
var result = [];
for (var index in arr) {
  if (result.includes(arr[index])) continue;
  result[result.length] = arr[index];
}
console.log(result);
