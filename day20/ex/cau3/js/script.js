// Tách phần tử trong mảng theo đúng kiểu dữ liệu

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
// Kết quả

// [["a", "b"], [1, 2], [true, false]]

var result = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    result.push(arr[i][j]);
  }
}
var string = result.filter(function (a) {
  if (typeof a === "string") return true;
});
console.log(result);
