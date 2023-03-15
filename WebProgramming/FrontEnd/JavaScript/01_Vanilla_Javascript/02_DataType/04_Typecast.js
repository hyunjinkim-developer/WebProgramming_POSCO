// Type Cast

// 1. to string
let bool = true;
let num = 123;
let empty = null;

console.log(typeof String(bool));
console.log(typeof String(num));
console.log(typeof String(empty));

console.log(typeof bool);
console.log(typeof bool.toString());

// 2. to number
let n1 = true;
let n2 = false;
let n3 = "123.9";
console.log(typeof n1, typeof n2, typeof n3);

console.log(typeof Number(n1)); // 1
console.log(n1);
console.log(typeof Number(n2)); // 0
console.log(n2);
console.log(typeof Number(n3));
console.log("Number() : ", n3);
console.log("parseInt(n3) : ", parseInt(n3));

/* console.log("==========");

// prompt() get string
let mathScore = Number(prompt("수학 점수를 입력하세요")); // 80
let engScore = Number(prompt("영어 점수를 입력하세요")); // 90

// Without type casting '8090' / 2 -> 4045
let avg = (mathScore + engScore) / 2;
console.log(avg);
 */

console.log("==========");
let num1 = "3";
let num2 = 2;
let num3 = "10";

// 문자열끼리 연산
// + 연산자, 문자열 나열
console.log(num1 + num3);
// + 이외의 연산자, 실제로 연산이 이루어짐
console.log(num1 - num3); // minus
console.log(num1 * num3); // multiply
console.log(num1 / num3); // divide

console.log("---------");
// 문자열, 숫자 간의 연산
// + 연산자, 문자열 숫자 나열
console.log(num1 + num2); // 문자 나열
// + 이외의 연산자, 실제로 연산이 이루어짐
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
