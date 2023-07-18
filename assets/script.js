var question = document.getElementById(`question`)
// console.log(question)

// var quizButtons = document.querySelectorAll(`.quiz-buttons`);
// // console.log(quizButtons)

var b1 = document.querySelector(`.b1`)
var b2 = document.querySelector(`.b2`)
var b3 = document.querySelector(`.b3`)
var b4 = document.querySelector(`.b4`)

// var answerResult = document.getElementById(`answer-result`)

// var quizBox = document.getElementById(`quiz-box`);
// console.log(quizBox)

// var header = document.querySelector('header');
// // console.log(header)

// var scoreLink = document.getElementById("score-link");
// console.log(scoreLink)

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

console.log(quiz[1].options[0])
var correctAnswer;

var started = true;

var score = 0;

var startQuiz = () => {
    
}

var checkAnswer = (event) => {
    console.log('l;kj')
    if (started) {
        const choice = event.target.innerHTML;
        var quizIndex = 0;
        // var currentQuestion = quiz[quizIndex];
        if(choice === correctAnswer) {
            score += 25;
        }
        quizIndex++
        question.innerHTML = quiz[quizIndex].question
        b1.innerHTML = quiz[quizIndex].options[0]
        b2.innerHTML = quiz[quizIndex].options[1]
        b3.innerHTML = quiz[quizIndex].options[2]
        b4.innerHTML = quiz[quizIndex].options[3]
        correctAnswer = quiz[quizIndex].answer
        console.log(score)
    } else {
        b1.innerHTML = quiz[0].options[0]
        b2.innerHTML = quiz[0].options[1]
        b3.innerHTML = quiz[0].options[2]
        b4.innerHTML = quiz[0].options[3]
        correctAnswer = quiz[0].answer
        started = false;
    }
    // const choice = event.target.className;
}

b1.addEventListener(`click`, checkAnswer)
b2.addEventListener(`click`, checkAnswer)
b3.addEventListener(`click`, checkAnswer)
b4.addEventListener(`click`, checkAnswer)

// console.log(currentQuestion)

startQuiz();

