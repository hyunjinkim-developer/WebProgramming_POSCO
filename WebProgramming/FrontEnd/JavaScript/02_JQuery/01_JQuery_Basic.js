/* Show all buttons */
console.log($("button"));
console.log(document.querySelectorAll("button"));

// Vanilla JS -> specify index of nodeList to change css
// JQuery -> all of the elements in array affected
$("button").css("color", "red");

function submitjs() {
  document.querySelector("#div1").innerHTML = "Good to see you!";
  document
    .getElementById("div1")
    .setAttribute("style", "border: 2px solid blue");
}

function submitjquery() {
  $("#div1").html("How are you?");
  $("#div1").css("border", "3px dotted red");
}
