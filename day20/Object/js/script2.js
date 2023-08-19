// var a = {
//   name: "duc",
//   email: "duc@example.com",
//   getName: function () {
//     return this.name;
//   },
// };
// var b = {
//   name: "duc",
//   email: "duc@example.com",
//   getName: function () {
//     return this.name;
//   },
// };

var Person = function (name, email) {
  //   console.log(this);
  this.name = name;
  this.email = email;
  this.getName = function () {
    console.log(this);
    return this.name;
  };
};

var person = new Person("duc", "example.com");
console.log(person);

// var user = new Person("user", "example.com");
// user.age = 20;
// user.work = "example";
// console.log(user);

var auth = {};
console.log(auth);
//kiem tra 1 bien duoc tao tu ham tao nao
console.log(auth.constructor.name);
console.log(person.constructor.name);
//luu y voi null va undefined

Person.isPerson = function (variable) {
  return variable && variable.constructor.name === "Person";
};
if (Person.isPerson(person)) console.log("day la Person");
else console.log("day khong phai la Person");
