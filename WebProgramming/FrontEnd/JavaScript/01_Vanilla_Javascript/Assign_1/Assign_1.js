let array = [];
for (let i = 1; i <= 100; ++i) {
  array.push(i);
}
console.log(array);

console.log("==============");
let sumResult1 = 0;
for (let i = 0; i < array.length; ++i) {
  sumResult1 += array[i];
}
console.log(sumResult1);

console.log("==============");
let sumResult2 = 0;
for (let num of array) {
  sumResult2 += num;
}
console.log(sumResult2);

console.log("==============");
let sumResult3 = 0;
array.forEach(function (num) {
  sumResult3 += num;
});
console.log(sumResult3);

console.log("--------------");
let sumResult4 = 0;
array.forEach((num) => (sumResult4 += num));
console.log(sumResult4);

console.log("==============");
