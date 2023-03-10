/* Array Method
// original array will be changed
- push
- pop
- unshift
- shift 

- indexOf
- join
- reverse

- filter
- map

- find
*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["dog", "rabbit", "quakka", "turtle"];

// Array Indexing
arr1[5] = 6;
console.log(arr1);
// empty created in the middle! Always check index before insert new element!
arr1[8] = 6;
console.log(arr1);

console.log("====================");
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(10);
console.log(arr1); // original array changed

console.log("----------");
console.log(arr1.pop());
console.log(arr1); // original array changed

console.log("----------");
arr2.unshift("cat");
console.log(arr2);

console.log("----------");
console.log(arr2.shift());
console.log(arr2);

console.log(".includes()====================");
// .includes(element) check whether element exists
console.log(arr2.includes("quakka"));

console.log(".indexOf()====================");
console.log(arr1.indexOf(4)); // check value and type

console.log(".reverse()====================");
console.log(arr1.reverse());
console.log(arr1); // original array will be changed

console.log(".join()====================");
str1 = arr1.join();
console.log(str1);

str2 = arr1.join("");
console.log(str2);

console.log(".filter()================");
arr1.filter(function (num) {
  return num > 3;
}); // value of array is not changed
console.log(arr1);
let arr = arr1.filter(function (num) {
  return num > 3;
});
console.log(arr);

animals = ["quakka", "turtle", "rabbit", "dog"];
let arr3 = animals.filter(function (el) {
  return el.length >= 6;
});
console.log(arr3);

console.log(".map()===============");
// .map(): 배열 내의 모든 원소에 대해 연산한 결과를 모아서 새로운 배열 반환
let arr4 = [1, 2, 3].map(function (el) {
  return el * 3;
});
console.log(arr4);

console.log("-------------");
arr4 = [1, 2, 3, 4, 5].map((el) => {
  return el * 10;
});
console.log(arr4);

// remove {return } in arraow function is the same as above
arr4 = [1, 2, 3, 4, 5].map((el) => el * 10);
console.log(arr4);

console.log(".find()===============");
// .find(): 특정 조건을 만족하는 첫 번째 요소 반환
arr4 = [10, 20, 30, 40, 50];
let findResult = arr4.find((num) => num > 30);
console.log(findResult);
