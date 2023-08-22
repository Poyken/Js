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
function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
}

function handleRegister() {
  const data = [];

  function pushUser(name, password, email) {
    if (!name && !password && !email) return data;
    if (!name || !password || !email) return "Bạn chưa nhập đủ các trường";
    var newUser = new User(name, password, email);
    newUser.role = "user";
    if (data.length === 0) {
      data.push(newUser);
    } else {
      for (var i = 0; i < data.length; i++) {
        if (data[i].email === email) return "Địa chỉ email đã được sử dụng";
      }
      data.push(newUser);
    }
    return data;
  }
  return pushUser;
}

const addUser = handleRegister();
console.log(addUser("Nguyen Van A", "123456", "nguyenvana@email.com"));
console.log(addUser("Nguyen Van B", "123456", "nguyenvanb@email.com"));
// console.log(addUser("Nguyen Van B", "123456", "nguyenvanb@email.com"));
function handleLogin(email, password) {
  var dataLogin = addUser().filter(function (user) {
    return user.email === email && user.password === password;
  });
  if (dataLogin.length === 0) return "Thông tin đăng nhập không hợp lệ";
  return dataLogin;
}
console.log(handleLogin("nguyenvanb@email.com", "123456"));
