console.log("connected!");

for (let i = 0; i < 10; ++i) {
  console.log("Hi", i);
}

console.log("--------------");
for (let i = 0; i < 10; i += 2) {
  console.log(`Hello ${i}`);
}

console.log("--------------");
for (let i = 0; i < 10; i = i + 3) {
  console.log(i);
}

console.log("--------------");
for (let i = 1; i <= 5; ++i) {
  console.log(i);
}

console.log("--------------");
for (let i = 0; i < 5; ++i) {
  console.log(i);
}

console.log("--------------");
for (let i = 5; i > 0; --i) {
  console.log(i);
}

console.log("--------------");
let n = 11;
let sum = 0;
for (let i = 1; i <= n; ++i) {
  sum += i;
}
console.log(sum);

/* for statement for array */
let frutis = ["apple", "mango", "grapefruit", "tangerine"];
for (let i = 0; i < frutis.length; ++i) {
  console.log(frutis[i]);
}

console.log("--------------");
let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;
for (let i = 0; i < numsArr.length; ++i) {
  numsSum += numsArr[i];
}
console.log(numsSum);

// 1 ~ 20 짝수일 때의 합 구하기
let sum2 = 0;
for (let i = 0; i <= 20; ++i) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}
console.log(sum2);
