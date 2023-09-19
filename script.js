let userName = prompt("What is your username?");

if (userName.length <= 3) {
  // console.log("Hello " + userName + "! That's a short user, but it'll do. Welcome to my site :)")
  alert(
    "Hello " +
      userName +
      "! That's a short user, but it'll do. Welcome to my site :)"
  );
} else if (userName.length <= 10) {
  // console.log("Hello " + userName + "! Welcome to my site :)")
  alert("Hello " + userName + "! Welcome to my site :)");
} else {
  // console.log("Hello " + userName + "! That's a long user, but it'll do. Welcome to my site :)")
  alert(
    "Hello " +
      userName +
      "! That's a long user, but it'll do. Welcome to my site :)"
  );
}
