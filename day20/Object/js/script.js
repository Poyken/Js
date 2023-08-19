// var user = {
//   name: "van duc",
//   email: "duc@gmail.com",
//   getName: function () {
//     console.log(this);
//     var currentUser = this;
//     return {
//       age: 20,
//       getInfo: function () {
//         console.log(this);
//         return `Name: ${currentUser.name}
//                 Email: ${currentUser.email}`;
//       },
//     };
//   },
// };
// console.log(user.getName().getInfo());
Object.prototype.combine = function (...args) {
  //   console.log(this);
  //rest paras :tham so con lai
  var currentUser = this;
  var newArr = args.map(function (key) {
    return currentUser[key];
  });
  return newArr;
};

var user = {
  name: "van duc",
  email: "duc@gmail.com",
};
console.log(user.combine("name", "email"));

// console.log(user);
Object.prototype.message = "ban";
var fullName = "nguyen van duc";
console.log(fullName.message);
Array.prototype.welcome = "chao mung";
var a = [];
console.log(a.message);
console.log(a.welcome);
