let knowledgeScore = 0;

let firstQuestion = prompt("Is Cailum's favourite music Rock music?");
let firstQuestionLower = firstQuestion.toLowerCase();

if (firstQuestion === "no" || firstQuestion === "n") {
  console.log("Correct answer. Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else if (firstQuestion === "yes" || "y") {
  console.log("Incorrect answer. 90s hip-hop/pop was the right answer.");
  alert("Incorrect answer. 90s hip-hop/pop was the right answer.");
} else {
  console.log("Invalid input.");
}

let secondQuestion = prompt("Does Cailum play the piano?");
let secondQuestionLower = secondQuestion.toLowerCase();

if (secondQuestion === "no" || secondQuestion === "n") {
  console.log("Incorrect answer. I do play the piano.");
  alert("Incorrect answer. I do play the piano.");
} else if (secondQuestion === "yes" || "y") {
  console.log("Correct answer! Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else {
  console.log("Invalid input.");
}

let thirdQuestion = prompt("Did Cailum go to University?");
let thirdQuestionLower = thirdQuestion.toLowerCase();

if (thirdQuestion === "no" || thirdQuestion === "n") {
  console.log("Incorrect answer. I went to LJMU.");
  alert("Incorrect answer. I went to LJMU.");
} else if (thirdQuestion === "yes" || "y") {
  console.log("Correct answer! Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else {
  console.log("Invalid input.");
}

let fourthQuestion = prompt("Is Cailum 22?");
let fourthQuestionLower = fourthQuestion.toLowerCase();

if (fourthQuestion === "no" || fourthQuestion === "n") {
  console.log("Correct answer! Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else if (fourthQuestion === "yes" || "y") {
  console.log("Incorrect answer. I'm 23.");
  alert("Incorrect answer. I'm 23.");
} else {
  console.log("Invalid input.");
}

let fifthQuestion = prompt("Does Cailum live in Liverpool?");
let fifthQuestionLower = fifthQuestion.toLowerCase();

if (fifthQuestion === "no" || fifthQuestion === "n") {
  console.log("Incorrect answer. I do live in Liverpool.");
  alert("Incorrect answer. I do live in Liverpool.");
} else if (fifthQuestion === "yes" || "y") {
  console.log("Correct answer! Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else {
  console.log("Invalid input.");
}

document.getElementById("knowledgeScore").innerHTML = knowledgeScore + " / 5";
