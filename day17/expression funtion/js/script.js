// var getmessage = function () {
//   //content
//   return "Nguyen Duc";
// };
// // var getmessage = "f88";

// if (typeof getmessage === "function") {
//   console.log(getmessage());
// } else {
//   console.log(getmessage);
// }

//iife
// (function (name) {
//   console.log(getmessage(), name);
// })("f88");

// var sum = function () {
//   console.log(arguments);
//   //   arguments khong hoat dong trong arrow function cua es6
// };
// sum("nguyen", "van", "duc", 4, 5);
// var getTotal = function (msg, ...args) {
//   console.log(msg);
//   console.log(args);
// };
// getTotal("tong ", 1, 2, 3, 4, 5);
// [1,2,3,4,5] la mang

// var a = function (name) {
//   console.log(`hoang an :${name}`);
// };
// a("f8");
// var b = a;
// b("f8");
// c = b;
//js
// c("f88");

//xu ly bat dong bo trong js bang cach callback

// var getA = function (fn, ...args) {
//   console.log("getA chay xong roi");
//   if (typeof fn == "function") {
//     fn(...args); //spread
//   }
// };
// var getB = function (name) {
//   console.log("duoc roi den getB chay", name);
// };
// var getC = function (fn) {
//   console.log("getC chay truoc getB");
//   fn();
// };
// // getA(() => {
// //   getC(getB);
// // });

// var callgetB = function () {
//   getB("lay ham khong tham so goi ham co tham so la getB log ra ");
// };
// // getA((_) => getB("F8999"));
// getA(callgetB);
// //cach 1
// //cach 2
// getA(
//   function (name, email) {
//     console.log("getB", name, email);
//   },
//   "duc",
//   "duc011002"
// );
// //time delay function
// setTimeout(
//   function (name, email) {
//     console.log("xin chao f8", name, email);
//   },
//   1000,
//   "duc",
//   "duc@gmail.com"
// );
// //loop bang setinterval
// var count = 0;
// var id = setInterval(function () {
//   console.log(`xin chao ${++count}`);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

// var showmessage = function (name) {
//   //   console.log("xin chao");
//   var display = function () {
//     console.log("chao", name);
//   };
//   display();
// };
// showmessage("f8");
//ham con duoc su dung doi so cua ham cha
//ham con chi duoc goi trong ham cha khong duoc goi ngoai ham
//ham con duoc su dung bien toan cuc,cuc bo,tham so cua 2 ham,bien cua bo cua chinh no

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};
// console.log(sum(10)(20));
var add = sum(10);
var result1 = add(10);
console.log(`result1= ${result1}`);
var result2 = add(20);
console.log(`result2= ${result2}`);

console.log(add(50));
console.log(add(80));
