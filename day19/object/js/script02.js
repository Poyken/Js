var user = {
  name: "duc",
  email: "duc@example.com",
  getName: function () {
    // console.log(this);
    return this.name;
  },
  job: {
    name: "giang vien",
    salary: 500,
    history: [
      {
        year: 2000,
        name: "cv1",
      },
      { year: 2002, name: "born" },
    ],
  },
};
console.log(user.getName());
console.log(user.job.name);
console.log(user.job.history[1].name);
//kiem tra 1 bien co phai object khong
var a = {};
// if (typeof a === "object" && a !== null && !Array.isArray(a))
//   console.log("object");
// else console.log("not");

Object.isObject = function (obj) {
  return typeof a === "object" && a !== null && !Array.isArray(a);
};
console.log(Object.isObject(a));
//function constructor prototype combine object,xy ly tham chieu,toan tu optional chaining
//thuc hanh viet ham map trong array
