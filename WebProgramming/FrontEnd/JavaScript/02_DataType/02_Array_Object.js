// Data type 6. Array

// 1 dimensional array
let fruits1 = ["orange", "pineapple", "grape", "apple"];
let fruits2 = new Array("orange", "pineapple", "grape", "apple");

console.log(fruits1);
console.log(fruits2);
console.log(fruits1[0]);
console.log(fruits2[1]);

let data = [1, "hyunjin", false, null, undefined];
console.log(data[4]);

// 2 dimensional array
/* VSCode extensions: prettier */
/* Setting:
    Editor: enable Format On Save 
    Editor: Default Formatter -> Prettier - Code formatter
*/
let korean = [
  ["가", "나", "다"],
  ["라", "마"],
  ["바", "사"],
];
console.log(korean);
console.log(korean[0]);
console.log(korean[0][0]);
console.log(korean[1][1]);

// 3 dimensional array
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
console.log(nums);
console.log(nums[1][0][1]);

// 7. object
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
  meow: function () {
    return "meow";
  },
};
console.log(cat);
// Print value (of key)
// objectName.keyName
console.log(cat.name);
console.log(cat.age);
console.log(cat.meow());
// objectName["keyName"]
console.log(cat["name"]);
