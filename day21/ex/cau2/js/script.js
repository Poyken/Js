//Input
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

// const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.
// Output:

// result = [
//   { name: "Nguyễn Văn B", age: 2, address: "Hai Phong", shortName: "Nguyễn B" },
//   { name: "Nguyễn Văn A", age: 11, address: "Ha Noi", shortName: "Nguyễn A" },
//   { name: "Nguyễn Văn C", age: 12, address: "TP.HCM", shortName: "Nguyễn C" },
// ];
/* 
Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, age và address.

Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.

Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.*/
var Person = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};
function createCustomers(customerList) {
  var newArray = customerList.map(function (customer) {
    var firstName = customer.name.slice(0, customer.name.indexOf(" "));
    var lastName = customer.name.slice(customer.name.lastIndexOf(" ") + 1);
    var user = new Person(
      `${customer.name}`,
      customer.age,
      `${customer.address}`
    );
    user.shortName = `${firstName} ${lastName}`;
    return user;
  });
  newArray.sort(function (a, b) {
    if (a.age < b.age) return -1;
  });
  return newArray;
}

const result = createCustomers(customers);
console.log(result);
