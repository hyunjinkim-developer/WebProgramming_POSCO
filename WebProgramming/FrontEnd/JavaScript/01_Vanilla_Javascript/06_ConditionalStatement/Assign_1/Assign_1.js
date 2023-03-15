let age = Number(prompt("Type if your age: "));

// if (age > 100 || age < 0) {
//   console.log("Not appropriate age. Type in again.");
// } else if (age >= 20) {
//   console.log("Adult");
// } else if (age >= 17) {
//   console.log("High school student");
// } else if (age >= 14) {
//   console.log("Middle school student");
// } else if (age >= 8) {
//   console.log("Elementary school student");
// } else {
//   console.log("Juvenile");
// }

if (age > 100 || age < 0) {
  console.log("Not appropriate age. Type in again.");
} else if (0 <= age && age < 8) {
  console.log("Juvenile");
} else if (8 <= age && age < 14) {
  console.log("Elementary school student");
} else if (14 <= age && age < 17) {
  console.log("Middle school student");
} else if (17 <= age && age < 20) {
  console.log("High school student");
} else {
  console.log("Not appropriate age. Type in again.");
}
