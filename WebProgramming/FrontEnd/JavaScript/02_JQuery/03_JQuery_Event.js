// console.log("connected!");

/* // Get window, document with Vanilla JS
console.log(window);
console.log(document); */

// Get window, document with JQuery
console.log($(window));
console.log($(document));

/* Mouse event */
// click(function () {})
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
  $(".p-msg").css("font-size", "50px");
});
// mouseover(function () {})

// hover(function() {When mouse is on}, function() {When mouse is off})
// hover not available with Vanilla JS
$(".div-hover").hover(
  function () {
    $(this).addClass("hover1");
  },
  function () {
    $(this).removeClass("hover1");
  }
);

$(window).scroll(function () {
  //   alert("Scroll");
  console.log("Scroll");
});

// Vanilla JS : [Element].addEventListener("keyDown")
$(".input-key").keydown(function (event) {
  //   console.log(event.code);

  if (event.code === "ArrowUp") {
    console.log("Up");
  } else if (event.code === "ArrowDown") {
    console.log("Down");
  } else if (event.code === "ArrowRight") {
    console.log("Right");
  } else if (event.code === "ArrowLeft") {
    console.log("Left");
  }
});

// on() in jQuery is the same as addEventListener() in Vanilla JS
/* use other functions 
    that are printed when you run 
    console.log($(window));
    instead of "click"
*/
$(".num").on("click", function () {
  $(this).css("color", "blue");
  $(".num").css("font-size", "30px"); // all of elements with class="num" affected
});

/* Todo list */
$("#todo-form").on("submit", function (event) {
  event.preventDefault(); // Prevent event, not to submitted (webpage to refreshed)

  const todoValue = $("input[name='todo']").val();
  $("ul.todos").append(`<li>${todoValue}</li>`);

  $("input[name='todo']").val(""); // initialize <input />
});
