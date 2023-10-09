
const questions = [
    {
        question: "This is the lightness or darkness of a color.",
        answers: [
            {text: "Value", correct: true},
            {text: "Texture", correct: false},
            {text: "Color", correct: false},
            {text: "Contrast", correct: false},
        ]
    },
    {
        question: "Which artist said ‘Everything you can imagine is real’?",
        answers: [
            {text: "Pablo Picasso", correct: true},
            {text: "Rene Magritte", correct: false},
            {text: "Paul Gauguin", correct: false},
            {text: "Earnest Rutherford", correct: false},
        ]
    },
    {
        question: "What nationality was painter Frida Kahlo?",
        answers: [
            {text: "English", correct: false},
            {text: "Mexican", correct: true},
            {text: "American", correct: false},
            {text: "Italian", correct: false},
        ]
    },
    {
        question: "The Lady Lever Art Gallery is in which English city?",
        answers: [
            {text: "Southampton", correct: false},
            {text: "Liverpool", correct: true},
            {text: "London", correct: false},
            {text: "Manchester", correct: false},
        ]
    },
    {
        question: "‘The Starry – ‘what’ is a painting by Dutch artist Vincent Van Gogh?",
        answers: [
            {text: "Night", correct: true},
            {text: "Wind", correct: false},
            {text: "Day", correct: false},
            {text: "Moon", correct: false},
        ]
    },
    {
        question: "Surrealist painter Rene Magritte was born in which country?",
        answers: [
            {text: "Germany", correct: false},
            {text: "Spain", correct: false},
            {text: "Belgium", correct: true},
            {text: "England", correct: false},
        ]
    },
    {
        question: "What is the largest museum of fine art as defined by available gallery space?",
        answers: [
            {text: "The Hermitage", correct: false},
            {text: "The Louvre", correct: true},
            {text: "Metropolitan Museum of Art", correct: false},
            {text: "Thomas Edison", correct: false},
        ]
    },
    {
        question: "Which of these painters is not Italian?",
        answers: [
            {text: "Pablo Picasso", correct: false},
            {text: "Leonardo Da Vinci", correct: false},
            {text: "Titian", correct: true},
            {text: "Caravaggio", correct: false},
        ]
    },
    {
        question: "What type of paint commonly used in fine art is the slowest to dry?",
        answers: [
            {text: "Acrylic", correct: false},
            {text: "Water Color", correct: false},
            {text: "Oil", correct: true},
            {text: "Spray", correct: false},
        ]
    },
    {
        question: " Pablo Picasso is known as the pioneer of what art movement?",
        answers: [
            {text: "Abstract Impressionism", correct: false},
            {text: "Pop Art", correct: false},
            {text: "Cubism", correct: true},
            {text: "Surrealism", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ' + score + ' out of ' + questions.length + ' !';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
