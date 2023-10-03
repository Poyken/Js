// /arrow function
//1.khong co tham so
// const getMessage = () => {
//   console.log("van duc");
// };
// getMessage();
//2. co 1 tham so
// const getMessage = (msg) => {
//   console.log(msg);
// };
// getMessage("van duc");

//3.co nhieu tham so
// const getTotal = (a, b, c = 5) => {
//   return a + b + c;
// };
// console.log(getTotal(1, 2));

//4.arrow function co return
// const getTotal = (a, b, c) => a + b;
// console.log(getTotal(1, 2));

var getUser = () => ({
  id: 1,
  name: "duc",
});
// console.log(getUser());

//5.closure su dung arrow function
// var getHome = () => ({
//   name: "home",
// });
// console.log(getHome());

var sum = (a) => (b) => a + b;
var add = sum(10);
// console.log(add(20));

const users = [
  {
    id: 1,
    name: "Nguyen Van A",
  },
  {
    id: 2,
    name: "Nguyen Van B",
  },
  {
    id: 3,
    name: "Nguyen Van C",
  },
];
const html = users.map((user) => `<h2>${user.name}</h2>`).join("");
document.body.innerHTML = html;
/**
 Luu y voi arrow function :
 -arrow function khong co tac dung thay the function truyen thong
 -arrow function khong binding duoc this
 -arrow function khong binding duoc arguments
 -arrow function khong nen su dung se lam method cua obj
 -arrow function khong co hoisting
 -arrow function khong duoc dung de tao constructor
 */
var getMax = (...args) => {
  console.log(args);
};
getMax(1, 2, 3);

// const User = () => {
//   this.name = "van duc";
// };
// const user = new User(); //user is not a constructor
