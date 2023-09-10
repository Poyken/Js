var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", function () {
  if (content.style.display === "none") {
    content.style.display = "";
    btn.innerText = "hien";
  } else {
    content.style.display = "none";
    btn.innerText = "an";
  }
});
