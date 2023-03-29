// Selectors
var questionContainer = document.getElementById("question-container");
var startContainer = document.getElementById("start-container");
var endContainer = document.getElementById("end-container");
var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("time")
var mixedQuestions, currentQuestion
var timeLeft = 10;
var timeInterval;



function startQuiz(){
    questionContainer.classList.remove("hide");
    startContainer.classList.add("hide")
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
        mixedQuestions = questions.sort(() => Math.random() - .5)
        currentQuestion = 0
        nextQuestion()
    }, 1000)


}

function selectAnswer(){

}

function nextQuestion(){
    displayQuestion(mixedQuestions[currentQuestion])
}

function displayQuestion(){

}



function endGame(){
    clearInterval(timeInterval);
}


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
  