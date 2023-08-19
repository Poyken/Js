var user = { name: "van duc", email: "duc@gmail.com" };
var customer = { name2: "duc nhat", email2: "nhat@gmail.com" };
//noi object customer vao user(khond dung ham co san,es6->)
// for (var key in customer) {
//   user[key] = customer[key];
// }
// console.log(user);

// var content = "There are many variations of passages of. ";
// //dem so lan xuat hien cua moi tu
// words = content
//   .replaceAll(",", "")
//   .replaceAll(".", "")
//   .replaceAll("!", "")
//   .split(" ");
// console.log(words);
// var result = {};
// words.forEach(function (word) {
//   if (!result[word.toLowerCase()]) result[word.toLowerCase()] = 1;
//   else result[word.toLowerCase()]++;
// });
// console.log(result);

// console.log(Object.assign(user, customer));

// tao object khong co prototype
var a = Object.create(null);
// var a = {};
console.log(a);
