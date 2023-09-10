// var btn = document.querySelector(".btn");
// var h1 = document.querySelector("h1");

// btn.addEventListener("click", function () {
//   content.innerHTML += `<p>khoa hoc fullstack</p>`;
// });
// h1.addEventListener("click", function () {
//   this.style.color = "red";
// });

//khac phuc bang dom node

//tao moi element
var content = document.querySelector(".content");

var h2 = document.createElement("h2");
h2.innerText = "abcd";
h2.classList.add("course-name");
console.log(h2);

//them the h2 vao content(them vao cuoi cung)
content.appendChild(document.createElement("h3")); //them vao cuoi cung (sau h1)
// content.appendChild(h2);
// hoac
content.append(h2); //them vao cuoi cung (sau h3)

var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  //   content.appendChild(document.createElement("h3"));
  //   content.appendChild(document.createElement("h3"));
  content.removeChild(h3);
});
//khac phuc tinh trang cap nhat ca 1 trang html==re-render

var ul = document.createElement("ul");
for (var i = 0; i < 3; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i + 1}`;
  ul.prepend(li);
}

// ul.append(li);
content.prepend(ul);

//them 1 node vao truoc 1 node khac
p = document.createElement("p");
p.innerText = `hello f8`;

content.insertBefore(p, h2);

//thay the 1 node bang 1 node khac

var h3 = document.createElement("h3");
h3.innerText = `hello nguyen van duc`;
content.replaceChild(h3, p);

//p ko bi mat di va van co the add vao space khac duoc
document.body.appendChild(p);

// content.removeChild(h3);
