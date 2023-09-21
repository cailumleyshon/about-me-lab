let questions = [
  {
    question: "Is Cailum's favourite music Rock music?",
    correctAnswer: "no",
    correctResponse: "Correct answer! Well done champ.",
    incorrectResponse:
      "Incorrect answer. 90s hip-hop/pop was the right answer.",
  },
  {
    question: "Does Cailum play the piano?",
    correctAnswer: "yes",
    correctResponse: "Correct answer! Well done champ.",
    incorrectResponse: "Incorrect answer. I do play the piano.",
  },
  {
    question: "Did Cailum go to University?",
    correctAnswer: "yes",
    correctResponse: "Correct answer! Well done champ.",
    incorrectResponse: "Incorrect answer. I went to LJMU.",
  },
  {
    question: "Is Cailum 22?",
    correctAnswer: "no",
    correctResponse: "Correct answer! Well done champ.",
    incorrectResponse: "Incorrect answer. I'm 23.",
  },
  {
    question: "Does Cailum live in Liverpool?",
    correctAnswer: "yes",
    correctResponse: "Correct answer! Well done champ.",
    incorrectResponse: "Incorrect answer. I do live in Liverpool.",
  },
];

let knowledgeScore = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i].question).toLowerCase();

  if (userAnswer === questions[i].correctAnswer || userAnswer === "y") {
    alert(questions[i].correctResponse);
    knowledgeScore++;
  } else if (userAnswer !== questions[i].correctAnswer || userAnswer === "n") {
    alert(questions[i].incorrectResponse);
  } else {
    alert("Invalid input.");
  }
}

let maxGuesses = 4;
let remainingGuesses = maxGuesses;
const minNumber = 1;
const maxNumber = 20;
const correctNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

for (let i = 0; i < maxGuesses; i++) {
  let userGuess = prompt(
    "Guess the random number between " +
      minNumber +
      " and " +
      maxNumber +
      ". " +
      remainingGuesses +
      " guesses left."
  );
  let userGuessNumber = parseInt(userGuess);

  if (
    isNaN(userGuessNumber) ||
    userGuessNumber < minNumber ||
    userGuessNumber > maxNumber
  ) {
    alert("Invalid input. Please enter a number between 1 and 20.");
    remainingGuesses--;
  } else if (userGuessNumber < correctNumber) {
    alert("Incorrect answer! Too low, go higher!");
    remainingGuesses--;
  } else if (userGuessNumber > correctNumber) {
    alert("Incorrect answer! Too high, go lower!");
    remainingGuesses--;
  } else {
    alert("Correct answer! The random number was " + correctNumber + "!");
    knowledgeScore++;
    break;
  }
}

if (remainingGuesses === 0) {
  alert(
    "You have run out of guesses. The correct answer was " +
      correctNumber +
      ". Moving on to the next question."
  );
}

let maxGuesses2 = 6;
let remainingGuesses2 = maxGuesses2;

for (let i = 0; i < maxGuesses2; i++) {
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
