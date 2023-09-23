window.scroll(0, 0);
var header = document.querySelector(".header");
var nav = document.querySelector("nav");
var h1Height = header.children[0].clientHeight;
var navHeight = header.children[1].clientHeight;

var hero = document.getElementById("hero");
var register = document.getElementById("register");

// console.log(hero.children[0].clientHeight);
// console.log(hero.children[1].clientHeight);

// console.log(window.getComputedStyle(header).getPropertyValue("padding-bottom"));
//10px => ep kieu => thao tac
var paddingHeader = window
  .getComputedStyle(header)
  .getPropertyValue("padding-bottom");

paddingHeader = parseInt(paddingHeader);
window.addEventListener("scroll", function () {
  var y = this.window.scrollY;
  //   console.log(y, header.clientHeight);
  //   console.log(nav.offsetTop);
  if (y >= h1Height + paddingHeader) {
    nav.classList.add("show");
    this.document.body.style.paddingTop = `${navHeight}px`;
  } else {
    nav.classList.remove("show");
    this.document.body.style.paddingTop = 0;
  }
});

var navItems = nav.children;
Array.from(navItems).forEach(function (navitem) {
  navitem.addEventListener("click", function (e) {
    e.preventDefault(); // prevent
    var hash = this.getAttribute("href");
    // console.log(hash);
    var section = document.querySelector(hash);
    // console.log(section);
    if (section) {
      var offsetTop = section.offsetTop;
      //   console.log(offsetTop);
      //toa do cua the html voi top
      window.scroll(0, offsetTop - navHeight - paddingHeader);
      //ki thuat scrooll intoview
    }
  });
});
