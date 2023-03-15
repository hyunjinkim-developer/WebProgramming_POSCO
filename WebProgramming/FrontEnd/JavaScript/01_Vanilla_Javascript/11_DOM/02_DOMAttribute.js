let div1 = document.getElementById("div1");
console.log(div1);

div1.innerHTML = "<b>Hello</b> World! &hearts";
console.log(div1);
console.log(div1.innerHTML);

// .innerText VS .textContent
// tag가 그대로 보임
/* .innerText :
    - 공백분자 제거 */
/* .textContent : 
    - 공백 문자 그대로 반환
    - IE9 이전 사용 불가
*/
div1.innerHTML = "  <b>Hello</b> World! &hearts ";
console.log(div1.innerHTML);
div1.textContent = "<b>Hello</b> World! &hearts ";
console.log(div1.textContent);

// div1.innerHTML = "<ul><li>1</li><li>2</li></ul>";

console.log("=============");
/* 속성 변경 */
let naver = document.getElementById("naver");
console.log(naver);
naver.setAttribute("href", "https://www.google.com");

console.log("=============");
console.log(document.getElementById("pooh").getAttribute("id"));
// 직접 접근
console.log(document.getElementById("pooh").id);

console.log(document.getElementById("pooh").getAttribute("src"));
// 직접 접근
console.log(document.getElementById("pooh").src);

console.log("=============");
naver.href = "#";

console.log("=============");
/* CSS 지정 */
let h1 = document.querySelector("h1");
let list = document.querySelectorAll("ul > li");

console.log(h1);
console.log(list);

// style 속성 사용
// Use camel case in JS
list[0].style.backgroundColor = "purple";
for (let li of list) {
  li.style.backgroundColor = "yellow";
  li.style.color = "#f00";
  li.style.fontsize = "2rem";
}

// classList 사용
// classList.add
// classList.remove
// classList.contain : return true contains class otherwise return false
// classList.toggle : if certain class exists, remove that class/ if not exist, add the class
console.log(h1.classList);
h1.classList.add("add-h1");

/* Node 찾기 */
let friends = document.querySelector("#friends");
let tigger = document.getElementById("tigger");
console.log(friends);
console.log(tigger);

console.log("==자식 노드에 접근==");
console.log(friends.children);
console.log(friends.children[0]);

console.log("==부모 노드에 접근==");
console.log(tigger.parentNode);

console.log("==형제 노드에 접근==");
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

/* 요소 생성, 추가, 삭제 */
let container = document.querySelector(".container");
console.log(container);

// Create p tag
let p = document.createElement("p");
p.innerText = "New tag has been made!";
p.style.fontWeight = "700";
p.style.backgroundColor = "red";
// 요소.append : 선택된 요소의 맨 마지막 자식으로 추가됨
container.append(p);

let p2 = document.createElement("p");
let p3 = document.createElement("p");
p2.innerHTML = "p2";
p3.textContent = "p3";
p2.classList.add("p-2");
p3.classList.add("p-3");
container.append(p2, p3);

// 요소.prepend : 선택된 요소의 맨 첫번째 자식으로 추가됨
let li1 = document.createElement("li");
li1.textContent = "캉가";
friends.prepend(li1);

/* 
before : 선택된 요소의 앞에 추가
after : 선택된 요소의 뒤에 추가
*/

let h2 = document.createElement("h2");
h2.innerText = "h2";
h1.before(h2);

let h3 = document.createElement("h3");
h3.innerText = "h3";
h1.after(h3);

// 요소 삭제
/*
- 요소.remove() : 선택된 요소 삭제
- 요소.removeChild(자식 요소) : 요소의 자식요소(parameter)가 삭제됨
 */
let firstLi = document.querySelector("li");
console.log(firstLi);
let ul = firstLi.parentNode;
console.log(ul);

// remove 캉가
// firstLi.remove();
ul.removeChild(firstLi);
