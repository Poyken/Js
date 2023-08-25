var link = document.querySelector(".link");
// console.log(link);
//lay gia tri thuoc tinh
//(chi ap dung voi thuoc tinh that trong html)
// =ten_element.ten_thuoctinh

// console.log(link.id);
// console.log(link.href);
// console.log(link.rel);
// console.log(link.type);
// console.log(link.title);
// console.log(link.text);
// console.log(link.className);
// console.log(link.target);
// console.log(link.width); //khong phai thuoc tinh that
//cap nhat gia tri thuoc tinh that trong html

link.addEventListener("click", function () {
  link.href = "http://google.com";
});
link.title = "trang chu google";
// console.log(link);
//cach de truy cap vao data-attribute
// console.log(link.getAttribute("data-count"));
// console.log(link.getAttribute("data-index-number"));

//
//truy cap vap data-attribute thong qua dataset
// console.log(link.dataset);
// console.log(link.dataset.count);
// console.log(link.dataset.indexNumber);

//cap nhat gia tri vao data attribute
// c1
// link.setAttribute("data-count", 10);
// console.log(link.dataset.count);
// link.setAttribute("data-index-number", "ahihi");
// console.log(link.dataset.indexNumber);
// link.setAttribute("data-abc", "nguyen van duc");
// console.log(link.dataset.abc);
// console.log(link.dataset);

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log(content.classList);
  content.classList.add("hello", "world");
  content.classList.remove("world"); //xoa class
  content.classList.toggle("world3");
  if (content.classList.contains("world")) console.log("ton tai");
  content.remove(); // xoa element
});
