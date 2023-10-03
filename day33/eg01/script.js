// console.log("done");
/**
 * obj co bn loai :
 * - obj literals :doi tuong nguyen ban={}
 * - constructor
 * co bao nhieu cach dinh nghia 1 obj
 *
 */

class Boy {
  //dat ten theo phuong thuc pascal case
  // noi dung cua class
  // dinh nghia thuoc tinh va phuong thuc()
  //phuong thuc khoi tao

  constructor(name, age, id) {
    //dinh nghia cac thuoc tinh va thiet lap cac gia tri khoi tao(initial value)
    //khi khoi tao doi tuong thi phuong thuc nay se thuc thi dau tien

    this.name = name;
    this.age = age;
    this.id = id;
  }

  //dinh nghia phuong thuc
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  setMsg(msg) {
    this.msg = msg;
  }
}
// var boy = new Boy("van duc", 21);
// console.log(boy);

//extend:ke thua class

class child extends Boy {
  //toan quyen su dung cac phuong thuc va thuoc tinh cua class ke thua(class cha)
  constructor(name, age, id) {
    // console.log("abc");
    super(name, age, id); //thuc thi constructor cua class cha
    //constructor cua class cha co tham so thi moi can truyen tham so
    this.status = true;
    this.msg = null;
    //qua trinh: constructor con chay->chay super->constructor cha chay
  }
  getId() {
    return `${this.getName().replaceAll(" ", "+")}_${this.getAge()}_${this.id}`;
  }
  isLogin() {
    return this.status;
  }
}
const children = new child("van duc", 21, 123);
//khoi tao doi tuong chay constructor dau tien neu ko co tim len class cha

// console.log(children);
// console.log(children.getId());
// console.log(children.isLogin());
// children.setMsg("van duc"); //van co the su dung constructor cua cha de set gia tri cho con va nguoc lai
// console.log(children.msg);

//class expressions

// const getA = function () {};

const A = class {
  constructor(name) {
    this.name = name;
  }
};
const a = new A("nguyen van duc");
console.log(a);

//vi du custom element
customElements.define(
  "hello-world",
  class extends HTMLElement {
    connectedCallback() {
      this.innerText = "Hello " + `${this.textContent}`;
    }
  }
);

//
