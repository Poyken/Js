var fullName = "nGuyEn vAn duc";
fullName = fullName.toLowerCase();
fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
console.log(fullName);

// var i,
//   index,
//   result = " ";
// for (i = 0; i < fullName.length; i++) {
//   var charAt = fullName.charAt(i);
//   var charAtNext = fullName.charAt(i + 1);
//   console.log(charAt, charAtNext, i, index, result);
//   if (charAt === " " && charAtNext !== " ") {
//     index = i + 1;
//   }
//   if (i === index) result += charAt.toUpperCase();
//   else result += charAt;
// }
// result += fullName.charAt(fullName.length);
// console.log(result);

var i,
  index,
  result = "";
for (i = 0; i < fullName.length; i++) {
  charAt = fullName.charAt(i);
  charAtNext = fullName.charAt(i + 1);
  if (charAt === " " && charAtNext !== " ") {
    index = i + 1;
  }
  if (index === i) {
    result += charAt.toUpperCase();
  } else result += charAt;
  console.log(charAt, charAtNext, i, index, result);
}
console.log(result);
