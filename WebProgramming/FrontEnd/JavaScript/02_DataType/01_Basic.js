// Use camel case for .js

/*  shortcut: opt + shft + a
Data type:
    - Basic:
        - string
        - number
        - boolean
        - null
        - undefined
        - null
*/

// 1. String
let myName = "Hyunjin";
let email = "hyunjinkim.developer@naver.com";
let cityQuote1 = '"서울"';
let cityQuote2 = "'서울'";

console.log(myName);
console.log(email);
console.log(cityQuote1);
console.log(cityQuote2);

// 문자와 변수를 동시에 출력
// , : Space inserted
console.log("My name is", myName, ". My email is", email, "");
// + : Without space
console.log("My name is" + myName + ". My email is" + email + ".");
// Template literal
console.log(`My name is ${myName}. My email is ${email}.`);

let introduction = `My name is ${myName}. My email is ${email}`;
console.log(introduction);

// 2. number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);

// NaN : not a number
console.log("apple" - 3);

// 3. boolean
let checked = true;
let unchecked = false;
console.log(checked);
console.log(unchecked);

// 4. undefined
let undef;
console.log(undef);

// 5. null
let empty = null;
console.log(empty);
