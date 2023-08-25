//dom html
var content = document.querySelector(".content");
//1.lay noi dung the html
console.log(content.innerHTML); //lay html
console.log(content.innerText); //lay text bo html
console.log(content.textContent); //bo html va giu nguyen khoang trang
console.log(content.outerHTML); //lay ca ben mgoai html(lay ca div ben ngoai)

//2.thay doi noi dung cho the html cap nhat lai noi dung

// content.innerHTML = "<h2>java</h2>"; //java
// content.innerText = "<h2>van duc</h2>"; //<h2>van duc</h2>
//chi can text thi dung inertext con khi nao can dung html thi moi dung html
// content.outerHTML = "<h2>Duc</h2>"; //Duc

var btn = document.querySelector(".btn");
var span = document.querySelector(".span");
var result = document.querySelector(".result");
var btnText = document.querySelector(".btnText");
var btnNumber = document.querySelector(".btnNumber");

var count = 0;
btn.addEventListener("click", function () {
  if (result.innerText === "") {
    result.innerHTML = content.innerHTML;
    content.innerHTML = "";
    btnText.innerText = "len";
  } else {
    content.innerHTML = result.innerHTML;
    result.innerHTML = "";
    btnText.innerText = "xuong";
  }
  btnNumber.innerText = `(${++count})`;
});
