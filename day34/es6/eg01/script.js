//promise hell
const getA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("get A");
    }, 1000);
  });
};
const getB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("get B");
    }, 1500);
  });
};
const getC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("get C");
    }, 500);
  });
};

// goi lan luot get a ->get b-> get c

// getA()
//   .then((response) => {
//     console.log(response);
//     return getB();
//   })
//   .then((response) => {
//     console.log(response);
//     return getC();
//   })
//   .then((response) => {
//     console.log(response);
//   });
// => promise chaining

const getRequest = () => {
  return new Promise((resolve) => {
    const data = { name: "F8", teacher: "Hoang An" };
    const response = {
      text: () =>
        new Promise((resolve) => {
          resolve(JSON.stringify(data));
        }),
      json: () =>
        new Promise((resolve) => {
          resolve(data);
        }),
    };
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};
getRequest()
  .then((response) => {
    //lua chon kieu du lieu tra ve
    //yeu cau return response.json() tra ve obj
    //yeu cau return response.text() tra ve json

    return response.text();
  })
  .then((data) => {
    console.log(data);
  });

// console.log(getRequest());
