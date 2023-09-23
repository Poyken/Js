//event scroll
/**
 * Thay doi thanh cuon trinh duyet, thuong tac dong vao window

*/
var cur = 0;
var topBtn = document.querySelector(".top");
window.addEventListener("scroll", function () {
  //1. lay toa do x,y khi scroll
  //   console.log("hello");
  var x = this.window.scrollX;
  var y = this.window.scrollY;
  //   console.log(topBtn);
  if (y > 200) topBtn.style.display = "block";
  else topBtn.style.display = "none";
  //   console.log(x, y);

  //   if (y > cur) {
  //     document.body.style.background = "red";
  //   } else {
  //     document.body.style.background = "initial";
  //   }
  //   cur = y;
});
//bai tap scroll: xu ly 2 yeu cau
/**
 * neu keo thanh cuon xuong->doi mau body thanh do
 * neu keo thanh cuon len->doi mau mac dinh
 */
// window.scroll(0, 500);//do co bo nho cache nen luu trang thai
top.addEventListener("click", function () {
  this.window.scroll(0, 0);
});
// console.log(document.body.clientHeight);
/**
 * back to top
 * phan trang doi voi client-side
 */
