// //tham chieu
// var a = {
//   name: "hoang an",
//   email: "hoangan@gmail.com",
// };
// // var b = a;
// console.log(a);
// // console.log(b);
// //sao chep object
// var b = Object.assign({}, a);
// //chi sao chep duoc cap ngoai cung cua object
// b.name = "hoang duc";
// console.log(b);
// var c = { ...a }; //chi duoc 1 cap
// console.log(c);
// //hoc sau=>co theo sao chep all
// var d = JSON.parse(JSON.stringify(a)); //sao chep duoc tat ca cac cap
// console.log(d);
//================================================================
// var a = ["hoang an", "hoangan@gmail.com"];
// var b = a;
// console.log(a);
// // console.log(b);
// // var b = a.map(function (a) {
// //   return a;
// // });
// // b = a.slice(0);
// // b = a.filter(function () {
// //   return true;
// // });
// // b = [...a];
// // b = JSON.parse(JSON.stringify(a));//.txt
// b[0] = "nguyen duc";
// console.log(b);
//Option chaining(?.)
// var a = {};
// console.log(a?.name?.job);

// var arr = ["duc", 1, 2, 3, { name: "duc", description: "sinh vien" }];
// if (arr?.length)
//   arr.forEach?.(function (item) {
//     console.log(item);
//   });

// console.log({} === {}); //[],funciton

// var a = { name: "duc", age: 21 };
// var b = { name: "duc", age: 21 };
// console.log(JSON.stringify(a) === JSON.stringify(b));
// //json la string dac biet
// var c = [1, 2, 3];
// var d = [1, 2, 3];
// console.log(JSON.stringify(c) === JSON.stringify(d));
// console.log(JSON.stringify(a));
// console.log(JSON.stringify(b));
// console.log(JSON.stringify(c));
// console.log(JSON.stringify(d));
