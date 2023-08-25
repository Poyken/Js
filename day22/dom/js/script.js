var btn = document.querySelector(".btn");
var email = document.querySelector(".email");
console.log(btn); //co on+... tuc la su kien
//gan su kien co 2 cach;
// c1: gan truc tiep thong qua dom
btn.onclick = function () {
  console.log("dang ki thanh cong");
  //   document.write("btn");
};
btn.onclick = function () {
  console.log("thanh cong");
  //   document.write("btn");
};
//c2:them truc tiep vao the html
var handleRemove = function () {
  console.log("xoa thanh cong");
  //   document.write("xoa thanh cong");
};
//=> event handler
email.onchange = function () {
  console.log("da xong");
}; //hoan thanh 1 event
email.onkeyup = function (e) {
  console.log("dang go: ", e.key);
}; //event nhan chu cai
btn.onmousedown = function (e) {
  console.log("ban vua bam chuot xuong");
};
btn.onmouseup = function (e) {
  console.log("ban vua nha chuot");
};
email.onfocus = function (e) {
  console.log("focus");
};
email.onblur = function (e) {
  console.log("thoat input");
};
email.onpaste = function () {
  console.log("ban vua paste");
};
email.oncopy = function () {
  console.log("ban vua copy");
}; //tuong tu voi oncut
//============================================================================
//co 2 su kien trung nhau thuc hien 2 cong viec khac nhau
btn.onclick = function () {
  console.log("dang ki thanh cong");
  //   document.write("btn");
};
btn.onclick = function () {
  console.log("thanh cong");
  //   document.write("btn");
};
//bi ghi de su kien trung nhau thuc hien
//khac phuc bang cach viet 2 doan code su ly khac nhau o trong 2 ham
//khac phuc bang event listened
