//xu ly bat dong bo
//van co 1 so ham dong bo trong js :alert,confirm

const getA = () => {
  console.log("getA");
};

const getB = () => {
  console.log("getB");
};

const getC = () => {
  console.log("getC");
};
// confirm();
getA();
getB();
getC();
//3 cach su ly bat dong bo
/**
 * callback(es5)
 * promise(es6)
 * async await function(es7)
 */

//promise
//obj de xu ly cac tac vu bat dong bo

/**
 Promise State
 -pending:cho xu ly
 -fulfilled:xu ly thanh ocong
 -reject:xu ly that bai
 */
const promise = new Promise((resolve, reject) => {});
console.log(promise);
