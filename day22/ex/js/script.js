var btn = document.querySelector(".btn");
var contentBox = document.querySelector(".content-box");
var closeOverlay = document.querySelector(".overlay");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
// var closeContent = function () {
//   contentBox.classList.remove("show");
// };
btn.addEventListener("click", function () {
  contentBox.classList.add("show");
});
// closeOverlay.addEventListener("click", closeContent);
closeOverlay.addEventListener("click", function () {
  contentBox.classList.remove("show");
});
email.onfocus = function () {
  console.log("Focus");
};
email.onblur = function () {
  console.log("out input");
};
