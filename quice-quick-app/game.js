// Get Element with DOM --> Create an array of questions
const question  = document.getElementById('question')
const progressTxt = document.getElementById('progressTxt')

// score, progresssBarFull, game, choice-text
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById('progressBarFull')
const game = document.getElementById('game')
const choices = Array.from(document.getElementsByClassName('choice-text'))


let  currenrQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];


let questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "choice4": "<scripting>",
        "answer": 1
      },
      {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choice1": "<script href='xxx.js'>",
        "choice2": "<script name='xxx.js'>",
        "choice3": "<script src='xxx.js'>",
        "choice4": "<script file='xxx.js'>",
        "answer": 3
      },
      {
        "question": " How do you write 'Hello World' in an alert box?",
        "choice1": "msgBox('Hello World');",
        "choice2": "alertBox('Hello World');",
        "choice3": "msg('Hello World');",
        "choice4": "alert('Hello World');",
        "answer": 4
      }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

// Start Quiz

 const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
    getNweQuestion()
};



const getNweQuestion = () => {
    questionCounter++;
    progressTxt.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${questionCounter / MAX_QUESTIONS * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestion.length)
    currenrQuestion = availableQuestion[questionIndex]
    question.innerText = currenrQuestion.question
    // console.log(currenrQuestion)


    choices.forEach((choice) => {
        const number = choice.dataset["number"]
        choice.innerText = currenrQuestion["choice" + number]
    })

}

startGame();