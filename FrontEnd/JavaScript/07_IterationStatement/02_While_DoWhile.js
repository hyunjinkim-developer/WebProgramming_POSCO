console.log("Connected!");

/* while */
let n1 = 1;
while (n1 <= 5) {
  console.log(n1);
  ++n1;
}

console.log("----------");
n1 = 5;
while (n1 > 0) {
  console.log(n1);
  --n1;
}

console.log("----------");
n1 = 10;
while (n1 >= 1) {
  if (n1 % 2 === 0) {
    console.log(n1);
  }
  --n1;
}

console.log("----------");
console.log("Infinite loop");
// while (true) {
//   console.log("Hi");
// }

console.log("----------");
n1 = 1;
while (true) {
  console.log("Hello");
  if (n1 === 10) {
    break;
  }
  ++n1;
}

console.log("----------");
// .js confirm()
n1 = 0;
while (confirm("Continue?")) {
  /* User push yes -> true
                 no -> false */
  ++n1;
  if (n1 === 1) {
    alert(`First alert window.`);
  } else if (n1 === 2) {
    alert(`Second alert window.`);
  } else {
    alert(`${n1}th alert window.`);
  }
}

console.log("----------");
// continue
let sum = 0;
for (let i = 0; i < 10; ++i) {
  if (i % 2 === 0) {
    continue;
  }
  sum += i;
}
console.log(sum);
