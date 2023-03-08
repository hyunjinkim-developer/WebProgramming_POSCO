// Var type
var name = "홍길동";
console.log(name);
// redefine
var name = "이몽룡";
console.log(name);

/* let
Recommended!
1. Cannot redefine 
2. when defined, ot initialized is allowed
*/
let variable = 1;
// Reassign allowed
variable = 2;
console.log(variable);

/* const
1. Cannot redefine, reassign 
2. Should initialize value when defined */
const variableConst = 3;
console.log(variableConst);

// 식별자(변수, 함수)이름 규칙
// 1. $ _
let $ = 5;
console.log($);

let _ = 6;
console.log(_);

/* variable name start with number is not allowed
let 1st = 7;
console.log(1st); */

/* dashcase not allowed 
let s-t = 1;
console.log(s-t); */

/* keyword is not allowed
var, let, const, if, for,
etc.*/
