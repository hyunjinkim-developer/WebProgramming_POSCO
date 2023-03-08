console.log("Connected!");

// 산술연산자
/*
+
-
*
/
*/

let a = 5;
let b = 10;
console.log(a + b);
console.log((a = b));
console.log(a * b);
console.log(a / b);

console.log(a % b);
console.log(a ** b);

// 비교 연산자 Comparison operators
console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 != 1);

console.log("==================");

// 동등 연산자
console.log("== VS ===");
// == compare only value
console.log(1 == "1");
// === compare value and type
console.log(1 === "1");

console.log(1 !== "1");
console.log(1 !== "2");

console.log("-------------------");

// == is not recommended!
console.log(1 == "1");
console.log("0" == false);
console.log("" == 0);
console.log(null == undefined);
// Should use ===

console.log("==================");

// 크기 비교
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 2);

console.log("==================");
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(false || false);
console.log(true || false);
console.log(true || true);

console.log(!(2 > 1));
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && -2 < 1) || 5 > 2); // or는 하나만 true이면 전체가 true 이므로 (2 > 1 && =2 < 1)까지만 계산 함
