var numbers = [5, 1, 9, 8, 10];
var index = 5;
var element = 4;
console.log(numbers);
for (var i = numbers.length; i > index; i--) {
  numbers[i] = numbers[i - 1];
}
numbers[index] = element;
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
