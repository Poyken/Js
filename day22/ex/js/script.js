var btn = document.querySelector(".btn");
var contentBox = document.querySelector(".content-box");
var closeOverlay = document.querySelector(".overlay");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var submitButton = document.querySelector(".submit");
// var closeContent = function () {
//   contentBox.classList.remove("show");
// };
var result1 = document.querySelector(".result1");
var result2 = document.querySelector(".result2");
var result3 = document.querySelector(".result3");
var check = function () {
  if (email.value === "" && password.value === "") {
    result1.classList.add("show");
    result2.classList.add("show");
  }

  //check button nhap lai
  if (email.value !== "") result1.classList.remove("show");
  else {
    result1.classList.add("show");
    result3.classList.remove("show");
  }
  if (password.value !== "") result2.classList.remove("show");
  else {
    result2.classList.add("show");
    result3.classList.remove("show");
  }
};
var check2 = function () {
  if (email.value !== "" && password.value !== "")
    result3.classList.add("show");
  else result3.classList.remove("show");
};
btn.addEventListener("click", function () {
  contentBox.classList.add("show");
});
// closeOverlay.addEventListener("click", closeContent);
closeOverlay.addEventListener("click", function () {
  contentBox.classList.remove("show");
});

email.onblur = function () {
  if (email.value !== "") result1.classList.remove("show");
  // else result1.classList.remove("show");
  //check sau khi sbumit van co the nhap lai
  check();
};
password.onblur = function () {
  if (password.value !== "") result2.classList.remove("show");
  // else result2.classList.remove("show");
  //check sau khi sbumit van co the nhap lai
  check();
};
submitButton.addEventListener("click", check);
submitButton.addEventListener("click", check2);
