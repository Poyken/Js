//Strict Mode=>dat o dau file hoac dong dau trong function
//su dung default hoac parameter khong the thiet lap duoc
/**
 La 1 che do nghiem ngat trong js giup giam thieu loi ngam
 danh cho lap trinh vien, giup ung dung hoat dong tot tren cac
 trinh duyet khac nhau
//  */
// "use strict"; viet danh cho ca file
// var a = 10;
// console.log(a);
"use strict";
// getTotal();

/**
 Hoisting: la 1 co che mac dinh cua js
 -> day phan khai bao bien hoac ham len truoc phan thuc thi
 chi ap dung voi function declaration khong ap dung voi expression
 */
//chi day phan khai bao bien ko day gia tri
//function declaration
// getTotal(); //chi day duoc phan var getTotal khong the day duoc phan function
//vay nen gia khi khoi tao la unde
//-> khong the thanh ham-> is not a function
var getTotal = function () {
  console.log("duc");
};
getTotal();
// console.log(b);
// var b = 10;
