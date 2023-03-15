// Get, set value
function getValue() {
  let value = $("input").val();
  //   let value = document.querySelector("input").value; // Vanilla JS
  alert(value);
}

function setValue() {
  $("input").val("New value set!");
}

// Change CSS
function changeCssJS() {
  let span = document.querySelector("span");
  span.style = "font-size: 30px; color: red;";
}

function changeCssJquery() {
  $("span").css("font-size", "50px");
  $("span").css("color", "blue");
  // Get value
  console.log($("span").css("color"));
}

// Set attribute
function changeAttrJS() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}

function changeAttrJquery() {
  $("a").attr("href", "https://www.apple.com");
}

// Set text, HTML tag not affected
function changeTextJS() {
  let p = document.querySelector(".p-text");
  p.innerText = "Changed with <b>JS</b>";
}

function changeTextJquery() {
  $(".p-text").text("Changed with <b>JQuery</b>");
}

// Set HTML, HTML tag affected
function changeHtmlJS() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "Changed with <b>JS</b>";
}

function changeHtmlJquery() {
  $(".p-html").html("Changed with <b>JQuery</b>");
}

// Add Elements
// append()
function appendJS() {
  let li = document.createElement("li");
  li.innerText = "append() an element with JS.";

  let ul = document.querySelector("ul");
  ul.append(li);
}

function appendJquery() {
  $(".colors").append("<li>append() an element with JQuery</li>");
}

// prepend()
function prependJS() {
  let li = document.createElement("li");
  li.innerText = "prepend() an element with JS.";

  let ul = document.querySelector("ul");
  ul.prepend(li);
}

function prependJquery() {
  $(".colors").prepend("<li>prepend() an element with Jquery.</li>");
}

// after()
function afterJS() {
  let afterGreen = document.querySelector(".green");

  let li = document.createElement("li");
  li.innerText = "after() Add a sibiling with JS";

  afterGreen.after(li);
}

function afterJquery() {
  $(".green").after("<li>after() Add a sibiling with Jquery</li>");
}

// before()
function beforeJS() {
  let beforeGreen = document.querySelector(".green");

  let li = document.createElement("li");
  li.innerText = "before() Add a sibiling with JS";

  beforeGreen.before(li);
}

function beforeJquery() {
  $(".green").before("<li>before() Add a sibiling with JQuery</li>");
}

/* Remove Elements */
// remove()
function removeJS() {
  let li = document.querySelector("#li2");
  li.remove();
}

function removeJquery() {
  $("#li2").remove();
}

// empty()
function emptyJS() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}

function emptyJquery() {
  $("ul.nums").empty();
}

/* Find Elements */
function findParent() {
  // parent() : return parent
  console.log($(".child2").parent());
}

function findParents() {
  // parents() : return all parents
  console.log($(".child2").parents());
}

function findNext() {
  // next() : return next sibling
  console.log($(".child2").next());
}

function findPrev() {
  // prev() : return previous sibling
  console.log($(".child2").prev());
}

function findChildren() {
  // children() : return  all children, the same as children() in JS
  console.log($(".parent").children());
  console.log(document.querySelector(".parent").children);
}

// Class 조작
function addClass() {
  $("#hi").addClass("fs-50");
}

function removeClass() {
  $("#hi").removeClass("fs-50"); // Remove certain class
  //   $("#hi").removeClass(); // Remove all classes of $("#hi")
}

function hasClass() {
  // return true or false
  console.log($("#hi").hasClass("fs-50"));
}

function toggleClass() {
  // if the class exists remove it.
  // if the class does not exist, create one.
  $("#hi").toggleClass("bg-green");
}
