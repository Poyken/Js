var checkAll = document.querySelector(".all");
var check = document.querySelector(".check");
var one = document.querySelectorAll(".one");
// var arrInput = [];
// Array.from(check.children).forEach(function (item) {
//   arrInput.push(item.children[0]);
// });
// checkAll.addEventListener("change", function (e) {
//   //   if (e.currentTarget.checked) {
//   console.log(arrInput);
//   //   }
// });
checkAll.addEventListener("change", function () {
  var check = this.checked;
  one.forEach(function (item) {
    item.checked = check;
  });
});
one.forEach(function (item) {
  // item.checked = check;
  item.addEventListener("change", function () {
    // var status = item.checked;
    var status = Array.from(one).every(function (checkbox) {
      return checkbox.checked === true;
    });
    // console.log(status);
    checkAll.checked = status;
  });
});
