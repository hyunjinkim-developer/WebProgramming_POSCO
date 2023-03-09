/* 링크 잘 걸렸는지 확인 */
console.log(".js linked!");

console.log("================");
/* 함수 선언문 
    어디에서든 호출 가능. */
function helloWorld1() {
  console.log("1. hello world!");
}
helloWorld1();

function helloWorld2() {
  return "2. helloworld";
}
/* Does not show result on console */
helloWorld2();

function add(num1, num2) {
  console.log("Hi");
  return num1 + num2;
}
/* Show return value of function */
console.log(add(3, 4));

function add2(num1, num2) {
  console.log(num1 + num2);
}
let result = add(5, 5);
let result2 = add2(5, 5); // add2 does not return value, as a result result2 is undefined
console.log(result, result2);

console.log("-----------------");
// 매개변수 있는 함수
function sayHello1(text) {
  return text;
}
console.log(sayHello1("Hello"));

function sayHello2(text, name) {
  return `${text}! This is ${name}`;
}
console.log(sayHello2("Hi", "Jin"));

console.log("================");
/* 함수 표현식
    코드에 도달해야만 함수가 인식됨. 
    함수가 선언된 이후에만 함수 사용 가능. */
// helloWorld3();
let helloWorld3 = function () {
  console.log("3. helloWorld");
};
helloWorld3();

//매개변수 있는 함수 표현식
let hi1 = function (text, name) {
  return `${text}! This is ${name}!`;
};
console.log(hi1("Hi", "Hyunjin"));

console.log("================");
/* 화살표 함수 
    함수 표현식의 축약형태 */
// helloWorld4();
let helloWorld4 = () => {
  console.log("4. helloworld");
};
helloWorld4();

// 매개변수 있는 화살표 함수
let hi2 = (text, name) => {
  console.log(`${text}! This is ${name}`);
};
hi2("Hello", "Jinnie");
