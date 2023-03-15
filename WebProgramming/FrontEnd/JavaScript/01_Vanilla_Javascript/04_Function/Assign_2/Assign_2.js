function square1(num) {
  return num ** 2;
}
console.log(square1(3));

let square2 = function (num) {
  console.log(num ** 2);
};
square2(2);

let square3 = (num) => {
  return num ** 2;
};
console.log(square3(1));
