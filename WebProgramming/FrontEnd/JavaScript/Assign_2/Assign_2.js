let fruits1 = [
  "apple",
  "strawberry",
  "pineapple",
  "watermelon",
  "korean melon",
  "orange",
  "plum",
  "mango",
];
let fruits2 = [
  "watermelon",
  "apple",
  "korean melon",
  "orange",
  "pineapple",
  "mango",
];

let same = [];
let diff = [];

for (fruit1 of fruits1) {
  let flag = 0;
  for (fruit2 of fruits2) {
    if (fruit1 === fruit2) {
      same.push(fruit1);
      flag += 1;
      break;
    }
  }
  if (flag === 0) {
    diff.push(fruit1);
  }
}
console.log(same);
console.log(diff);

console.log("=================");
/* .includes() */
let same1 = [];
let diff1 = [];

for (let i = 0; i < fruits1.length; ++i) {
  if (fruits2.includes(fruits1[i])) {
    same1.push(fruits1[i]);
  } else {
    diff1.push(fruits1[i]);
  }
}
console.log(same1);
console.log(diff1);

console.log("=================");
/* .filter() */
let same2 = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff2 = fruits1.filter((fruit) => !fruits2.includes(fruit));
console.log(same2);
console.log(diff2);

console.log("=================");
let hi = ["hello world", "hi"];
for (let i = 0; i < hi[0].length; ++i) {
  console.log(hi[0][i]);
}
