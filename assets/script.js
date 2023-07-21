
var timer = document.getElementById(`timer`);
var startNext = document.getElementById(`startNext`);
var b1 = document.querySelector(`#b1`);
var b2 = document.querySelector(`#b2`);
var b3 = document.querySelector(`#b3`);
var b4 = document.querySelector(`#b4`);
var answerResult = document.getElementById(`answer-result`);
var quizBox = document.getElementById(`quiz-box`);
var results = document.querySelector(`.results`);
var scorePage = document.getElementById(`scorePage`);
var quizQuestion = document.getElementById(`quiz-question`);
var scoreLink = document.getElementById("score-link");
var quizButtons = document.querySelectorAll(`.quizButtons`);
var backToQuiz = document.getElementById(`backToQuiz`);
var resultsQ = document.getElementById(`resultsQ`)
var form = document.getElementById(`form`);
var correctAnswer;
var quizIndex = 0;
var score = 0;
started = false;
quizButtons.forEach(element => {
    element.setAttribute(`style`, `display: none;`)
})

results.setAttribute(`style`, `display: none;`);

scoreLink.addEventListener(`click`, function () {
    userHighScores();
})
const quiz = [
    {
        question: "What is the output of the following code? console.log(10 % 3);",
        options: ["A: 10", "B: 1", "C: 3", "D: 0"],
        answer: "B: 1"
    },
    {
        question: "Which function is used to print text to the console in JavaScript?",
        options: ["A: console.log()", "B: print()", "C: document.write()", "D: alert()"],
        answer: "A: console.log()"
    },
    {
        question: "What does the '+' operator do when used with strings in JavaScript?",
        options: ["A: Adds the strings together", "B: Performs mathematical addition", "C: Throws an error", "D: Converts strings to numbers"],
        answer: "A: Adds the strings together"
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["A: variable x;", "B: var x;", "C: x = var;", "D: var = x;"],
        answer: "B: var x;"
    }
];

var checkAnswer = (event) => {
    quizButtons.forEach(element => { element.addEventListener(`click`, checkAnswer) })
    timer.style.display = `block`;
    quizQuestion.style.color = `black`;
    startNext.setAttribute(`style`, `display: none;`)
    quizButtons.forEach(element => {
    element.removeAttribute(`style`, `display: none;`)
    results.setAttribute(`style`, `display: none;`);
    resultsQ.textContent = `Would you like to record your High Score?`
    form.removeAttribute(`style`, `display: none;`)
    })
    quizBox.removeAttribute(`style`, `display: none;`)
    scoreLink.removeAttribute(`style`, `display: none;`)
    const choice = event.target.innerHTML;
    if (started) {
        if (choice === correctAnswer) {
            score += 25;
            answerResult.style.borderTop = `solid`, `black`;
            answerResult.textContent = `Correct! Total Score = ${score}/100`
        } else {
            answerResult.innerHTML = `Wrong! The correct answer was: <br>${quiz[quizIndex].answer} <br>Total Score = ${score}/100`
        }
        quizIndex++
        if (quizIndex > quiz.length - 1) {
            showResults();
        } else {
            quizQuestion.innerHTML = quiz[quizIndex].question
            b1.innerHTML = quiz[quizIndex].options[0]
            b2.innerHTML = quiz[quizIndex].options[1]
            b3.innerHTML = quiz[quizIndex].options[2]
            b4.innerHTML = quiz[quizIndex].options[3]
            correctAnswer = quiz[quizIndex].answer
        }
    } else {
        console.log(`false = ${secondsLeft}`)
        quizQuestion.innerHTML = quiz[0].question
        b1.innerHTML = quiz[0].options[0]
        b2.innerHTML = quiz[0].options[1]
        b3.innerHTML = quiz[0].options[2]
        b4.innerHTML = quiz[0].options[3]
        correctAnswer = quiz[0].answer
        started = true;
        setTime();

    }
}

var stopTimerID;
var stopTimerID_array = [];
var secondsLeft = 11;
function setTime() {
    stopTimerID = window.setInterval(function () {
        secondsLeft--;
        updateTimer();
        console.log(`array: ${stopTimerID_array} seconds:${secondsLeft}`)
        if (secondsLeft <= 0) {
            secondsLeft = 11;
            timerFailState();
        }
    }, 1000)
    stopTimerID_array.push(stopTimerID);
    console.log(stopTimerID_array)
}

function updateTimer() {
    timer.textContent = `Seconds left to complete quiz: ${secondsLeft}`
}

function callClearInterval() {
    for (var i = 0; i < stopTimerID_array.length; i++) {
        console.log(`stopping: ${stopTimerID_array[i]}`)
        clearInterval(stopTimerID_array[i])
    };
}

function timerFailState() {
    reset();
    score = 0;
    quizQuestion.textContent = `Sorry your time has run out!`
    quizQuestion.style.color = `red`
    startNext.textContent = `Click Here to Try Again.`
}

var initials = document.getElementById("initials");

// var highScore = {
//     initials: initials.value.trim()
//   };

var showResults = () => {
    reset();
    quizQuestion.textContent = `Your Final Score was ${score}/100`
    startNext.textContent = `Click Here to Try Again`
    score = 0;
}

var userHighScores = () => {
    results.removeAttribute(`style`, `display: none;`);
    quizBox.setAttribute(`style`, `display: none;`)
    scoreLink.setAttribute(`style`, `display: none;`)
    backToQuiz.textContent = ``;
    resultsQ.textContent = `User High Scores:`
    form.setAttribute(`style`, `display: none;`)

}

function reset() {
    callClearInterval();
    secondsLeft = 11;
    started = false;
    quizIndex = 0;
    answerResult.textContent = '';
    timer.style.display = `none`;
    startNext.removeAttribute(`style`, `display: none;`)
    quizButtons.forEach(element => {
        element.setAttribute(`style`, `display: none;`)
    })
    answerResult.style.borderTop = `none`;
    results.removeAttribute(`style`, `display: none;`);
}

startNext.addEventListener(`click`, checkAnswer)



