function multiply1(num1, num2) {
  return num1 * num2;
}
console.log(multiply1(1, 2));

let multiply2 = function (num1, num2) {
  return num1 * num2;
};
console.log(multiply2(3, 4));

let multiply3 = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply3(5, 6));
