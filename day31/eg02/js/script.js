//html element
var title = document.querySelector(".title");
// console.log([title]);
HTMLElement.prototype.css = function (style = {}) {
  Object.assign(this.style, style);
};
title.css({ color: "red", fontSize: "2rem" });

//custom element
//=>ki thuat tao ra 1 the html moi co hoat dong giong cac the html co san
// nhung khac chuc nang nhiem vu

//ham tao ke thua tu html element
// function VanDuc() {
//   return Reflect.construct(HTMLElement, [], VanDuc);
// }
// VanDuc.prototype = Object.create(HTMLElement.prototype);
// // //Lifecycle Callback -> Vòng đời
// VanDuc.prototype.constructor = VanDuc;

// VanDuc.prototype.connectedCallback = function () {
//   this.innerText = `van duc`;
// };
// VanDuc.prototype.attributeChangedCallback = function () {
//   console.log("Khi thuộc tính thay đổi");
// };

// VanDuc.prototype.disconnectedCallback = function () {
//   console.log("Element bị xóa");
// };

// customElements.define("van-duc", VanDuc);

component.create("van-duc", function () {
  this.innerText = "van duc";
});

component.create("f8-image", function () {
  var link = this.getAttribute("link");
  var width = this.getAttribute("width");
  var height = this.getAttribute("height");
  var caption = this.innerText;
  var style = document.createElement("style");
  style.textContent = `
  .box-image {
    border: 1px solid red;
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    flex-direction: column;
  }

  .box-image img {
    display: block;
  }

  .box-image p {
    margin: 0;
    font-style: italic;
  }
  `;

  this.innerHTML = `
  <div class="box-image">
    <img src="${link}" width="${width ?? ""}" height="${height ?? ""}"/>
    ${caption.length ? `<p>${caption}</p>` : ""}
  </div>
  `;
  this.prepend(style);
});
