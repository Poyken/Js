var total = 0;
var keyword = "of";
var content =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
var result = "";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span> ${content.slice(position, position + keyword.length)}</span>`;

  content = content.slice(position + keyword.length);

  position = content.toLowerCase().indexOf(keyword.toLowerCase());

  total++;
}
result = result + content;
var title = `<p>Tim kiem voi tu khoa <b>${keyword}</b></p> `;
var bottom = `<p>da tim thay <b>${total}</b> ket qua voi tu khoa <b>${keyword}</b> </p>`;
document.write(title + result + bottom);
