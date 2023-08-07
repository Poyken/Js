var fullname = "nguyen duc f8 f8 ";
console.log(fullname, typeof fullname);

// var fullname2 = String("nguyen duc f8");
// console.log(fullname2, typeof fullname2);

// var fullname3 = new String("nguyen duc f8");
// console.log(fullname3, typeof fullname3);

//string la 1 ham tao de dinh nghia cac phuong thuc va thuoc tinh xu ly chuoi

console.log(typeof String);
//de dinh nghia cac phuong thuc va thuoc tinh cua 1 ham tao => dung prototype
// console.log(String.prototype);

// console.log(typeof String.prototype);
//lay do dai cua chuoi
console.log(fullname.length);
//lay ki tu theo index
console.log(fullname.charAt(0));
console.log(fullname.at(0));
//tra ve ma acsii theo index
console.log(fullname.charCodeAt(2));
//concat(str1,str2,...) noi chuoi
console.log(fullname.concat("a", "B"));
//indexof(substr) tim chuoi substr trong chuoi cha
//tim vi tri dau tien neu tim thay tra ve index
//ko thay tra ve -1
console.log(fullname.indexOf("n"));
//tim vi tri cuoi neu tim thay tra ve
console.log(fullname.lastIndexOf("n"));
//include tim chuoi nhung se tra ve true false
console.log(fullname.includes("s"));
console.log(fullname.includes("n"));
//slice(Start,end) cat chuoi tu start cho den end
console.log(fullname.slice(0, 6));
console.log(fullname.slice(8));
console.log(fullname.slice(-6));
//replace(search,width)
console.log(fullname.replace("f8", "f88"));
//chi thay the vi tri dau tien
//viec tim kiem trong ham nay se co ho tro ca bieu thuc chinh quy
// console.log(fullname);
console.log(fullname.replace(/f8/g, "f88"));
//replaceall(search,width)=> thay the tat ca
console.log(fullname.replaceAll("f8", "f9"));
//split(char) tach chuoi thanh mang
console.log(fullname.split(" "));
//match(patten) cat chuoi dua vao bieu thuc chinh quy
var content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

//tolowercase
console.log(fullname.toLowerCase(fullname));
console.log(fullname.toUpperCase(fullname));
//trim() loai bo khoang trang dau va cuoi
console.log(fullname.trim(fullname));
//trimstart() bo khoang trang dau
//trimend() bo khoang trang cuoi
