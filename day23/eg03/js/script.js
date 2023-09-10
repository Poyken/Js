//event object

var btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  console.log(this.innerHTML);
  console.log(e);
});
var input = document.querySelector(".name");
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    console.log(this.value);
  }
});
document.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.key === "Enter") {
    document.body.style.backgroundColor = "green";
  } else document.body.style.backgroundColor = "black";
});
