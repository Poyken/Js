//event domcontentloaded=khi hinh thanh case dom=> moi chay
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".title");
  console.log(title);
});
// var title = document.querySelector(".title");
// console.log(title);
var preloader = document.querySelector(".preloader");

////event load=all tai nguyen load xong =>moi chay
//=> thuong duoc su dung de lam chuc nang loading
window.addEventListener("load", function () {
  //   console.log("xong");
  //   var img = document.querySelector("img");
  //   console.log(img.width);

  //   var loading = document.querySelector(
  //     ".loadingio-spinner-bean-eater-0ofd3hnlzxs"
  //   );
  //   //   loading.style.display = "none";
  //   loading.remove();

  preloader.remove();
});
