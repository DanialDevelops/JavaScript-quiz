// Selectors
var questionContainer = document.getElementById("question-container");
var startContainer = document.getElementById("start-container");
var endContainer = document.getElementById("end-container");
var answerBtn = document.getElementById("answer-buttons")
var questionEl = document.getElementById("question")
var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("time")
var initialsForm = document.getElementById("initals-form")
var initialsInput = document.getElementById("initials-input")
var submitBtn = document.getElementById("submit-btn")
var mixedQuestions, currentQuestion
var timeLeft = 60;
var timeInterval;




function startQuiz(){
    score = 0;
    timer()
    questionContainer.classList.remove("hide");
    startContainer.classList.add("hide")
    mixedQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()
}

function selectAnswer(e){
    var selectedBtn = e.target
    var correct = selectedBtn.dataset.correct
    if(correct){
        score +=10;
    }else {
        timeLeft -=10;
        if(timeLeft < 0){
            timeLeft = 0;
        }
    }
    nextQuestion()
}

function nextQuestion(){
    currentQuestion++
    if (currentQuestion < mixedQuestions.length){
    displayQuestion(mixedQuestions[currentQuestion])
    } else {
        endGame()
    }
    
}

function displayQuestion(question){
    questionEl.innerText = question.question
    answerBtn.innerHTML = "";
    question.answers.forEach((answer) => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtn.appendChild(button)
    })
}



function timer(){
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000)
}



function endGame(){
    clearInterval(timeInterval);
    questionContainer.classList.add("hide")
    endContainer.classList.remove("hide")
    var scoreEl = document.getElementById("score")
    if (scoreEl) {
    scoreEl.textContent = score;
    }
}
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var initials = initialsInput.value.trim()
    if(initials !== ""){
        var highScores = JSON.parse(localStorage.getItem("highScores")) || []
        var newScore = {initials: initials, score: score }
        highScores.push(newScore)
        localStorage.setItem("highScores" , JSON.stringify(highScores))
        window.location.href = "highscores.html"
    }
})


startBtn.addEventListener("click", startQuiz);

var questions = [
    {
        question : "String values must be enclosed within ___ when being assigned to variables",
        answers : [
            {text: "commas", correct: true },
            {text: "curly brackets", correct: false},
            {text:  "quotes", correct: false},
            {text: "parenthesis", correct: false},
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store",
        answers: [
          { text: "numbers and strings", correct: false },
          { text: "other arrays", correct: false },
          { text: "booleans", correct: false },
          { text: "all of the above", correct: true },
        ]
      },
      {
        question: "Commonly used data types DO NOT include:",
        answers: [
          { text: "strings", correct: false },
          { text: "booleans", correct: false },
          { text: "alerts", correct: true },
          { text: "numbers", correct: false },
        ]
      },
      {
        question: "The condition in an if/else statement is enclosed with",
        answers: [
          { text: "quotes", correct: false },
          { text: "curly brackets", correct: false },
          { text: "parenthesis", correct: true },
          { text: "square brackets", correct: false },
        ]
      },
]
  