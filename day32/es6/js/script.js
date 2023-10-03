//scope
/*
:la 1 pham vi truy cap cua bien(bien duoc khai bao va su dung o dau)
loai1:pham vi toan cuc:global scope
loai2:pham vi cuc bo:local scope
-2.1pham vi ham:function scope
-2.2pham vi khoi:block scope: bien duoc khai bao trong 1 khoi co block code
(if/for/while/switch case...)
*/

/**
 * chi hoat dong trong scope ma no da khai bao va cac scope con cua no
 * khong duoc phep khai bao nhieu lan 1 bien trong 1 scope
 let:thay doi duoc gia tri
 const: khong thay doi duoc gia tri2 va bat buoc phai gan khi khai bao
 */
let a = 50;
for (let i = 0; i < 5; i++) {
  //scope cua block for
  //   console.log(i);
  let a = 10;
  if (i === 4) {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}
console.log(a);

const user = "van duc";
// user = "van duc 2";//loi
3;
