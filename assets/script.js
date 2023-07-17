var question = document.querySelector(`h1`)
console.log(question)

var quizButtons = document.querySelectorAll(`.quiz-buttons`);
console.log(quizButtons)

var b1 = document.getElementById(`b1`)
var b2 = document.getElementById(`b2`)
var b3 = document.getElementById(`b3`)
var b4 = document.getElementById(`b4`)

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
    b1.textContent = `Click here to start!`
    b1.addEventListener("click", function() {
        question1();
        quizButtons.forEach(button => {
            button.removeAttribute(`style`, `display: none;`)
          });
    })
}

var question1 = () => {
    question.textContent = `What is the name of JavaScript?`
    b1.textContent = `JavaScript`;
    b1.addEventListener("click", function() {
        points += 25;
        question2();
    })
    b2.textContent = `HTML`;
    b2.addEventListener("click", function() {
    })
    b3.textContent = `CSS`;
    b3.addEventListener("click", function() {
    })
    b4.textContent = `VsCode`;
    b4.addEventListener("click", function() {
    })

}

var question2 = () => {
    question.textContent = `What is the name of HTML?`
        b1.textContent = `CSS`;
        b1.addEventListener("click", function() {
        })
        b2.textContent = `JavaScript`;
        b2.addEventListener("click", function() {
        })
        b3.textContent = `VSCode`;
        b3.addEventListener("click", function() {
        })
        b4.textContent = `HTML`;
        b4.addEventListener("click", function() {
            points += 25;
            question3();
        })
}

var question3 = () => {
    question.textContent = `What is the name of CSS?`
        b1.textContent = `VSCode`;
        b1.addEventListener("click", function() {
        })
        b2.textContent = `JavaScript`;
        b2.addEventListener("click", function() {
        })
        b3.textContent = `HTML`;
        b3.addEventListener("click", function() {
        })
        b4.textContent = `CSS`;
        b4.addEventListener("click", function() {
            points += 25;
            question4();
        })
}

var question4 = () => {
    question.textContent = `What is the name of this program?`
        b1.textContent = `HTML`;
        b1.addEventListener("click", function() {
        })
        b2.textContent = `CSS`;
        b2.addEventListener("click", function() {
        })
        b3.textContent = `JavaScript`;
        b3.addEventListener("click", function() {
        })
        b4.textContent = `VsCode`;
        b4.addEventListener("click", function() {
            points += 25;
            finalScore();
        })
}

var finalScore = () => {
    question.textContent
}

startQuiz();

