//destructuring
/**
 * ap dung voi array obj
 * -> pha vo cau truc de co the truy cap vao cac phan tu trong mang va gan thanh cac bien rieng biet
 */
// const user = {
//   id: 2020607404,
//   name: "duc",
//   age: 21,
//   address: "ha noi",
//   salary: 5000000,
// };
// console.log(user);
//su dung cu phap
// const key = "age";
// const { id, name: _name, [key]: age, ...rest } = user;
// console.log(id, _name);
// console.log(rest);

// let { age, salary } = user;
// age = 20;
// console.log(age);

// const user = ["van duc", 21, "ha noi", { a: 1, b: 2, c: 3, d: 4, e: 5 }];
// const [username, age, address] = user;
// console.log(username, age, address);

// const [username, ...rest] = user;
// console.log(username);
// console.log(rest);

// const [username, age, address, { a, b, c, d, e }] = user;
// console.log(username, age, address);
// console.log(a, b, c, d, e);

function useState() {
  const handle = () => {
    return "van duc";
  };
  return [10, handle];
}
const [user, setUser] = useState();
console.log(user);
console.log(setUser());

//spread operator
/**
 Trai cac phan tu trong obj,array ra ngoai
 */
const obj = {
  id: 1,
  name: "duc",
};
const newobj = { ...obj, salary: 50000 }; //trai mang cho cung cap
console.log(newobj);

const oldarray = ["van duc", "duc nhat"];
// const newarray = [21, ...oldarray];
// console.log(newarray);

//ki thuat copy mang nong
const newarray = [...oldarray];

const getTotals = function (a, b) {
  return a + b;
};
const value = [1, 2, 3, 4, 5];
const result = getTotals(...value);
console.log(result);
