const questions = [
  {
    question: "What is the result of 5 + 3?",
    answers: [
      { ans: "6" },
      { ans: "8" },     // correct
      { ans: "7" },
      { ans: "9" }
    ],
    correct: "8"
  },
  {
    question: "What is the square root of 49?",
    answers: [
      { ans: "6" },
      { ans: "7" },     // correct
      { ans: "8" },
      { ans: "9" }
    ],
    correct: "7"
  },
  {
    question: "What is 12 × 3?",
    answers: [
      { ans: "36" },    // correct
      { ans: "30" },
      { ans: "33" },
      { ans: "39" }
    ],
    correct: "36"
  },
  {
    question: "Which number is a prime number?",
    answers: [
      { ans: "9" },
      { ans: "15" },
      { ans: "13" },   // correct
      { ans: "21" }
    ],
    correct: "13"
  },
  {
    question: "What is 100 divided by 4?",
    answers: [
      { ans: "20" },
      { ans: "25" },   // correct
      { ans: "30" },
      { ans: "40" }
    ],
    correct: "25"
  },
  {
    question: "How many degrees are in a right angle?",
    answers: [
      { ans: "90" },   // correct
      { ans: "45" },
      { ans: "180" },
      { ans: "60" }
    ],
    correct: "90"
  },
  {
    question: "What is 15% of 200?",
    answers: [
      { ans: "25" },
      { ans: "30" },   // correct
      { ans: "35" },
      { ans: "40" }
    ],
    correct: "30"
  },
  {
    question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
    answers: [
      { ans: "20" },
      { ans: "24" },
      { ans: "32" },   // correct
      { ans: "36" }
    ],
    correct: "32"
  },
  {
    question: "What is the value of π (pi) rounded to two decimal places?",
    answers: [
      { ans: "3.12" },
      { ans: "3.14" },  // correct
      { ans: "3.16" },
      { ans: "3.18" }
    ],
    correct: "3.14"
  },
  {
    question: "If x = 3, what is the value of 2x²?",
    answers: [
      { ans: "12" },
      { ans: "18" },   // correct (2×9)
      { ans: "6" },
      { ans: "9" }
    ],
    correct: "18"
  }
];

window.addEventListener("load", () => {
  // DOM Elements
  const questionDiv = document.getElementById("question");
  const answersContainer = document.querySelector(".question-div");
  const progressBar = document.querySelector(".rangeWidth");
  const questionCount = document.querySelector(".mainCount");
  const totalQuiz = document.querySelector(".total-quiz");
  const errorMessage = document.getElementById("error-message");

  // Quiz State
  let currentIndex = 0;
  let progressPercent = 0;

  // Load a single question
  function loadQuestion() {
    totalQuiz.textContent = questions.length;

    if (currentIndex >= questions.length) {
      questionDiv.textContent = "🎉 Quiz Complete!";
      answersContainer.innerHTML = "";
      return;
    }

    const currentQuestion = questions[currentIndex];
    questionDiv.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");

    currentQuestion.answers.forEach((answerObj, index) => {
      const answerWrapper = document.createElement("div");
      const answerEl = document.createElement("h1");

      answerEl.textContent = answerObj.ans;
      answerEl.setAttribute("data-answer", answerObj.ans);
      answerEl.id = `value-${index}`;
      answerWrapper.classList.add("question");

      // Answer click handler
      answerEl.addEventListener("click", () => {
        const selected = answerEl.getAttribute("data-answer");

        if (selected === currentQuestion.correct) {
          progressPercent += 10;
          progressBar.style.width = `${progressPercent}%`;
          questionCount.textContent = currentIndex + 1; // Next question index
          currentIndex++;
          setTimeout(loadQuestion, 800);
        } else {
          showError(answerEl);
        }
      });

      answerWrapper.appendChild(answerEl);
      answersContainer.appendChild(answerWrapper);
    });
  }

  function showError(element) {
    errorMessage.textContent = `⚠️ Wrong answer. Try again.`;
    errorMessage.classList.remove("hidden");

    element.className = "bg-red-500 text-white font-semibold py-2 px-4 rounded m-2";

    setTimeout(() => {
      element.className = "bg-blue-500 text-white font-semibold py-2 px-4 rounded m-2";
      errorMessage.classList.add("hidden");
    }, 1000);
  }

  // Start Quiz
  loadQuestion();
});




