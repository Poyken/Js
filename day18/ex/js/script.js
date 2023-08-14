content = "Lorem Ipsum is simply dummy text of";
var position = content.indexOf(" ");
var result = "";
setInterval(function () {
  if (position !== -1) {
    result += `<span>${content.slice(0, position)}</span>` + " ";
    content = content.slice(position + 1);
    document.body.innerHTML = "";
    document.write(result + content);

    position = content.indexOf(" ");
  }
}, 500);
