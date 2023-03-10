/* Methods for string
- toUppercase(), toLowercase()
- trim()
- indexOf()
- slice()
- replace(), replaceAll() 
- repeat()
*/

let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon     ";

// String indexing
console.log(str1[0]);
console.log(str1[0] + str1[12] + str1[14] + str1[9]);
// string[negative index] returns undefined

console.log(str1.length);
console.log(str2.length); // .length counts whitespaces

console.log("===================");
let msg = "Happy Birthday!";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

console.log("===================");
console.log(str2);
console.log(str2.trim());
console.log(str2.trim().length);

console.log("------------------");
let msg2 = "    hello world!    ";
console.log(msg2.trim().toUpperCase());

console.log("===================");
// String method with parameter
let fruit = "applemango";
console.log(fruit.indexOf("a"));
console.log(fruit.indexOf("apple")); // starting index of parameter
console.log(fruit.indexOf("x")); // if character does not exist, return -1

console.log("------------------");
console.log(fruit.charAt(3)); // return character of index

console.log("===================");
console.log(fruit.slice(5)); // return from character of parameter to the end of the string
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3));

// Original string does not changed after using string methods
console.log(fruit);

console.log("===================");
let msg3 = "Wow! It's amazing!";
console.log(msg3.replace("Wow", "Hey"));
console.log(msg3.replaceAll("a", "o"));
console.log(msg3.replace("a", "o")); // Only first match replaced

console.log("===================");
let date = "23/Mar/10";
console.log(date.split("/"));

console.log("===================");
console.log("hi ".repeat(5));

console.log("===================");
