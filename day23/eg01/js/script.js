//dom css
var content = document.querySelector(".content");

console.log(content);
//them gia tri cho thuoc tinh style
// content.style = "color:red;font-weight:bold;font-size:20px;padding:20px";
//=> khong nen dung vi khong ke thua duoc cac thuoc tinh da thiet lap
console.log(content.style);
//nen su dung style nhu 1 object
// content.style.color = "rgba(0, 0, 0, 0.78)";
// content.style.fontWeight = "bold";
// content.style.fontSize = "20px";
// content.style.backgroundColor = "blue";
// content.style.textTransform = "uppercase";
// content.style.textDecoration = "underline";
// content.style.backgroundImage = `url(${"./images/z4618827196337_5e0018ec3acfef68afe157d6a9a8d243.jpg"})`;
//thuc hanh

// thay doi 1 so thuoc tinh sau
/**
 * background color
 * text decoration
 * font style
 * background image
 */
// console.log(content.style.backgroundColor);
// console.log(content.style.display);
// var css = {
//   backgroundColor: "gray",
//   textDecoration: "underline",
//   boxShadow: "5px 5px #ccc",
// };
// Object.assign(content.style, css);
