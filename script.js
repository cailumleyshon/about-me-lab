let userName = "";

while (userName === "") {
  userName = prompt("Enter a username please!");

  if (userName === null) {
    alert("You must enter a username to access this site.");
  }
}

console.log("Welcome " + userName + "! Nice to have you here.");
alert("Welcome " + userName + "! Nice to have you here.");
