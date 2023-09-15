// var check = document.querySelector(".name");
// console.log(check.defaultValue);
// window.addEventListener("beforeunload", function (e) {
//   if (check.value !== this.defaultValue) return (e.returnValue = "duoc ma");
// });

var handleBeforeUnload = function (e) {
  e.returnValue = "";
};

// check.addEventListener("keyup", function (e) {
//   console.log("value " + this.value);
//   console.log("default value " + this.defaultValue);
//   if (this.value !== this.defaultValue) {
//     window.addEventListener("beforeunload", handleBeforeUnload);
//     //neu 2 gia tri khac nhau thi them su kien beforeunload
//   } else {
//     window.removeEventListener("beforeunload", handleBeforeUnload);
//     //2 gia tri giong nhau thi xoa su kien beforeunload
//   }
// });

var login = document.querySelector(".login");

// for (let index = 0; index < login.length; index++) {
//   const element = login[index];
//   if (element.type !== "submit" && element.type !== "checkbox") {
//     // console.log(element);
//     element.addEventListener("keyup", function (e) {
//       console.log("value " + this.value);
//       console.log("default value " + this.defaultValue);
//       if (this.value !== this.defaultValue) {
//         window.addEventListener("beforeunload", handleBeforeUnload);
//         //neu 2 gia tri khac nhau thi them su kien beforeunload
//       } else {
//         window.removeEventListener("beforeunload", handleBeforeUnload);
//         //2 gia tri giong nhau thi xoa su kien beforeunload
//       }
//     });
//   } else if (element.type !== "submit") {
//     element.addEventListener("change", function (e) {
//       //   console.log("change");
//       if (element.checked === true) {
//         window.addEventListener("beforeunload", handleBeforeUnload);
//       } else {
//         window.removeEventListener("beforeunload", handleBeforeUnload);
//       }
//     });
//   }
//   login[index - 1].addEventListener("submit", function (e) {
//     e.preventDefault();
//     // console.log("submit");
//     window.removeEventListener("beforeunload", handleBeforeUnload);
//   });
// }

login.addEventListener("input", function (e) {
  //   console.log(e.target);
  //   console.log([e.target]);
  if (e.target.type === "checkbox" || e.target.type === "radio") {
    if (e.target.defaultChecked !== e.target.checked) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    } else {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  } else {
    if (e.target.defaultValue !== e.target.value) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    } else {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }
});
