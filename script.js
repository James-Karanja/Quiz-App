const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Rome", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
      ],
    },
    // Add more questions and answers here
  ];
  
  let currentQuestionIndex = 0;
  
  const questionContainer = document.getElementById("question-container");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-button");
  
  nextButton.addEventListener("click", nextQuestion);
  
  function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add("hide");
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = "";
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectAnswer(answer));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
      // Add your logic for correct answers here
    }
    nextButton.classList.remove("hide");
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
      nextButton.classList.add("hide");
    } else {
      // Display a final score or message when all questions are answered
    }
  }
  
  startGame();
  