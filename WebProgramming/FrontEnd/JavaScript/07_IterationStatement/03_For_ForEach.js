let arr1 = [1, 2, 3, 4, 5, 6];
let alphabets = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < arr1.length; ++i) {
  console.log(arr1[i]);
}

for (let i = 0; i < alphabets.length; ++i) {
  console.log(alphabets[i]);
}

console.log("for ( of )================");
for (let number of arr1) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

console.log("forEach================");
// parameter: value, index, arr in order!
arr1.forEach(function (data, index, arr) {
  console.log(data, index, arr);
});

alphabets.forEach((data, index) => {
  console.log(data, index);
});

alphabets.forEach(function (data) {
  console.log(data);
});

console.log("================");
