const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { ans: "Earth" },
      { ans: "Mars" },     // correct
      { ans: "Jupiter" },
      { ans: "Venus" }
    ],
    correct: "Mars"
  },
  {
    question: "What is the capital of France?",
    answers: [
      { ans: "Berlin" },
      { ans: "Madrid" },
      { ans: "Paris" },     // correct
      { ans: "Rome" }
    ],
    correct: "Paris"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { ans: "Gold" },
      { ans: "Oxygen" },    // correct
      { ans: "Silver" },
      { ans: "Hydrogen" }
    ],
    correct: "Oxygen"
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: [
      { ans: "Charles Dickens" },
      { ans: "J.K. Rowling" },
      { ans: "William Shakespeare" },  // correct
      { ans: "Mark Twain" }
    ],
    correct: "William Shakespeare"
  },
  {
    question: "What is the largest mammal?",
    answers: [
      { ans: "Elephant" },
      { ans: "Blue Whale" },  // correct
      { ans: "Giraffe" },
      { ans: "Hippopotamus" }
    ],
    correct: "Blue Whale"
  },
  {
    question: "How many continents are there?",
    answers: [
      { ans: "5" },
      { ans: "6" },
      { ans: "7" },    // correct
      { ans: "8" }
    ],
    correct: "7"
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    answers: [
      { ans: "Spanish" },
      { ans: "Portuguese" },   // correct
      { ans: "English" },
      { ans: "French" }
    ],
    correct: "Portuguese"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { ans: "Oxygen" },
      { ans: "Nitrogen" },
      { ans: "Carbon Dioxide" },   // correct
      { ans: "Hydrogen" }
    ],
    correct: "Carbon Dioxide"
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { ans: "6" },
      { ans: "7" },
      { ans: "8" },    // correct
      { ans: "9" }
    ],
    correct: "8"
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { ans: "Atlantic Ocean" },
      { ans: "Indian Ocean" },
      { ans: "Pacific Ocean" },   // correct
      { ans: "Arctic Ocean" }
    ],
    correct: "Pacific Ocean"
  }
];


window.addEventListener("load", () => {
    const questionDiv = document.getElementById("question");
    const answersDiv = document.getElementById("answer-buttons");
    const errorMessage = document.getElementById("error-message");
    let count = 0;

    function loadQuestion() {
        // Check if we're out of questions
        if (count >= questions.length) {
            questionDiv.textContent = "🎉 Quiz Complete!";
            answersDiv.innerHTML = '';
            return;
        }

        // Set question text
        questionDiv.textContent = questions[count].question;

        // Clear previous answers
        answersDiv.innerHTML = '';

        // Create new buttons
        questions[count].answers.forEach((EachAnswer, index) => {
            const button = document.createElement("button");
            button.textContent = EachAnswer.ans;
            button.value = EachAnswer.ans;
            button.id = `value-${index}`;
            button.className = "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition m-2";

            button.addEventListener("click", () => {
                if (button.value === questions[count].correct) {
                    button.disabled = true;
                    button.className = "bg-green-500 text-white font-semibold py-2 px-4 rounded m-2";
                    count++;
                    setTimeout(() => {
                        loadQuestion(); // Move to next question
                    }, 800);
                } else {
                    errorMessage.textContent = `⚠️ Wrong answer. Try again.`;
                    errorMessage.classList.remove("hidden");
                    button.className = "bg-red-500 text-white font-semibold py-2 px-4 rounded m-2";
                    setTimeout(() => {
                        button.className = "bg-blue-500 text-white font-semibold py-2 px-4 rounded m-2";
                        errorMessage.classList.add("hidden");
                    }, 1000);
                }
            });

            answersDiv.appendChild(button);
        });
    }

    loadQuestion(); // Initial load
});


