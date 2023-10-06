const getUser = (id) => {
  const users = [
    { id: 1, name: "user 1", salary: 100 },
    { id: 2, name: "user 2", salary: 200 },
    { id: 3, name: "user 3", salary: 300 },
    { id: 4, name: "user 4", salary: 400 },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id: _id }) => id === _id);
      resolve(user);
    }, 1000);
  });
};
getUser(3).then((data) => {
  //   console.log(data);
});

const list = [1, 2, 4];
//tinh tong thu nhap 3 user co trong mang

let salary = 0;

const getSalary = () => {
  for (let index in list) {
    const promise = getUser(list[index]).then((user) => {
      salary += user.salary;
      return salary;
    });
    if (+index === list.length - 1) {
      return promise;
    }
  }
};

getSalary().then((salary) => {
  //   console.log(salary);
});

//promise all

//giai quyet cac bai toan su dung nhieu promise cung luc (multi promise)
/**
 * b1: tao ra 1 mang chua tat ca cac promise=request
 * b2: dua mang chua promise vao promise all
 */

const requests = list.map(
  (id) =>
    new Promise((resolve) => {
      resolve(getUser(id));
    })
);
// console.log(requests);

Promise.all(requests).then((users) => {
  const salary = users.reduce((total, user) => total + user.salary, 0);
  //   console.log(salary);
});

const promises = Promise.resolve("f8");
promises.then((data) => {
  console.log(data);
});
const promises2 = Promise.reject("error");
promises2.catch((error) => {
  console.log(error);
});
