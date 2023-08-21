// //number:kieu du lieu nguyen thuy
// console.log(Number.prototype);
// console.log([Number]);
// var a = 10;
// // console.log(a, typeof a);
// //kiem tra 1 so nguyen
// console.log(Number.isInteger(a));
//kiem tra so thuc bang cach loai tru so nguyen

//so NaN:xay ra khi cac bieu thuc so hoc khong tinh toan duoc
// var a = NaN;
// console.log(typeof a);
// //cac phep toan tru phep cong se duoc ep kieu
// console.log(Number.isNaN(a));
// //so infinity:
// console.log(10 / 0);
// var a = 100 ** 100;
// if (a !== Infinity) console.log(a);
//muon kiem tra 1 bien co phai la so khong thi
// var a = 10;

// if (typeof a === "number" && !Number.isNaN(a) && a !== Infinity)
//   console.log("number");
//ep kieu
//em kieu so nguyen
// var a = "10ac12";
// a = Number.parseInt(a);
// console.log(a, typeof a);
// //ep kieu so thuc
// var b = "10.12as12";
// b = Number.parseFloat(b);
// console.log(b);
//ep kieu so
// var a = "10.3"; //chi can gap string se huy qua trinh va max dinh nan
// // a = +a;
// a = Number(a);
// console.log(a, typeof a);

//chuyen so thanh chuoi
// var a = 10.1534;
// // a = a + "";
// // a = a.toString();
// console.log(a);

// //lay phan thap phan va lam tron:tofixed()=> tra ve 1 chuoi
// // console.log(a.toFixed(1));
// //phai ep kieu ve so
// a = +a.toFixed(1);
// console.log(a);

var price = 12000000;
console.log(
  price.toLocaleString("vi", {
    style: "currency",
    currency: "USD",
  })
);
