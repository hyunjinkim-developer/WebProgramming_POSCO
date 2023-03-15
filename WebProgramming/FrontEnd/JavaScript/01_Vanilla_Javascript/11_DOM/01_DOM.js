/* DOM: Document Object Model */
// 선택자
// querySelector();
// querySelectorAll();
// getElementById();
// getElementByClassName

console.log(document);
console.log(document.head);
/* defer라는 키워드 달아주기 */
/* if not, body is yet to be read, null value occurs */
console.log(document.body);
console.log(document.title);
console.log(document.URL);

// getElementById
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

console.log("=================");
// getElementByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));
console.log(document.getElementsByClassName("others")[0]);

console.log("==================");
// getElementByTagName
console.log(document.getElementsByTagName("div"));

console.log("==================");
// getElementByName
/* name using where data is passed to backend */
console.log(document.getElementsByName("id"));

console.log("==================");
// querySelector()
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));

console.log(document.querySelector("#green"));

console.log(document.querySelector("div"));

console.log(document.querySelector("[name='id']"));

console.log("==================");
// querySelector()
console.log(document.querySelectorAll(".pink"));
console.log(document.querySelectorAll("input"));

console.log("---------");
console.log(document.querySelectorAll(".pink")[0]);
console.log(document.querySelectorAll(".pink")[1]);
console.log(document.querySelectorAll(".pink")[2]);
console.log(document.querySelectorAll(".pink")[3]);

console.log("---------");
let pinks = document.querySelectorAll(".pink");
console.log(pinks);
for (let i = 0; i < pinks.length; ++i) {
  console.log(pinks[i]);
}

console.log("---------");
for (let el of pinks) {
  console.log(el);
}
