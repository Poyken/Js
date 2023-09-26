var counter = document.querySelector(".counter");
var btn = document.querySelector(".btn");
var load = 0,
  start = 30,
  bool = false;
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// var click = async function () {
//   while (load < start) {
//     start--;
//     counter.innerText = start;
//     await sleep(1000);
//   }
//   if (start === 0) {
//     bool = true;
//     btn.removeAttribute("disabled");
//   }
// };
// btn.addEventListener("click", () => {
//   if (bool) {
//     window.location.href = "https://fullstack.edu.vn";
//   }
// });
// click();

var click = function (startTime) {
  console.log(startTime);
  if (start > 0) {
    window.requestAnimationFrame(click);
  }
  if (load <= startTime) {
    start--;
    counter.innerText = start;
    load = startTime + 100;
  }
  if (start === 0) {
    bool = true;
    btn.removeAttribute("disabled");
  }

  btn.addEventListener("click", function () {
    if (bool) {
      window.location.href = "https://fullstack.edu.vn";
    }
  });
};
click();
