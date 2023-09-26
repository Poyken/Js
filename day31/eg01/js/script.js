// trigger event
//hanh dong tu kich hoat 1 event ma khong can tac dong cua nguoi dung
/**
 * trong js co 2 cach de trigger event
    -dung cac ham co san click sumit
        nhuoc diem:khong day du ham voi tat ca cac su kien
    -dung thong qua ham dispatchEvent()
        co the ap dung cho all event
*/

var btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  console.log("hello");
});
//mong muon khi load trang tu click luon hoac 1s click 1 lan

//1s click 1 lan
// setInterval(function () {
//   btn.click();
// }, 1000);

// window.addEventListener("load", function () {
//   downloadBtn.click();
// });
//btvn

var contentEl = document.querySelector(".content");
var downloadBtn = document.querySelector(".download");
downloadBtn.addEventListener("click", function (e) {
  var content = contentEl.innerText;
  //   console.log(content);
  var blob = new Blob([content]);
  //   console.log(blob);
  // tao url tu blob
  var url = URL.createObjectURL(blob);
  console.log(url);

  var a = document.createElement("a");
  a.href = url;
  a.download = "hello-f8.txt";
  console.log(a);
  a.click();
});

var quantity = document.querySelector(".quantity input");
var plus = quantity.nextElementSibling;
var minus = quantity.previousElementSibling;
var amount = document.querySelector(".amount");
var price = 10000;
var changeEvent = new Event("change");

quantity.addEventListener("change", function () {
  amount.innerText = this.value * price;
});

plus.addEventListener("click", function (e) {
  quantity.value++;
  quantity.dispatchEvent(changeEvent);
});
minus.addEventListener("click", function (e) {
  quantity.value--;
  if (quantity.value < 1) quantity.value = 1;
  quantity.dispatchEvent(changeEvent);
});
