// var h1 = document.createElement("h1");
// h1.innerText = "Count ";
// document.body.appendChild(h1);
// var countNode = document.createTextNode(0);
// h1.appendChild(countNode);
// var btn = document.createElement("button");
// btn.innerText = "+";
// document.body.appendChild(btn);
// btn.addEventListener("click", function () {
//   countNode.data++;
// });

//comment node
// var commentNode = document.createComment("van duc");
// document.body.append(commentNode);

//loi bao mat xss//chu y

var todo = document.querySelector(".todo");
var todoList = document.querySelector(".todoList");
var todoForm = document.querySelector("form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.children[0];
  var name = inputEl.value;
  //   var todo = `<p>${name}</p>`;
  //   todoList.innerHTML += todo;
  var todo = document.createElement("p");
  todo.innerText = name;
  todoList.appendChild(todo);
  inputEl.value = "";
});
