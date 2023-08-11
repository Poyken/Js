var arr = [10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (var index in arr) {
//   if (arr[index] <= arr[0]) arr[0] = arr[index];
// }
// console.log(arr[0]);

var min = function (arr) {
  for (var index in arr) {
    if (arr[index] <= arr[0]) arr[0] = arr[index];
  }
  return arr[0];
};
console.log(min(arr));
