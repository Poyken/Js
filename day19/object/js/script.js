/*  
object la 1 doi uong voi kieu du lieu tham chieu
ham tao cua object la Object
cau tao
-thuoc tinh:dac diem tinh chat

-phuong thuc:cac hanh dong
*/
//2 loai tao object
//-object literal
//-function constructor(ham tao)
//object cau tao kieu key:value

//khai bao
// var user = {
//   fullname: "nguyen van duc",
//   email: "duc011002@gmail.com",
//   "tel-phone": "0328099109", //cach dua - vao trong key
//   age: 21,
//   getName: function () {
//     return "nguyen van duc";
//   },
// };
// var customer = new Object();
//them key cho object
// user.country = "Nhon";
// user["address"] = "City";
//truy cap vao key cua pbject
// // console.log(user);
// console.log(user.fullname);
// console.log(user.email);
// console.log(user["tel-phone"]);
// console.log(user["age"]);
// console.log(user.getName());
// console.log(customer);
// console.log(Object.prototype);

// delete user.age;
// console.log(user["age"]);
//lay tat ca key trong object
// for (var key in user) {
//   //   console.log(key);
//   if (typeof user[key] === "function") console.log(user[key]());
//   else console.log(user[key]);
// }
// console.log("============================================================");
// Object.keys(user).forEach(function (key) {
//   if (typeof user[key] === "function") console.log(user[key]());
//   else console.log(user[key]);
// });

var users = [
  { id: 1, name: "duc", email: "duc@gmail.com" },
  { id: 2, name: "phuong", email: "bichphuong@gmail.com" },
  { id: 3, name: "luan", email: "luan@gmail.com" },
];
console.log(users);

var html = `<table width="100%" border="1">
<tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
</tr>
${users
  .map(function (user) {
    return `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
    </tr>`;
  })
  .join("")}
</table>`;
document.write(html);
