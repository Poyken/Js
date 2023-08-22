/**
 * Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, age và address.

Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.

Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.

Input:

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.
Output:

result = [
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong", shortName: "Nguyễn B" },
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi", shortName: "Nguyễn A" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM", shortName: "Nguyễn C" },
];
 */
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Tran Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}
// function createCustomers(customers) {
//   var newArr = customers.map(function (custom) {
//     var firstname = custom.name.slice(0, custom.name.indexOf(" "));
//     var lastname = custom.name.slice(custom.name.lastIndexOf(" "));
//     var user = new Person(custom.name, custom.age, custom.address);
//su khac nhau giua bachtick va khong bachtick o new person nay la gi
//     user.shortName = `${firstname} ${lastname}`;
//  tai sao de duoc  first name va last name vao backtick ma khong de duoc customer.name...
//     return user;
//   });
//   newArr.sort(function (a, b) {
//     return a.age - b.age;
//   });
//   return newArr;
// }

// }
// function createCustomer(customers) {
//   var newArr = customers.map(function (custom) {
//     var firstname = custom.name.slice(0, custom.name.indexOf(" "));
//     var lastname = custom.name.slice(custom.name.lastIndexOf(" "));
//     var newUser = new Person(custom.name, custom.age, custom.address);
//     newUser.shortName = `${firstname} ${lastname}`;
//     return newUser;
//   });
//   return newArr.sort(function (a, b) {
//     return a.age - b.age;
//   });
// }

// function createCustomer(customers) {
//   var newArr = customers.map(function (custom) {
//     var firstname = custom.name.slice(0, custom.name.indexOf(" "));
//     var lastname = custom.name.slice(custom.name.lastIndexOf(" "));
//     var user = new Person(custom.name, custom.age, custom.address);
//     user.shortName = `${firstname} ${lastname}`;
//     return user;
//   });
//   return newArr;
// }
// function createCustomers(customers) {
//   const sortedArray = customers.slice().sort((a, b) => a.age - b.age);

//   const result = sortedArray.map((customer) => {
//     const arrayName = customer.name.split(" ");
//     const shortName = `${arrayName[0]} ${arrayName[arrayName.length - 1]}`;
//     return { ...customer, shortName };
//   });

//   return result;
// }
function createCustomers(customers) {
  if (Array.isArray(customers)) {
    const arrayCustomers = customers
      .sort((a, b) => a.age - b.age)
      .map((customer) => {
        customer["shortName"] =
          customer["name"].split(" ")[0] +
          " " +
          customer["name"].split(" ")[customer["name"].split(" ").length - 1];
        return customer;
      });

    return arrayCustomers;
  } else {
    return "không phải mảng";
  }
}
const result = createCustomers(customers);

console.log(result);
