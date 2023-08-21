//dom element
//tao ra 1 object

//c1: truy xuat thong qua id=> chi chon element dau tien
// var title = document.getElementById("title");
// console.log(title);
// console.log(title.innerText);
// title.innerText = "nguyen van duc";
// console.log([title]);

//c2: truy xuat thong qua class
// var titleList = document.getElementsByClassName("title");
// // console.log(titleList);
// for (var i = 0; i < titleList.length; i++) console.log(titleList[i]);

//c3:truy xuat thong qua ten the
// var titleList = document.getElementsByTagName("h1");
// // console.log(titleList);
// for (var i = 0; i < titleList.length; i++) console.log(titleList[i]);

//c4: truy xuat thong qua css selector
//th1:chi lay selector dau tien va co the su dung luon
// var title = document.querySelector("#title.title");
// console.log(title.innerHTML);
// title.innerHTML = "nguyen van duc";
// console.log(title.innerHTML);

//c5: truy xuat thong qua css selector all
// var title = document.querySelectorAll(".title");
// console.log(title); //=[] nen co the su dung mang
// title.forEach(function (arr) {
//   console.log(arr);
// });

//truy cap truc tiep vao body nhung chi duoc 1 cap ngoai cung
// var body = document.body;
// console.log(body);
// var head = document.head;
// console.log(head);

// var content = document.querySelector(".content");
// console.log(content);
// var para = content.querySelector(".para");
// console.log(para);

//dom form
var fullname = document.register.fullname;
console.log(fullname);
