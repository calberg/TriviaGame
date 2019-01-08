(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      var output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        var answers = [];
  
        // and for each available answer
        for (letter in currentQuestion.answers) {
          //add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // combine output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of answers
      var numCorrect = 0;
  
      // for each question
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
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
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    window.setTimeout(showResults, 1000 * 10);
    submitButton.addEventListener("click", showResults);
  })();
  