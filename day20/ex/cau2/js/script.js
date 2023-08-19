// Làm phẳng array sau (Chuyển về mảng 1 chiều)

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// Kết quả
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var result = [];
for (var i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) console.log(arr[i]);
}
