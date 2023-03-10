console.log("Connected!");

/* if */
if (5 > 3) {
  console.log("True");
}

// Get input from user
let grade = Number(prompt("Type in number"));
// value get from prompot() is string
// grade = Number(grade);
console.log(typeof grade);

/* else */
if (grade > 10) {
  console.log("This number is greater than 10");
} else {
  console.log("This number is smaller than 10");
}

/* else if */
if (grade < 10) {
  console.log("This number is smaller than 10");
} else if (grade === 10) {
  console.log("This number is equal to 10");
} else {
  console.log("This number is bigger than 10");
}

/* ------------------------- */
if (grade > 100 || grade < 0) {
  console.log("Not appropriate number. Type in again.");
} else if (grade >= 100) {
  console.log("A");
} else if (grade >= 90) {
  console.log("B");
} else if (grade >= 80) {
  console.log("C");
} else if (grade >= 70) {
  console.log("D");
} else {
  console.log("F");
}

console.log("==================");
/* switch */
/* switch (variable) {
    case value1;
    case value2;
    case value3;
}
*/

let value = 4;
switch (value) {
  case 3:
    console.log("value is 3");
    break;
  case 4:
    console.log("value is 4");
  // break;
  case 5:
    console.log("value is 5");
    break;
  default:
    console.log("This will always run on switch statement");
    break;
}

console.log("----------------");
// Cannot assgin variable with the same name!
// let grade = 30;

switch (grade) {
  case grade >= 100:
    console.log("A");
    break;
  case grade >= 90:
    console.log("B");
    break;
  case grade >= 80:
    console.log("C");
    break;
  case grade >= 70:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

grade = 30;
// Get only quotient
console.log(parseInt(grade / 30));
switch (grade / 10) {
  case 10:
    console.log("A");
    break;
  case 9:
    console.log("B");
    break;
  case 8:
    console.log("C");
    break;
  case 7:
    console.log("D");
    break;
  default:
    console.log("F");
}
