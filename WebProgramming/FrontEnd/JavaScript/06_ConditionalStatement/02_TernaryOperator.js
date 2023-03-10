// TernaryOperator
let num = 5;
if (num % 2 === 1) {
  console.log("odd");
} else {
  console.log("even");
}

num % 2 === 1 ? console.log("odd") : console.log("even");

console.log("=============");
console.log("Get only hour");

let now = new Date().getHours();
console.log(now);

parseInt(now / 12) === 0 ? console.log("A.M.") : console.log("P.M.");
console.log(now < 12 ? "A.M." : "P.M.");

let time = now < 12 ? "A.M." : "P.M.";
console.log(time);
