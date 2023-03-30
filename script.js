// Selectors
var questionContainer = document.getElementById("question-container");
var startContainer = document.getElementById("start-container");
var endContainer = document.getElementById("end-container");
var answerBtn = document.getElementById("answer-buttons")
var questionEl = document.getElementById("question")
var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("time")
var mixedQuestions, currentQuestion
var timeLeft = 10;
var timeInterval;




function startQuiz(){
    timer()
    questionContainer.classList.remove("hide");
    startContainer.classList.add("hide")
    mixedQuestions = questions.sort(() => Math.random() - .5)
        currentQuestion = 0
        nextQuestion()
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

function selectAnswer(e){

}

timeLeft = timeLeft-5

function nextQuestion(){
    displayQuestion(mixedQuestions[currentQuestion])
    console.log(questions.choices[0])
}

function displayQuestion(question){
    questionEl.innerText = question.question
    questions.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        
    })
}



function endGame(){
    clearInterval(timeInterval);
}

var questions = [
    {
        question : "String values must be enclosed within ___ when being assigned to variables",
        answers : [
            {text: "commas", correct: true },
            {text: "curly brackets", correct: false},
            {text:  "quotes", correct: false},
            {text: "parenthesis", correct: false},
        ]
    }
]




startBtn.addEventListener("click", startQuiz);
// function countdown() {
//    
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     
//       // As long as the `timeLeft` is greater than 1
//       if (timeLeft > 1) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.textContent = timeLeft + ' seconds remaining';
//         // Decrement `timeLeft` by 1
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//         timerEl.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//         timerEl.textContent = '';
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);
//         // Call the `displayMessage()` function
//         displayMessage();
//       }
//     }, 1000);
//   }
  