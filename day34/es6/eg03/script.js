//try catch duoc dung de xu ly cac loi ngoai le
/**
 Block try: chua doan code muon bat loi
 Block catch: chua thong tin loi
 try: co loi-> catch se hoat dong
 finally: chay cuoi cung
 */
// console.log("hello world!");
// var a = 6;
// try {
//   if (a < 10) {
//     throw new Error("a phai >10");
//   }
// } catch (exception) {
//   console.log(exception.message);
// }

//async await
/**
 async function luon tra ve 1 promise
 */

const getUser = async () => {
  return "van duc";
};
// console.log(getUser());
getUser().then(function (data) {
  console.log(data);
});
