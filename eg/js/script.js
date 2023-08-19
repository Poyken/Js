// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// result = arr.map(function (element) {
//   return element;
// });
// console.log(result);

// Object.prototype.message = "fullstack";
// var user = {
//   name: "user",
//   email: "user@example.com",
// };
// for (var key in user) {
//   console.log(key);
// }

// Object.keys(user).forEach(function (key) {
//   console.log(key);
// });

// var query = {
//   name: "full name",
//   email: "fullname@example.com",
//   categories: 1,
// };
//chuyen object tren thanh dang query string
//name= full+name&email=fullname@example.com&categories=1

// console.log(Object.entries(query));

// var queryString = Object.entries(query)
//   .map(function (item) {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// viet lai vong lap map ten la map2
//y tuong
//lap qua arr push vao arr khac va return ve arr do

Array.prototype.map2 = function (fn) {
  var newArr = [];
  for (var index = 0; index < this.length; index++) {
    var value = this[index];
    var result = fn(value, index);
    newArr[newArr.length] = result;
  }
  return newArr;
};

var user = ["item1", "item2", "item3", "item4", "item5"];
var newArr = user.map2(function (user, index) {
  return `<h3>${user}-${index}</h3>`;
});
// console.log(user);
console.log(newArr);
