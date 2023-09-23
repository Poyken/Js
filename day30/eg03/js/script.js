// custom event
var slider = document.querySelector(".slider");
var msg = document.querySelector(".msg");

//1.change => khi thay doi
// slider.addEventListener("change", function () {
//   //nha chuot lang nghe su kien
//   //   console.log(this.value);
// });
//2.input =>khi bam chuot xuong va keo
slider.addEventListener("input", function () {
  //bam xuong lang nghe su kien
  //   console.log(this.value);
  if (+this.value === +100) {
    // msg.innerText = "hello f8";
    slider.dispatchEvent(finishEvent);
    //phan hoi su kien
  } else {
    // msg.innerText = "";
    slider.dispatchEvent(finish100);
  }
});
// => dinh nghia su kien moi lang nghe su kien slide
//tao ra 1 event luu tru obj su kien
var finishEvent = new Event("finish");
var finish100 = new Event("finish100");
// console.log(finishEvent);
slider.addEventListener("finish", function (e) {
  msg.innerText = "hello world";
});
slider.addEventListener("finish100", function (e) {
  msg.innerText = "keo tiep di";
});

slider.addEventListener("over", function (e) {
  console.log(e);
  //   console.log(this.data);
});
var slider2 = document.querySelector(".slider2");
slider2.addEventListener("over", function (e) {
  console.log(this.data);
});
