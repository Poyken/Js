// Làm phẳng array sau (Chuyển về mảng 1 chiều)

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// Kết quả
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var result = [];
for (var i = 0; i < arr.length; i++) {
  if (!Array.isArray(arr[i])) {
    result.push(arr[i]);
  } else if (Array.isArray(arr[i])) {
    for (var j = 0; j < arr[i].length; j++) {
      if (!Array.isArray(arr[i][j])) result.push(arr[i][j]);
      else {
        for (var k = 0; k < arr[i][j].length; k++)
          if (!Array.isArray(arr[i][j][k])) result.push(arr[i][j][k]);
          else
            for (var l = 0; l < arr[i][j][k].length; l++)
              result.push(arr[i][j][k][l]);
      }
    }
  }
}
console.log(arr);
console.log(result);
