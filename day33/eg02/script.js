//phương thức tĩnh và thuộc tính tĩnh
//static methods, properties
//=> không bị phụ thuộc vào đối tượng, không bị thay đổi khi khởi tạo lại đối tượng

//đơn giản là 1 hàm hay biến nằm trong phạm vi của 1 class

//ví dụ 1 phương thức tĩnh : isArray()
//ví dụ 1 thuộc tính tĩnh :math.PI

class Boy {
  //thuoc tinh non-static:bat buoc phu thuoc vao doi tuong:khong co doi tuong ko truy cap duoc
  constructor() {
    this.name = "van duc";
    this.age = 21;
  }
  //phuong thuc non-static:bat buoc phu thuoc vao doi tuong:khong co doi tuong ko truy cap duoc
  getName() {
    // return this; //this la doi tuong
    //call getid:tu phuong thuc binh thuong truy cap vao phuong thuc tinh
    //tao class va goi getid
    console.log(this.constructor.getId());
    return "f8";
  }
  //phuong thuc static
  static getAge() {
    console.log(this); //this la class
    //call getname:tu phuong thuc tinh truy cap vao phuong thuc bth
    //tao obj
    const obj = new this(); //this=class
    return obj.getName();
  }
  static getId() {
    return "0328099109";
  }
  //thuoc tinh static: khong co tu khoa this va khong the khai bao trong constructor
  static msg = "duc01";
}

// console.log(Boy.msg);
// console.log(Boy.getAge());
// const boy = new Boy();
// console.log(boy.getName());
// console.log(parseInt(Boy.getId()));

class Person {
  #age;
  constructor() {
    this.name = "vanished";
    this.email = "vanished@gmail.com";
    this.#age = 21;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.#age;
  }
  //   getName() {
  //     return this.name;
  //   }
  set setEmail(value) {
    this.email = value;
  }
}
const person = new Person();

console.log(person.getName);
//bai toan goi phuong thuc nhu 1 thuoc tinh  console.log(person.getName);->them get
person.setEmail = "abc";
console.log(person);
//bai toan goi phuong thuc nhu 1 thuoc tinh =get va set
console.log(person.getAge);
