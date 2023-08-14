//ham reduce(callback,initialValue)
/**
 * callback nhan 3 tham so
 * prevalue gia tri cua lan lap truoc neu return
 * current value gia tri cua lan lap hien tai
 * index gia tri cua index
 * initial value gia tri khoi tao cua prevalue
 * gia tri cua ham reduce la lan return cuoi cung
 */
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var result = number.reduce(function (prevalue, current, index) {
//   {
//     console.log(prevalue, current);
//     return current;
//   }
// });
var number = [5, 1, 9, 2, 6];

// var total = number.reduce(function (prevalue, current) {
//   return prevalue + current;
// }, 0);
// console.log(total);
//tim max min
//su dung reduce
var max = number.reduce(function (prevalue, current) {
  //   if (prevalue >= current) return prevalue;
  //   else return current;
  return prevalue >= current ? prevalue : current;
});
// console.log(max);

//turn 1: pre=5;cur=1 pre>cur=>prenext=pre=5
//turn 2: pre=5;cur=9 pre<cur=>prenext=cur=9
//turn 3: pre=9;cur=2 pre>cur=>prenext=pre=9

var arr1 = [5, 2, 1, 9, 8];
var arr2 = [3, 2, 1, 9];
//tim phan tu xuat hien trong mang 1 ma khong xuat hien trong mang 2
// =>[5,1]
// var result = arr1.reduce(function (prevalue, current) {
//     var check=arr1.find(function (arr){
//         if (arr==prevalue) return prevalue)
//     }
// });
// var diff = arr1.reduce(function (prevalue, current) {
//   //   if (!arr2.includes(current)) {
//   //     prevalue.push(current);
//   //   }
//   !arr2.includes(current) && prevalue.push(current);
//   return prevalue;
// }, []);
// console.log(diff);
//tham chieu
// var arr3 = arr1;
//ki thuat clone

// var arr3 = arr1.map(function (arr) {
//   return arr;
// });

var arr3 = arr1.filter(function (arr) {
  return true;
});
arr3[0] = 10;
// console.log(arr1);
// console.log(arr3);

var getToTal = function () {
  Array.from(arguments).forEach(function (arr) {
    console.log(arr);
  });
};
// getToTal(1, 2, 3, 4);
