const readline = require('readline');

let quizQuestions = [
    {
        question: "What is your name",
        options: ["1. sando", "2. sandrine", "3. anitha", "4. bellawanre"],
        correctAnswer: 1
    },
    {
        question: "where do you live?",
        options: ["1. kigali", "2. rubavu", "3. gatsibo", "4. butare"],
        correctAnswer: 3
    },
    {
        question: "what is your faculty?",
        options: ["1. computer science", "2.nurse", "3. medecine", "4. geology"],
        correctAnswer: 1
    }
];

let score = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayQuestion() {
    let randomIndex = Math.floor(Math.random() * quizQuestions.length);
    let randomQuestion = quizQuestions.splice(randomIndex, 1)[0]; // Remove the question from the array
    console.log(randomQuestion.question);
    randomQuestion.options.forEach(option => console.log(option));
    rl.question('Enter the number of your answer (1, 2, 3, 4): ', (userAnswer) => {
        userAnswer = parseInt(userAnswer);
        if (userAnswer === randomQuestion.correctAnswer) {
            console.log("Correct!");
            score++;
        } else {
            console.log("Incorrect. The correct answer is: " + randomQuestion.options[randomQuestion.correctAnswer - 1]);
        }
        if (quizQuestions.length > 0) {
            displayQuestion();
        } else {
            console.log("Your final score is: " + score);
            rl.close();
        }
    });
}

displayQuestion();