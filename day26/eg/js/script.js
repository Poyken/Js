var h1 = document.createElement("h1");
var btn = document.createElement("button");
var span = document.createElement("span");
var count = 0;
span.innerText = count;

h1.innerText = "Count ";
btn.innerText = "+";
// var count = 0;
document.body.appendChild(h1);
h1.appendChild(span);
document.body.appendChild(btn);
btn.addEventListener("click", function () {
  //   h1.innerText = ++count;
  span.innerText = ++count;
});
