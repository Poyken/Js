//khai bao mang
// var users = [];
// console.log(users, typeof users);
// var users = new Array();
// console.log(users, typeof users);

// console.log(Array.prototype);

// console.log([Array]);

// //kiem tra 1 bien co phai la mang khong
// console.log(Array.isArray(users));
// console.log(users.length);

var users = ["a", "b", "f", "g", "h", "c", "d", "e"];
console.log(users);

// //lay so luong phan tu
// console.log(users.length);
// //truy cap 1 phan tu cua mang
// console.log(users[0]);
// console.log(users[1]);
// //them phan tu moi vao mang
// users[users.length] = "x1";
// users[users.length] = "y1";
// users[users.length] = "z1";
// //sua phan tu
// users[1] = "van duc";
//duyet mang
// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (var index in users) {
//   console.log(users[index]);
// }

// for (var index of users) {
//   console.log(index);
// }

// xoa mang
// var indexDel = 2;
// var newArray = [];
// for (var index in users) {
//   if (+index === +indexDel) continue;
//   newArray[newArray.length] = users[index];
// }
// console.log(newArray);
//them 1 phan tu vao dau mang
// var customers = [1, 2, 3, 4];
// var value = 0;
// var newArray = [];
// // newArray[0] = value;
// newArray[newArray.length] = value;
// for (var index in customers) {
//   newArray[newArray.length] = customers[index];
// }
// console.log(newArray);

// //
// var arr = [];
// arr["a"] = "nguyen";
// arr["b"] = "van";
// arr["c"] = "duc";
// console.log(arr);
// for (var key in arr) {
//   console.log(arr[key]);
// }
console.log(Array.prototype);
console.log(users);

//lay phan tu mang theo index at()
console.log(users.at(0));
//concat -noi mang va tra ve mang moi sau khi noi
console.log(users.concat([1, 2, 3], [4, 5, 6]));
console.log(users.concat("duc"));
//indexof(values)-tim vi tri xuat hien dau tien cua phan tu mang theo value
//neu khong tim thay tra ve -1
console.log(users.indexOf("g1"));
//lastindexof(values)-tim vi xuat hien cuoi cung

//include-tim phan tu trong mang va tra ve true false
console.log(users.includes("g1"));
//slice(start, end)--tra ve 1 mang bao gom cac phan tu tu start den end
console.log(users.slice(0, 3));

console.log(users.slice(4));
console.log(users.slice(-1));
// gop tat cac cac phan tu thanh 1 chuoi =join
console.log(users.join(""));

//cac phuong thuc thay doi mang ban dau
// //them phan tu vao cuoi mang va tra ve so luong sau khi them
// var count = users.push("duc", "nhat", "truong");
// console.log(count);
// console.log(users);

//them phan tu vao dau mang
// var counter = users.unshift("duc", "nhat", "truong");
// console.log(counter);
// console.log(users);

//pop xoa phan tu cuoi mang va tra ve gia tri phan tu vua xoa
// var value = users.pop();
// console.log(users, value);

//shift()- xoa phan tu dau mang
var value = users.shift();
console.log(users, value);
//reverse()- dao nguoc mang
console.log(users.reverse());

//sort sap xep mang theo thu tu tang dan
users.sort().reverse();

console.log(users);

// var number = [5, 10, 15, 2, 3, 4];
// number.sort(function (a, b) {
//   return a - b; //tang dan
//   //   return b-a=giam dan
// });
// console.log(number);

//cac phuong thuc lien quan den lap
//fill thay the tat ca cac phan tu thanh 1 gia tri
// users.fill("duc");
// console.log(users);

//foeach() duyet tung phan tu
//ko tra ve gia tri
//khong dung duoc

// users.forEach(function (user, email) {
//   console.log(user, email);
// });
//map()--duyet cac phan tu va tra ve 1 mang
var result = users.map(function (user, index) {
  console.log(user, index);
  return `<h3>${user} ${index}</h3>`;
});
console.log(result);
document.write(result.join(""));

//some()--tra ve true neu co 1 phan tu return ve true
//tra ve false neu khong co phan tu nao return ve true
// var check = users.some(function (user) {
//   if (user == "eh") return true;
// });
// console.log(check);

//every=true neu tat ca can phan tu deu true
//every=false neu it nhat 1 phan tu return ve false

// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var check = number.every(function (n) {
//   if (n % 2 != 0) return true;
// });
// console.log(check);

//fliter --tra ve 1 mmang
// //lay ra cac phan tu duoc return true
// var result = users.filter(function (user) {
//   if (user == "d" || user == "h") return true;
// });
// console.log(result);

//find--tra ve 1 phan tu cua mang
//thoa man dieu kien phan tu dau tien return true

var result = users.findLast(function (user) {
  if (user == "d" || user == "h") return true;
});
console.log(result);
