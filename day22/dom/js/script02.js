//event listener
var btn = document.querySelector(".btn");
var complete = document.querySelector(".complete");
var handlerClick = function () {
  console.log("thanh cong");
};
btn.addEventListener("click", function () {
  console.log("yes");
});
btn.addEventListener("click", handlerClick);

/**
 * Event trong dom luon ton tai 1 tham so o listener
 * => goi la event object
 */
//
complete.addEventListener("click", function () {
  btn.removeEventListener("click", handlerClick);
});
var items = document.querySelectorAll("ul li");
items.forEach(function (item) {
  item.addEventListener("click", function () {
    // console.log(item);
    console.log(this);
  });
});
/**
 * trong event co 1 chuyen de la custom event
 * =>hoc sau
 */
