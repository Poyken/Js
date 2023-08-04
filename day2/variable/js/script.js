// var a = 20;
// a %= 3;
// console.log(a);
// var str = "duc";
// str += " f8";
// console.log(str);

// var a = 20;
// var str = a >= 10 ? "duc" : "f8";

// console.log(str);

// document.write(a >= 50 ? "f8" : "van duc");

// var a = 1;
// var total = 1 + 2 + 3 + a >= 10 ? 15 : 20 + 4 + 5; //29
// console.log(total);

//viet lai toan tu nullish bang toang tu 3 ngoi

// var a = 123;
// var b = a == null || a == undefined ? "f8" : a;
// console.log(b);

// var total = 1500000;
// if (total < 5000000) {
//   total -= total * 0.01;
// } else if (total <= 1500000) {
//   total -= total * 0.03;
// } else total -= total * 0.05;

// console.log(total);

// var a = "";
// if (a === "insert" || a == +"remove" || a === "add") {
//   console.log("them");
// } else if (a === "edit" || a === "update") {
//   console.log("sua");
// } else if (a === "delete" || a === "remove" || a === "destroy") {
//   console.log("xoa");
// } else console.log("not found");

var month = 0;
if (month % 1 == 0 && 1 <= month && month <= 12) {
  month = +month;
  var day;
  //shift+alt de nhan ban
  switch (month) {
    case 2:
      day = 29;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    default:
      day = 31;
      break;
  }
  console.log(`thang ${month} co ${day} ngay`);
} else {
  console.log("thang khong hop le");
}
