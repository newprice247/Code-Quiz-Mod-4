

var timer = document.getElementById(`timer`);

// var b1 = document.querySelector(`.b1`)
// var b2 = document.querySelector(`.b2`)
// var b3 = document.querySelector(`.b3`)
// var b4 = document.querySelector(`.b4`)

var answerResult = document.getElementById(`answer-result`)

var quizBox = document.getElementById(`quiz-box`);
console.log(quizBox)

// var header = document.querySelector('header');
// // console.log(header)
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
        answer: 1
    },
    {
        question: "Which function is used to print text to the console in JavaScript?",
        options: ["console.log()", "print()", "document.write()", "alert()"],
        answer: 0
    },
    {
        question: "What does the '+' operator do when used with strings in JavaScript?",
        options: ["Adds the strings together", "Performs mathematical addition", "Throws an error", "Converts strings to numbers"],
        answer: 0
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["variable x;", "var x;", "x = var;", "var = x;"],
        answer: 1
    }
];

// console.log()
// var correctAnswer;

var score = 0;

quizButtons.forEach(element => {
    element.setAttribute(`style`, `display: none;`)
})
b1.removeAttribute(`style`, `display: none;`)

var quizIndex =0

function test() {

    console.log(`quiz started`)
    quizQuestion.textContent = quiz[quizIndex].question;

    quizButtons.forEach(function(element, index) {
        element.removeAttribute(`style`, `display: none;`)
        element.textContent = quiz[quizIndex].options[index]
        element.addEventListener('click', function() {
            if (quiz[quizIndex].answer == index) {
                score += 25;
                console.log(`score`);
                answerResult.textContent = `Correct! Total Points: ${score}`;
                quizIndex++;
                if (quizIndex > 4) {
                    test()
                } else {
                    showResults()
                }
            } else {
                console.log(score)
                answerResult.textContent = `Wrong! Total Points: ${score}`
                quizIndex++;
                if (quizIndex > 4) {
                    test()
                } else {
                    showResults()
                }
            }
        })
    })
}

// test(quiz, 0)


b1.addEventListener(`click`, function() {
    test()
})
// var started = false;


// var quizIndex = 0;
// var checkAnswer = (event) => {
//     console.log('l;kj')
//     const choice = event.target.innerHTML;
//     if (started) {
//         var currentQuestion = quiz[quizIndex];
//         if (choice === correctAnswer) {
//             score += 25;
//         }
//         question.innerHTML = quiz[quizIndex].question
//         b1.innerHTML = quiz[quizIndex].options[0]
//         b2.innerHTML = quiz[quizIndex].options[1]
//         b3.innerHTML = quiz[quizIndex].options[2]
//         b4.innerHTML = quiz[quizIndex].options[3]
//         correctAnswer = quiz[quizIndex].answer
//         console.log(score)
//         quizIndex++
//         if (quizIndex >= 4) {
//             showresults();
//         }
//     } else {
//         b1.innerHTML = quiz[0].options[0]
//         b2.innerHTML = quiz[0].options[1]
//         b3.innerHTML = quiz[0].options[2]
//         b4.innerHTML = quiz[0].options[3]
//         correctAnswer = quiz[0].answer
//         started = true;
//     }
//     // const choice = event.target.className;
// }

// function updateTimer() {
//     timer.textContent = `Time left: ${secondsLeft}`
// }

// var secondsLeft = 10;
// function setTime() {
//     var stopTimerID = window.setInterval(function () {
//         secondsLeft--;
//         updateTimer();
//         console.log(`${secondsLeft}`)
//         if (secondsLeft <= 0) {
//             clearInterval(stopTimerID)
//             secondsLeft = 10;
//             timerFailState();


//         }
//     }, 1000)
//     return stopTimerID

// }

// function timerFailState() {
//     quizBox.innerHTML = `
//     <h1 id="question">Sorry your time has run out!</h1>
//     <button class="b1" id="">Please Click Here to Start Over</button>
//     `
//     b1.addEventListener(`click`, startQuiz)
// }

var showResults = () => {
    quizQuestion.textContent = `Your Final Score was ${score}`
    quizButtons.forEach(element => {
        element.setAttribute(`style`, `display: none;`)
    })
    b1.removeAttribute(`style`, `display: none;`)
    b1.textContent= `Click Here to Try Again.`
    b1.addEventListener(`click`, `function() {
        score = 0;
        quizIndex = 0;
        test();
    }`)
}


// b2.addEventListener(`click`, checkAnswer)
// b3.addEventListener(`click`, checkAnswer)
// b4.addEventListener(`click`, checkAnswer)

// console.log(currentQuestion)


