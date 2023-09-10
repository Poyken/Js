//event object co 2 phuong thuc thuong duoc su dung
/**
 * preventdefault=>chan hanh dong mac dinh cua the html
 * stoppropagation=>
 */
var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault(); //neu submit se submit vao form form_class_name.addEventListener("submit", function (e) {
  console.log(this.href);
});
