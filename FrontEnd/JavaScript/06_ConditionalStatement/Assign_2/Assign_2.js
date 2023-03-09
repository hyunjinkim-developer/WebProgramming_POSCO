let userId = "user01";
let userPw = "1234qwer";

function loginUser() {
  let inputId = prompt("Type in id: ");
  let inputPw = prompt("Type in pw: ");

  if (userId === inputId) {
    if (userPw === inputPw) {
      console.logasdf("Login success!");
    } else {
      console.log("Incorrect pw.");
    }
  } else if (inputId == "") {
    alert("You did not type in id.");
  } else {
    alert("Incorrect id");
  }
}

loginUser();
