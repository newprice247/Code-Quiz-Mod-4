var question = document.querySelector(`h1`)
console.log(question)

var quizButtons = document.querySelectorAll(`.quiz-buttons`);
console.log(quizButtons)

var button1 = document.getElementById(`b1`)
var button2 = document.getElementById(`b2`)
var button3 = document.getElementById(`b3`)
var button4 = document.getElementById(`b4`)

var quizBox = document.getElementById(`quiz-box`);
console.log(quizBox)

var header = document.querySelector('header');
console.log(header)

var scoreLink = document.getElementById("score-link");
console.log(scoreLink)

var points = 0;

function startQuiz() {
    question.textContent = `This quiz will test your knowledge of basic JavaScript. Please click the button below when you are ready to begin.`
    quizButtons.forEach(button => {
        button.setAttribute(`style`, `display: none;`)
      });
    button1.textContent = `Click here to start!`
    button1.addEventListener("click", function() {
        question1();
        quizButtons.forEach(button => {
            button.removeAttribute(`style`, `display: none;`)
          });
    })
}

var question1 = () => {
    question.textContent = `What is the name of JavaScript?`
        button1.textContent = `JavaScript`;
        button1.addEventListener("click", function() {
            question2();
        })
}

var question2 = () => {
    question.textContent = `What is the name of HTML?`
        button1.textContent = `JavaScript`;
        button1.addEventListener("click", function() {
            question2();
        })
}

var question3 = () => {
    question.textContent = `What is the name of CSS?`
        button1.textContent = `JavaScript`;
        button1.addEventListener("click", function() {
            question2();
        })
}

var question4 = () => {
    question.textContent = `What is the name of this program?`
        button1.textContent = `JavaScript`;
        button1.addEventListener("click", function() {
            question2();
        })
}

startQuiz();

