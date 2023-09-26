// //tao shadow dom
// var title = document.querySelector(".title");
// var root = title.attachShadow({
//   mode: "open",
// });
// root.innerHTML = `F8-Duc`;
// console.log([root]);

component.create("todo-item", function () {
  var shadow = this.attachShadow({
    mode: "open",
  });
});
