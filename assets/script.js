
// These are the variable representing the element objects in the html file
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
var submitHS = document.getElementById(`submitHS`);
var resultsQ = document.getElementById(`resultsQ`)
var form = document.getElementById(`form`);
var initials = document.getElementById(`initials`);
var submitHS = document.getElementById(`submitHS`);
var leaderboard = document.getElementById(`leaderboard`);

// These set the default values (to global scope) for the quiz index number(used in the checkeAnswer function to loop through the questions), total score(that will change depending on the number of correct answers the user gets), and the started variable, which states whether or not the quiz has been started.
var quizIndex = 0;
var totalScore = 0;
started = false;
var correctAnswer;

// Takes the user to the high score page
scoreLink.addEventListener(`click`, function () {
    userHighScores();
})

//The array that contains all of the questions and answers that make up the quiz, as well as the correct answers
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

//The function that loops through the quiz, activated by the event listener above.
var checkAnswer = (event) => {
    //Changes the user interface based on which part of the app the user is viewing
    uiSwitch(checkAnswer);
    // Listens for the four quiz buttons to be clicked, each one triggering the checkAnswer function, looping through all the questions
    quizButtons.forEach(element => {element.addEventListener(`click`, checkAnswer)});
    // Sets the user's choice as the specific answer button they choose
    const choice = event.target.innerHTML;
    // Determines whether the triggered button contained the correctAnswer, then displays the current totalScore, a correct or wrong message, and if correct will increase the totalScore
    if (started) {
        if (choice === correctAnswer) {
            totalScore += 25;
            answerResult.style.borderTop = `solid`, `black`;
            answerResult.innerHTML = `Correct!<br> Total Score = ${totalScore}/100`
        } else {
            secondsLeft -= 15;
            answerResult.style.borderTop = `solid`, `black`;
            answerResult.innerHTML = `Wrong!<br> The correct answer was: <br>${quiz[quizIndex].answer} <br>Total Score = ${totalScore}/100`
        }
        // The quizIndex increases every loop, cycling through the contents of the quiz array. When the user reaches the end of the questions and answers set in the array, the showResults function is triggered, ending the quiz and showing the results page.
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
        //The initial click of the startNext button will show the first question and set of answers in the quiz array. Then it sets the started variable to true, which will, upon a click of one of the answer buttons, begin the quiz loop.
    } else {
        //sets score back to zero on every iteration of the quiz
        totalScore = 0;
        quizQuestion.innerHTML = quiz[0].question
        b1.innerHTML = quiz[0].options[0]
        b2.innerHTML = quiz[0].options[1]
        b3.innerHTML = quiz[0].options[2]
        b4.innerHTML = quiz[0].options[3]
        correctAnswer = quiz[0].answer
        started = true;
        // Begins the timer at the start of every quiz iteration
        setTime();

    }
}

//The event listener that triggers the checkAnswer function. It is called at the start of the quiz, and at the end if the user wants to start the quiz over
startNext.addEventListener(`click`, checkAnswer)


// This function creates a timer that counts down from 60 seconds
var stopTimerID;
// This array contains every iteration of the timer once it has begun
var stopTimerID_array = [];
var secondsLeft = 61;
function setTime() {
    stopTimerID = window.setInterval(function () {
        secondsLeft--;
        updateTimer();
        if (secondsLeft <= 0) {
            secondsLeft = 61;
            // If the timer reaches zero, calls the timerFailState function, showing the user a fail screen and a try again button
            timerFailState();
        }
    }, 1000)
    // Every time a new timer is started, its ID will be stored in an array
    stopTimerID_array.push(stopTimerID);
}

// Shows the user a message on screen of their remaining time
function updateTimer() {
    timer.textContent = `${secondsLeft} seconds left!`
}

// Loops through the the timer IDs stored in the stopTimerID_array, and when called, will stop them from counting down
function callClearInterval() {
    for (var i = 0; i < stopTimerID_array.length; i++) {
        clearInterval(stopTimerID_array[i])
    };
}

// Game Over screen
function timerFailState() {
    reset();
    uiSwitch(timerFailState)
    quizQuestion.textContent = `Sorry your time has run out!`
    quizQuestion.style.color = `red`
    startNext.textContent = `Click Here to Try Again.`
}

//Results page
var showResults = () => {
    reset();
    quizQuestion.textContent = `Your Final Score was ${totalScore}/100`
    startNext.textContent = `Click Here to Try Again`
}

// High Score page
var userHighScores = () => {
    reset();
    uiSwitch(userHighScores);
}

// A reset function that can be called to reset certain UI properties as well as the time for the timer, the index number for the quiz, and whether or not the quiz has started yet
function reset() {
    callClearInterval();
    uiSwitch(reset);
    secondsLeft = 61;
    started = false;
    quizIndex = 0;
}

// Takes the user's totalScore and the letters entered into the form field on the results page, then saves them as an object into local storage
function saveHighScore() {
    var userScoreObject = {
        user: initials.value.trim(),
        score: totalScore
    }
    localStorage.setItem(`userScoreObject`, JSON.stringify(userScoreObject))
}

// Pulls the user's info from local storage and displays it on screen
function renderHighScore() {
    var highScore = JSON.parse(localStorage.getItem(`userScoreObject`));
    if (highScore !== null) {
        document.getElementById('savedHS').innerHTML += `Name: ${highScore.user} | Score: ${highScore.score}<br>`
    }
}

// Event listener for the form's submit button which triggers the two functions above, as well as the function for displaying the leaderboard
submitHS.addEventListener(`click`, function (e) {
    e.preventDefault();
    saveHighScore();
    renderHighScore();
    userHighScores();
});

//Stores style attributes that can be called upon to dynamically change the appearance of the page
function uiSwitch(ui) {
    if (ui === userHighScores) {
        leaderboard.removeAttribute(`style`, `display: none;`)
        results.removeAttribute(`style`, `display: none;`);
        quizBox.setAttribute(`style`, `display: none;`)
        scoreLink.setAttribute(`style`, `display: none;`)
        submitHS.setAttribute(`style`, `display: none;`)
        resultsQ.textContent = `Code Quiz Leaderboard`
        form.setAttribute(`style`, `display: none;`)
    } else if (ui === reset) {
        answerResult.textContent = '';
        timer.style.display = `none`;
        startNext.removeAttribute(`style`, `display: none;`)
        answerResult.style.borderTop = `none`;
        results.removeAttribute(`style`, `display: none;`);
        quizButtons.forEach(element => {
            element.setAttribute(`style`, `display: none;`)
        })
        leaderboard.setAttribute(`style`, `display: none;`)
    } else if (ui === timerFailState) {
        results.setAttribute(`style`, `display: none;`)
    } else if (ui === checkAnswer) {
        timer.style.display = `block`;
        startNext.setAttribute(`style`, `display: none;`)
        quizButtons.forEach(element => {
            element.removeAttribute(`style`, `display: none;`)
        })
        results.setAttribute(`style`, `display: none;`);
        resultsQ.textContent = `Would you like to record your High Score?`
        submitHS.removeAttribute(`style`, `display: none;`)
        form.removeAttribute(`style`, `display: none;`)
        quizBox.removeAttribute(`style`, `display: none;`)
        scoreLink.removeAttribute(`style`, `display: none;`)
    }
}

// Upon the initial loading of the page clears the local storage memory and hides UI elements
function init() {
    localStorage.clear();
    quizButtons.forEach(element => {
        element.setAttribute(`style`, `display: none;`)
    })
    results.setAttribute(`style`, `display: none;`);
}
init();



