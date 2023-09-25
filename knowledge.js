let questions = [
  {
    question: "Is Cailum's favourite music Rock music?",
    answer: "no",
    answer: "n",
  },
  {
    question: "Does Cailum play the piano?",
    answer: "yes",
    answer: "y",
  },
  {
    question: "Did Cailum go to University?",
    answer: "yes",
    answer: "y",
  },
  {
    question: "Is Cailum 22?",
    answer: "no",
    answer: "n",
  },
  {
    question: "Does Cailum live in Liverpool?",
    answer: "yes",
    answer: "y",
  },
];

let knowledgeScore = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i].question).toLowerCase();

  if (i < 5) {
    if (userAnswer === questions[i].answer) {
      alert("Correct! Well done champ.");
      knowledgeScore++;
    } else {
      alert("Incorrect! Unlucky...");
    }
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
