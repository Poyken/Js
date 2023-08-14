//lay ten trong ho va ten
var fullname = "ta hoang an";
// console.log(fullname);
var firstname = fullname.split(" ").slice(-1).join();
// console.log(firstname);//an
//sap xep danh sach khach hang tang dan theo ten
var customers = [
  "nguyen dai the",
  "nguyen hoang duong",
  "nguyen van duc",
  "vu duc tai",
  "dang ngoc son",
  "tran cong luc",
  "nguyen hoang anh",
];
// console.log(customers);
// var result = [];
// for (var i = 0; i < customers.length; i++) {
//   result[result.length] = customers[i].split(" ").slice(-1).join();
// }
// console.log(result);
// result.sort();
// console.log(result);
// for (var i = 0; i < result.length; i++) {
//   if (result[i] === customers[i].split(" ").slice(-1).join()) {
//     result[i] = customers[i];
//   }
// }
// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };
// customers.sort(function (a, b) {
//   //   console.log((a, b));
//   //   a=sau
//   //   b=truoc
//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//     //return ve so <0 thi se doi cho a,b
//   }
// });
// console.log(customers);
//tim kiem danh sach khach hang theo tu khoa
var keyword = "hoang";
var result = customers.filter(function (custom) {
  return custom.toLowerCase().includes(keyword.toLowerCase());
});
console.log(result);
