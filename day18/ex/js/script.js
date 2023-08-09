// var content = "Lorem Ipsum is simply dummy text of";

// var count = 0,
//   i = 0;
// var position = content.indexOf(" ");
// while (position !== -1) {
//   count++;
//   content = content.slice(position + 1);
//   position = content.indexOf(" ");
// }
// console.log(count);
content = "Lorem Ipsum is simply dummy text of ";
var position = content.indexOf(" ");
var result = "";
setInterval(function () {
  if (position !== -1) {
    console.log(position);
    result += `<span>${content.slice(0, position)}</span>` + " ";
    content = content.slice(position + 1);
    position = content.indexOf(" ");
    document.write(result);
  }
}, 500);
