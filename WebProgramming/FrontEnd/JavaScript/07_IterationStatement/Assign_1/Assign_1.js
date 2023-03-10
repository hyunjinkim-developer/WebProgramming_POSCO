for (let i = 0; i <= 10000; ++i) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}

let input = Number(prompt("Type in number:"));
for (let i = 0; i <= input; ++i) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(`${i} is common multiple of 13 and odd number.`);
  }
}
