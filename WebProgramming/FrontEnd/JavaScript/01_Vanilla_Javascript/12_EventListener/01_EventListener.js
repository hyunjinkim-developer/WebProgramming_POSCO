let btn1 = document.querySelector(".btn--black");
let btn2 = document.querySelector(".btn--green");
let btn3 = document.querySelector(".btn--blue");
let btn4 = document.querySelector(".btn--red");
console.log(btn1, btn2, btn3, btn4);

console.log("===============");
/* btn1.addEventListener(동작이름", function); */
btn1.addEventListener("click", function () {
  alert("You've clicked button 1!");
});

btn1.addEventListener("mouseover", function () {
  // btn1.style.backgroundColor = "gray";
  this.style.backgroundColor = "gray";
});

console.log("===============");
let container = document.getElementById("container");
// console.log(container);

btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "hi";
  container.append(div);
});

/* Should not use () in function */
btn3.addEventListener("click", changeColor);
function changeColor() {
  let div = document.createElement("div");
  div.innerHTML = "hello";
  container.append(div);

  let divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }

  divs[divs.length - 1].style.backgroundColor = "green";

  for (let i = 0; i < divs.length; ++i) {
    if (i % 2 === 0) {
      divs[i].style.backgroundColor = "yellowgreen";
    }
  }
}

btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  this.style.backgroundColor = "orange";
  this.style.color = "#000";
}

console.log("===============");
console.log(window);
window.addEventListener("scroll", function (event) {
  console.log(event);
  console.log(scrollY);

  //   console.log(this.scrollY);
  let pos = document.querySelector(".pos");
  if (this.scrollY > 400) {
    pos.style.opacity = "1";
  }
});

console.log("===============");
const btn = document.querySelector("button");
const input = document.querySelector("input");
// console.log(btn, input);
btn.addEventListener("click", function (event) {
  console.log(event);
});

console.log("===============");
input.addEventListener("keydown", function (e) {
  console.log(e.code);
  console.log(e.key);
  /* not using e.keyCode */
  //   console.log(e.keyCode);

  if (e.code === "ArrowUp") {
    console.log("You typed arrow up.");
  } else if (e.code === "ArrowDown") {
    console.log("You typed arrow down.");
  } else if (e.code === "ArrowRight") {
    console.log("You typed arrow right.");
  } else if (e.code === "ArrowLeft") {
    console.log("You typed arrow left.");
  } else {
    console.log("You typed others.");
  }
});

console.log("===============");
const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");
// console.log(todoForm, todos);

todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  // When form is submitted, the page is refreshed
  e.preventDefault(); // Prevent form to submitted, prevent event occur

  const todoInput = document.querySelector("input[name='todo']");
  //   console.log(todoInput); // show tag
  //   console.dir(todoInput); // show input's all data
  //   console.log(todoInput.value);

  // Caution return of in put is string
  // .trim() Remove whitespaces before and after strings
  const todo = todoInput.value.trim();
  if (todo !== "") {
    // Get value only when it's not empty string
    const newTodo = document.createElement("li"); // New <li></li> created
    newTodo.append(todo); // <li>[todo's string]</li>
    todos.append(newTodo);
  }

  // Initialize <input />
  todoInput.value = "";
});

console.log("===============");
const changeInput = document.querySelector("#change-input");
changeInput.addEventListener("change", function () {
  //   console.log("Changed!");
});

changeInput.addEventListener("input", function () {
  console.log("changed!!"); // only value that shows in <input /> counts

  let div = document.querySelector(".intro");
  div.innerHTML = changeInput.value;
});
