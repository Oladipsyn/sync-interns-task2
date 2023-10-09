
const questions = [
    {
        question: "Saturn is the ______ planet.",
        answers: [
            {text: "Biggest", correct: false},
            {text: "Coldest", correct: false},
            {text: "Oldest", correct: false},
            {text: "Flattest", correct: true},
        ]
    },
    {
        question: "Who is considered the founder of the modern science of genetics?",
        answers: [
            {text: "Gregor Mendel", correct: true},
            {text: "Francis Crick", correct: false},
            {text: "Dmitri Mendelev", correct: false},
            {text: "Earnest Rutherford", correct: false},
        ]
    },
    {
        question: "During what lunar phase is the moon least visible from Earth?",
        answers: [
            {text: "Waxing Crescent", correct: false},
            {text: "Wanning Gibbous", correct: false},
            {text: "First Quarter", correct: false},
            {text: "New Moon", correct: true},
        ]
    },
    {
        question: "What hormone does the pancreas produce?",
        answers: [
            {text: "Insulin", correct: true},
            {text: "Estrogen", correct: false},
            {text: "Testosterone", correct: false},
            {text: "Adrenaline", correct: false},
        ]
    },
    {
        question: "What is Johannes Kepler best known for?",
        answers: [
            {text: "Laws of Universal Gravitation", correct: false},
            {text: "Laws of Thermodynamics", correct: false},
            {text: "Laws of Motion", correct: false},
            {text: "Laws of Planetary Motion", correct: true},
        ]
    },
    {
        question: "What is the function of kidneys in the human body?",
        answers: [
            {text: "Maintain Acid-Base Balance", correct: false},
            {text: "Remove waste", correct: false},
            {text: "Regulate Blood Pressure", correct: false},
            {text: "All Of These", correct: true},
        ]
    },
    {
        question: "What scientist discovered X-rays?",
        answers: [
            {text: "Wilhelm Rontgen", correct: true},
            {text: "Nikola Tesla", correct: false},
            {text: "Max Von Laue", correct: false},
            {text: "Thomas Edison", correct: true},
        ]
    },
    {
        question: "What is the name of the lowest layer of Earth's atmosphere?",
        answers: [
            {text: "Mesosphere", correct: false},
            {text: "Exosphere", correct: false},
            {text: "Stratosphere", correct: false},
            {text: "Troposhere", correct: true},
        ]
    },
    {
        question: "Who invented the telescope?",
        answers: [
            {text: "Galileo Galilei", correct: true},
            {text: "Hans Lippershey", correct: false},
            {text: "Isaac Newton", correct: false},
            {text: "Johannes Kepler", correct: false},
        ]
    },
    {
        question: " What is Jupiter's largest moon?",
        answers: [
            {text: "Europa", correct: false},
            {text: "Callisto", correct: false},
            {text: "IO", correct: false},
            {text: "Ganymede", correct: true},
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