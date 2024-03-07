// Get Element with DOM --> Create an array of questions
const question = document.getElementById("question");
const progressTxt = document.getElementById("progressTxt");

// score, progresssBarFull, game, choice-text
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const game = document.getElementById("game");
const loader = document.getElementById("loader");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currenrQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [];

fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
).then((res) => {
  return res.json();
}).then((lodingQuestions) => {
  questions = lodingQuestions.results.map((loadingQuestion) => {
    const formattedQuestion = {
      question: loadingQuestion.question,
    };

    const answerChoices = [...loadingQuestion.incorrect_answers];
    formattedQuestion.answer = Math.floor(Math.random() * answerChoices.length) + 1;
    answerChoices.splice(
      formattedQuestion.question - 1,
       0,
       loadingQuestion.correct_answer
    );

   answerChoices.forEach((choice, i) => {
    formattedQuestion["choice" + (i + 1)] = choice;
   });

   return formattedQuestion;

  });

  startGame();
})
.catch((err) => {
  console.log(err);
});


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 7;

// Start Quiz

const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestion = [...questions];
  console.log(availableQuestion);

  game.classList.remove("hidden")
  loader.classList.add("hidden")
  getNewQuestion()

};

const getNewQuestion = () => {
  if(availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./end.html")
  }
  questionCounter++;
  progressTxt.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currenrQuestion = availableQuestion[questionIndex];
  question.innerText = currenrQuestion.question;
  console.log(currenrQuestion);

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currenrQuestion["choice" + number];
  });

  availableQuestion.splice(questionIndex, 1);
  acceptingAnswer = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    e.preventDefault();

    if (!acceptingAnswer) return;
    acceptingAnswer = false;

    const selecetedChoice = e.target;
    const selecetedAnswer = selecetedChoice.dataset["number"];

    const classToApply =
      selecetedAnswer == currenrQuestion.answer ? "correct" : "inCorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selecetedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selecetedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

const incrementScore = (num) => {
  score +=num;
  scoreText.innerText = score
};


// startGame();
