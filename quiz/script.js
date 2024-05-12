const questions = [
  {
    question: "1. What does the 'printf' function do?",
    answers: ["Prints formatted output to the console", "Scans input from the user", "Allocates memory"],
    correctAnswer: 0
  },
  {
    question: "2. Which operator is used to dereference a pointer?",
    answers: ["&", "*", "-", "+", "="],
    correctAnswer: 1
  },
  {
    question: "3. What is the size of 'int' data type in C?",
    answers: ["Depends on the compiler", "2 bytes", "4 bytes", "8 bytes"],
    correctAnswer: 2
  },
  {
    question: "4. What is the output of the following code? \n\n  #include <stdio.h> \nint main() { \n\tint x = 10, y = 20; \n\tint *ptr = &x; \n\t*ptr += 5; \n\tprintf(\"%d\", *ptr); \n\treturn 0; \n}",
    answers: ["10", "15", "20", "25"],
    correctAnswer: 3
  },
  {
    question: "5. What is the output of the following code? \n\n#include <stdio.h> \nint main() { \n\tint arr[] = {1, 2, 3, 4, 5}; \n\tint *ptr = arr; \n\tprintf(\"%d\", *(ptr + 2)); \n\treturn 0; \n}",
    answers: ["1", "2", "3", "4", "5"],
    correctAnswer: 2
  },
  {
    question: "6. What is the output of the following code? \n\n#include <stdio.h> \nint main() { \n\tint x = 5; \n\tif (x > 0) { \n\t\tint x = 10; \n\t\tprintf(\"%d\", x); \n\t} \n\treturn 0; \n}",
    answers: ["0", "5", "10"],
    correctAnswer: 2
  },
  {
    question: "7. What is the purpose of the 'break' statement in a 'switch' statement?",
    answers: ["Terminate the loop", "Exit the function", "Jump to a specific case label", "Terminate the switch statement"],
    correctAnswer: 3
  },
  {
    question: "8. Which keyword is used to define a constant in C?",
    answers: ["const", "constant", "define", "final"],
    correctAnswer: 0
  },
  {
    question: "9. What does the 'sizeof' operator return?",
    answers: ["Size of a variable", "Size of a data type", "Size of a pointer", "Size of a function"],
    correctAnswer: 1
  },
  {
    question: "10. What is the correct way to declare a pointer to a function?",
    answers: ["int *func();", "func() int *;", "int (*func)();", "function int *func();"],
    correctAnswer: 2
  },
  {
    question: "11. What is the output of the following code? \n\n#include <stdio.h> \nint main() { \n\tint x = 5; \n\tint *ptr = &x; \n\tprintf(\"%d\", *ptr++); \n\treturn 0; \n}",
    answers: ["5", "6", "Error"],
    correctAnswer: 0
  },
  {
    question: "12. What is the output of the following code? \n\n#include <stdio.h> \nint main() { \n\tchar str[] = \"Hello\"; \n\tprintf(\"%d\", sizeof(str)); \n\treturn 0; \n}",
    answers: ["5", "6", "Error"],
    correctAnswer: 0
  },
  {
    question: "13. What is the output of the following code? \n\n#include <stdio.h> \nint main() { \n\tchar str[] = \"Hello\"; \n\tchar *ptr = str; \n\tprintf(\"%c\", *++ptr); \n\treturn 0; \n}",
    answers: ["H", "e", "l", "o"],
    correctAnswer: 1
  },
  {
    question: "14. What does the 'malloc' function do?",
    answers: ["Allocate memory", "Free memory", "Reallocate memory", "Return the size of memory block"],
    correctAnswer: 0
  },
  {
    question: "15. What is the correct syntax to define a structure in C?",
    answers: ["struct Person { char name[50]; int age; };", "class Person { char name[50]; int age; };", "def struct Person { char name[50]; int age; };", "Person { char name[50]; int age; };"],
    correctAnswer: 0
  },
  {
    question: "16. What is the output of the following code? \n\n#include <stdio.h> \n#define SQUARE(x) x * x \nint main() { \n\tint res = SQUARE(3 + 2); \n\tprintf(\"%d\", res); \n\treturn 0; \n}",
    answers: ["25", "6", "17", "Error"],
    correctAnswer: 2
  },
  {
    question: "17. What is the output of the following code? \n\n#include <stdio.h> \nint main() { \n\tchar *str = \"Hello\"; \n\tprintf(\"%c\", str[5]); \n\treturn 0; \n}",
    answers: ["H", "e", "l", "o"],
    correctAnswer: 3
  },
  {
    question: "18. What is the output of the following code? \n\n#include <stdio.h> \nint main() { \n\tint x = 10, y = 5; \n\tint z = x---y; \n\tprintf(\"%d\", z); \n\treturn 0; \n}",
    answers: ["4", "5", "6", "Error"],
    correctAnswer: 1
  },
  {
    question: "19. What is the output of the following code? \n\n#include <stdio.h> \nint main() { \n\tint arr[] = {1, 2, 3, 4, 5}; \n\tint *ptr = arr; \n\tprintf(\"%d\", ptr[3]); \n\treturn 0; \n}",
    answers: ["1", "2", "3", "4", "5"],
    correctAnswer: 3
  },
  {
    question: "20. What is the purpose of the 'continue' statement in a loop?",
    answers: ["Exit the loop", "Skip the current iteration and continue with the next iteration", "Terminate the loop", "Jump to a specific label"],
    correctAnswer: 1
  },
];



let score = 0;
let timeLeft = 600; // 10 minutes
let currentQuestion = 0;

const questionNumberElement = document.getElementById('question-number');

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionNumberElement.textContent = `Question ${currentQuestion + 1}`;
    // Other code to display the question and answers
  } else {
    // Code for finishing the quiz
  }
}



const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers-container');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('time');

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion].question;
    answersContainer.innerHTML = '';
    questions[currentQuestion].answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.addEventListener('click', () => checkAnswer(index));
      answersContainer.appendChild(button);
    });
  } else {
    finishQuiz();
  }
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].correctAnswer;
  const buttons = document.querySelectorAll('#answers-container button');

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === correctIndex) {
      button.classList.add('correct');
    }
    if (index === selectedIndex && index !== correctIndex) {
      button.classList.add('wrong');
    }
    if (index === correctIndex && index !== selectedIndex) {
      button.classList.add('green-bg');
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
    resultElement.textContent = 'Correct!';
    resultElement.style.color = 'green';
    resultElement.style.textAlign = 'center';
    resultElement.style.fontSize = '25px';
  } else {
    resultElement.textContent = 'Incorrect!';
    resultElement.style.color = 'red';
    resultElement.style.textAlign = 'center';
    resultElement.style.fontSize = '25px';
  }

  scoreElement.textContent = score;
  currentQuestion++;
  displayQuestion();
}

function finishQuiz() {
  clearInterval(timerInterval);
  questionElement.textContent = 'Quiz completed!';
  questionElement.style.textAlign = 'center';
  questionElement.style.fontSize = '25px';
  questionElement.style.fontWeight = '700';
  answersContainer.innerHTML = '';
  resultElement.textContent = `Your score is ${score}/20`;
  submitButton.style.display = 'none';
}

function updateTime() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  if (timeLeft === 0) {
    finishQuiz();
  }
  timeLeft--;
}

displayQuestion();
updateTime();
const timerInterval = setInterval(updateTime, 1000);
