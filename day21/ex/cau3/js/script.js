/*
Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, password và email.

Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.

Yêu cầu:

Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.

Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.

Tự động thêm role là user cho mỗi đối tượng.

Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:

Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.

Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.

Input:

const data = [];
const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("Nguyen Van B", "1234567");
Output:

data = [
  {
    name: "Nguyen Van A",
    password: "123456",
    email: "nguyenvana@email.com",
    role: "user",
  },
  {
    name: "Nguyen Van B",
    password: "1234567",
    email: "nguyenvanb@email.com",
    role: "user",
  },
];
dataLogin = {
  name: "Nguyen Van B",
  password: "1234567",
  email: "nguyenvanb@email.com",
  role: "user",
};
*/
const data = [];

const User = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
};

var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);

var dataRegister = handleRegister(
  "Nguyen Van B",
  "123456",
  "nguyenvanb@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van C",
  "1234567",
  "nguyenvanc@email.com"
);

// // hàm register
// function handleRegister(name, password, email) {
//   if (!name || !password || !email) {
//     console.log("thông tin không đủ !");
//     return null;
//   }
//   const userCheck = data.find((user) => {
//     return user["email"] === email;
//   });
//   if (!userCheck) {
//     var user = new User(name, password, email);
//     user.role = "user";
//     data.push(user);
//     console.log("đăng kí thành công");
//     return user;
//   }
//   console.log("vui lòng nhập lại email trùng!");
//   return null;
// }

// // Hàm login
// function handleLogin(email, password) {
//   for (var element of data) {
//     if (element["email"] === email && element["password"] === password)
//       return element;
//   }

//   return "thông tin đăng nhập không hợp lệ";
// }
// console.log(data);
// console.log(handleLogin("nguyenvana@email.com", "123456"));
//================================================================
function handleRegister(name, email, password) {
  if (!name || !password || !email) {
    console.log("Not Enough Information");
    return null;
  }
  const userCheck = data.find(function (user) {
    return user["email"] === email;
  });
  if (!userCheck) {
    var user = new User(name, email, password);
    user.role = "user";
    data.push(user);
    console.log("Complete");
    return user;
  }
  console.log("vui lòng nhập lại email trùng!");
  return null;
}
function handleLogin(email, password) {
  for (const element of data) {
    if (element["email"] === email && element["password"] === password)
      return element;
  }
  return null;
}
console.log(data);
console.log(handleLogin("nguyenvana@email.com", "123456"));
