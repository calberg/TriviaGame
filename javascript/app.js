(function() {
    function buildQuiz() {
      var output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {
        var answers = [];
          for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      var answerContainers = quizContainer.querySelectorAll(".answers");
      var numCorrect = 0;
      myQuestions.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
          if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          answerContainers[questionNumber].style.color = "red";
        }
      });
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var myQuestions = [
      {
        question: "Who is the strongest Avenger?",
        answers: {
          a: "The Hulk",
          b: "Ant Man",
          c: "Captain America",
          d: "Iron Man"
        },
        correctAnswer: "a"
      },
      {
        question: "Who is the fastest Avenger?",
        answers: {
          a: "Quiksilver",
          b: "Black Widow",
          c: "The Wasp",
          d: "Black Panther"
        },
        correctAnswer: "a"
      },
      {
        question: "Where did the aliens first invade earth?",
        answers: {
          a: "Rio De Janiero",
          b: "Wakanda",
          c: "London",
          d: "New York"
        },
        correctAnswer: "d"
      }
    ];
  
    buildQuiz();
  
    window.setTimeout(showResults, 1000 * 10);
    submitButton.addEventListener("click", showResults);
  })();
  