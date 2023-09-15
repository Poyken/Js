/**
 JSON
 -la string
 - dung de mo ta du lieu 1 cach chinh xac nhat
 - tac dung chinh la dung de giao tiep du lieu giua cac nen tang voi nhau
 vi du:
 - f8 can lam web co the giao tiep du lieu voi app
 -> app cua f8 doc duoc tat ca du lieu cua web f8
 => chuyen ve 1 kieu du lieu chung ma tat ca cac ngon ngu deu doc duoc
 nhung phai dam bao tinh toan ven du lieu

 +xml
 +json:
 - cach chuyen giua cac kieu du lieu cua ngon ngu lap trinh tuong ung ve json
 - cach chuyen giua json ve cac kieu du lieu tuong ung theo ngon ngu lap tring dang su dung
 
 - Trong js co 2 ham de xu ly : JSON.stringify()=> chuyen kieu du lieu ve json
                                JSON.parse()=> chuyen kieu json ve kieu du lieu
php:jsonendcode va jsondecode
 */

var user = [
  { id: 1, name: "van duc" },
  { id: 2, name: "duc nhat" },
];
var json = JSON.stringify(user, null, 4);
console.log(json);

var users = JSON.parse(json); //chuoi json ko hop le => loi
console.log(user);

//quy tac chuoi json
