

var timer = document.getElementById(`timer`);

var b1 = document.querySelector(`#b1`)
var b2 = document.querySelector(`#b2`)
var b3 = document.querySelector(`#b3`)
var b4 = document.querySelector(`#b4`)

var answerResult = document.getElementById(`answer-result`)

var quizBox = document.getElementById(`quiz-box`);
console.log(quizBox)

var quizQuestion = document.getElementById(`quiz-question`)
console.log(quizQuestion)
// var scoreLink = document.getElementById("score-link");
// console.log(scoreLink)
var quizButtons = document.querySelectorAll(`.quiz-buttons`);
console.log(quizButtons)

const quiz = [
    {
        question: "What is the output of the following code? console.log(10 % 3);",
        options: ["10", "1", "3", "0"],
        answer: "1"
    },
    {
        question: "Which function is used to print text to the console in JavaScript?",
        options: ["console.log()", "print()", "document.write()", "alert()"],
        answer: "console.log()"
    },
    {
        question: "What does the '+' operator do when used with strings in JavaScript?",
        options: ["Adds the strings together", "Performs mathematical addition", "Throws an error", "Converts strings to numbers"],
        answer: "Adds the strings together"
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["variable x;", "var x;", "x = var;", "var = x;"],
        answer: "var x;"
    }
];

quizButtons.forEach(element => {
    element.setAttribute(`style`, `display: none;`)
})
b1.removeAttribute(`style`, `display: none;`)

quizQuestion.textContent = `Welcome to the Code Quiz!`;
b1.textContent = `Please Click Here to Continue`;

var correctAnswer;
var quizIndex = 0;
started = false;
var quizIndex = 0;
var score = 0;

var checkAnswer = (event) => {
    console.log(`event fired + ${quizIndex}`)
    quizQuestion.style.color = `black`;
    quizButtons.forEach(element => {
        element.removeAttribute(`style`, `display: none;`)
    })
    const choice = event.target.innerHTML;

    if (started) {

        if (choice === correctAnswer) {
            score += 25;
        }

        quizIndex++
        console.log(quizIndex)

        if (quizIndex > quiz.length - 1) {
            showResults();
        } else {
            // setTime();
            console.log(secondsLeft)
            quizQuestion.innerHTML = quiz[quizIndex].question
            b1.innerHTML = quiz[quizIndex].options[0]
            b2.innerHTML = quiz[quizIndex].options[1]
            b3.innerHTML = quiz[quizIndex].options[2]
            b4.innerHTML = quiz[quizIndex].options[3]
            correctAnswer = quiz[quizIndex].answer
            console.log(score)
            console.log(quizIndex)
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

function updateTimer() {
    timer.textContent = `Seconds left to complete quiz: ${secondsLeft}`
}

var stopTimerID;
var stopTimerID_array = [];
var secondsLeft = 11;
function setTime() {
        stopTimerID = window.setInterval(function () {
        secondsLeft--;
        updateTimer();
        // console.log(`${secondsLeft}`)
        if (secondsLeft <= 0) {
            secondsLeft = 11;
            timerFailState();
        }
    }, 1000)
    stopTimerID_array.push(stopTimerID);
    // console.log(`stop timer id = ${stopTimerID}`)
    return stopTimerID
}

function callClearInterval() {
    for(var i = 0; i < stopTimerID_array.length; i++) {
        clearInterval(stopTimerID_array[i])
    };
}

function reset() {
    callClearInterval();
    started = false;
    quizIndex = 0;
    timer.style.display = `none`;
    quizButtons.forEach(element => {
        element.setAttribute(`style`, `display: none;`)
    })
    b1.removeAttribute(`style`, `display: none;`)
}

function timerFailState() {
    reset();
    score = 0;
    quizQuestion.textContent = `Sorry your time has run out!`
    quizQuestion.style.color = `red`
    b1.textContent = `Click Here to Try Again.`
}

var showResults = () => {
    reset();
    quizQuestion.textContent = `Your Final Score was ${score}`
    b1.textContent = `Click Here to Try Again.`
    score = 0;
}

b1.addEventListener(`click`, checkAnswer)
b2.addEventListener(`click`, checkAnswer)
b3.addEventListener(`click`, checkAnswer)
b4.addEventListener(`click`, checkAnswer)

// console.log(currentQuestion)


