//dom navigation
//chon duoc element dua vao 1 element khac
/**
 * len cha: parentElement=> tra ve element node
            parentNode=> tra ve node
 * xuong con:
            childrenNode=> lay danh sach cac element con truc tiep gan nhat thanh dang danh sach
            
 * ke tiep:nextElementSibling=>lay thanh phan ngang hang ke tiep

 * lui lai:previousElementSibling=>lay thanh phan ngang hang dung truoc

 */
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   //   console.log(this); //this tra ve element
//   //chon thanh phan cha cua btn
//   //   console.log(this.parentElement);
//   //   console.log(this.parentElement.parentElement);
// });

var menu = document.querySelector(".menu");
// console.log(menu.children[2].children[1].children[0].innerText); //array x object
//bai tap
/**
 * click vao moi item tren menu va xu ly cac trung hop sau
 * neu item do co menu con (co ul) thi doi mau nen cua menu con
 * nen item do ko co menu con thi doi mau chu cua menu
 */

// console.log(menu.children);
var listTagA = document.querySelectorAll("a");
listTagA.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.parentElement.children.length > 1) {
      element.parentElement.children[1].style.background = "red";
    } else {
      element.style.color = "aqua";
    }
  });
});

var productActive = document.querySelector(".product .active");
// console.log(productActive);

// console.log(productActive.nextElementSibling.previousElementSibling); //= "+"" in css selector
var nextBtn = document.querySelector(".next");
var previousBtn = document.querySelector(".previous");
var firstElement = productActive;
var lastElement = document.querySelector(".product").lastElementChild;
console.log(lastElement); //
// nextBtn.addEventListener("click", function () {
//   var nextElement = productActive.nextElementSibling;
//   nextElement.classList.add("active");
//   console.log(nextElement);
//   nextElement.previousElementSibling.classList.remove("active");
//   productActive = nextElement;
//   if (productActive.nextElementSibling === null) {
//     productActive.nextElementSibling = productActive.parentElement.children[0];
//   }
// });

nextBtn.addEventListener("click", function () {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = firstElement;
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
});

previousBtn.addEventListener("click", function () {
  var previousElement = productActive.previousElementSibling;
  if (previousElement === null) {
    previousElement = lastElement;
  }
  previousElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = previousElement;
});
