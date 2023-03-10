/* JS Standard Built-in objects 
- Object
- Array 
- String
- Number
- Boolean

- Math: 
- Date: 시간, 날짜에 대한 정보를 얻기 위해 사용
*/

let now = new Date();
console.log(now);
console.log(now.getFullYear(), "년");
console.log(now.getMonth() + 1, "월"); // Start from 0
console.log(now.getDate(), "일");
console.log(now.getHours(), "시");
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay()); // Start from 0, Sunday/ 6, Saturday

console.log("====================");
// Get Date of today and check wheter weekdays or weekends
console.log(now.getDate() === 0 || now.getDate() === 6 ? "Weekend" : "Weekday");

console.log("====================");
switch (now.getDay()) {
  case 0: // Monday
    console.log("Weekend");
    break;
  case 6: // Saturday
    console.log("Weekend");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
}

console.log("--------------");
switch (now.getDay()) {
  case 0: // Monday
    console.log("Weekend");
    break;
  case 6: // Saturday
    console.log("Weekend");
    break;
  // Week days is always from 0 ~
  default:
    console.log("Weekday");
    break;
}

console.log("===============");
// Math
// attributes
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2); // Square root

// methods
console.log(Math.min(45, 2, 0, -5, 15));
console.log(Math.max(45, 2, 0, -1, 15));
console.log(Math.random()); // 0 <= x < 1
console.log(Math.round(5.5));
console.log(Math.floor(5.5));
console.log(Math.ceil(5.5));

console.log("------------");
console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10
// 0 <= x < 100
console.log(Math.floor(Math.random() * 100) + 1); // 1 <= x < 101
