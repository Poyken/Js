var textarea = document.querySelector(".textarea");

var bold = document.querySelector(".fa-bold");
var underline = document.querySelector(".fa-underline");
var italic = document.querySelector(".fa-italic");
var color = document.querySelector(".color");
bold.addEventListener("click", function (e) {
  if (textarea.style.fontWeight === "bold") {
    textarea.style.fontWeight = "normal";
  } else {
    textarea.style.fontWeight = "bold";
  }
});
underline.addEventListener("click", function (e) {
  if (textarea.style.textDecoration === "underline") {
    textarea.style.textDecoration = "none";
  } else {
    textarea.style.textDecoration = "underline";
  }
});
italic.addEventListener("click", function (e) {
  if (textarea.style.fontStyle === "italic") {
    textarea.style.fontStyle = "normal";
  } else {
    textarea.style.fontStyle = "italic";
  }
});
color.addEventListener("change", function (e) {
  console.log(e);
  textarea.style.color = value;
});
