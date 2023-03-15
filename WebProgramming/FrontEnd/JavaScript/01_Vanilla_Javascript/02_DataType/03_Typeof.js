/* typeof */
console.log(typeof "문자");

console.log(typeof 1);

console.log(typeof true);

console.log(typeof NaN); // number

console.log(typeof null);

let undef;
console.log(typeof undef);

let nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(typeof nums);

let cat = {
  name: "나비",
  age: 1,
  isCute: true,
  meow: function () {
    return "meow";
  },
};
console.log(typeof cat);
