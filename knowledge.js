let knowledgeScore = 0;

let firstQuestion = prompt("Is Cailum's favourite music Rock music?");
let firstQuestionLower = firstQuestion.toLowerCase();

if (firstQuestion === "no" || firstQuestion === "n") {
  // console.log("Correct answer. Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else if (firstQuestion === "yes" || "y") {
  // console.log("Incorrect answer. 90s hip-hop/pop was the right answer.");
  alert("Incorrect answer. 90s hip-hop/pop was the right answer.");
} else {
  console.log("Invalid input.");
}

let secondQuestion = prompt("Does Cailum play the piano?");
let secondQuestionLower = secondQuestion.toLowerCase();

if (secondQuestion === "no" || secondQuestion === "n") {
  // console.log("Incorrect answer. I do play the piano.");
  alert("Incorrect answer. I do play the piano.");
} else if (secondQuestion === "yes" || "y") {
  // console.log("Correct answer! Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else {
  // console.log("Invalid input.");
}

let thirdQuestion = prompt("Did Cailum go to University?");
let thirdQuestionLower = thirdQuestion.toLowerCase();

if (thirdQuestion === "no" || thirdQuestion === "n") {
  // console.log("Incorrect answer. I went to LJMU.");
  alert("Incorrect answer. I went to LJMU.");
} else if (thirdQuestion === "yes" || "y") {
  // console.log("Correct answer! Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else {
  // console.log("Invalid input.");
}

let fourthQuestion = prompt("Is Cailum 22?");
let fourthQuestionLower = fourthQuestion.toLowerCase();

if (fourthQuestion === "no" || fourthQuestion === "n") {
  // console.log("Correct answer! Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else if (fourthQuestion === "yes" || "y") {
  // console.log("Incorrect answer. I'm 23.");
  alert("Incorrect answer. I'm 23.");
} else {
  // console.log("Invalid input.");
}

let fifthQuestion = prompt("Does Cailum live in Liverpool?");
let fifthQuestionLower = fifthQuestion.toLowerCase();

if (fifthQuestion === "no" || fifthQuestion === "n") {
  // console.log("Incorrect answer. I do live in Liverpool.");
  alert("Incorrect answer. I do live in Liverpool.");
} else if (fifthQuestion === "yes" || "y") {
  // console.log("Correct answer! Well done champ.");
  alert("Correct answer! Well done champ.");
  knowledgeScore++;
} else {
  // console.log("Invalid input.");
}

let maxGuesses = 4;
let remainingGuesses = maxGuesses;

for (i = 0; i < maxGuesses; i++) {
  let sixthQuestion = prompt(
    "Random Trivia: How many countries are there in Europe? " +
      remainingGuesses +
      " guesses left.)"
  );
  let sixthQuestionNumber = parseInt(sixthQuestion);

  if (isNaN(sixthQuestionNumber)) {
    alert("Invalid input. Please use numbers!");
    remainingGuesses--;
  } else if (sixthQuestionNumber < 44) {
    alert("Incorrect answer! Too low, go higher!");
    remainingGuesses--;
  } else if (sixthQuestionNumber > 44) {
    alert("Incorrect answer! Too high, go lower!");
    remainingGuesses--;
  } else {
    alert("Correct answer! How did you guess that?!");
    knowledgeScore++;
    break;
  }
}

if (remainingGuesses === 0) {
  alert(
    "You have run out of guesses. The answer was 44! Moving on to the next question."
  );
}

let maxGuesses2 = 6;
let remainingGuesses2 = maxGuesses2;

for (i = 0; i < maxGuesses2; i++) {
  let seventhQuestion = prompt(
    "What is one of the colours in a rainbow? " +
      remainingGuesses2 +
      " guesses left."
  );

  if (
    !(
      seventhQuestion === "red" ||
      seventhQuestion === "orange" ||
      seventhQuestion === "yellow" ||
      seventhQuestion === "green" ||
      seventhQuestion === "blue" ||
      seventhQuestion === "indigo" ||
      seventhQuestion === "violet"
    )
  ) {
    alert("Incorrect answer. Try again.");
    remainingGuesses2--;
  } else {
    alert(
      "Correct answer! " + seventhQuestion + " is one of my favourite colours."
    );
    knowledgeScore++;
    break;
  }
}

document.getElementById("knowledgeScore").innerHTML = knowledgeScore + "/7";
