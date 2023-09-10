var btn = document.querySelector(".btn");

var isDown = false;
var xoffset, yoffset;
btn.addEventListener("mousedown", function (e) {
  isDown = true;
  xoffset = e.offsetX;
  yoffset = e.offsetY;
});
document.addEventListener("mousemove", function (e) {
  if (isDown) {
    var clientX = e.clientX - xoffset - 10;
    var clientY = e.clientY - yoffset - 10;
    var css = {
      position: "relative",
      left: clientX + "px",
      top: clientY + "px",
    };
    Object.assign(btn.style, css);
  }
  //   Object.assign(btn.style, css);
});

document.addEventListener("mouseup", function () {
  isDown = false;
});
