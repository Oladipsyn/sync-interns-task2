
const questions = [
    {
        question: "Which player scored the fastest hat-trick in the Premier League?",
        answers: [
            {text: "Thierry Henry", correct: false},
            {text: "Roy Keane", correct: false},
            {text: "Jamie Vardy", correct: false},
            {text: "Sadio Mane", correct: true},
        ]
    },
    {
        question: "The record number of World Cup goals in a sigle tournament is 16, scored by who?",
        answers: [
            {text: "Luca Toni", correct: false},
            {text: "Lionel Messi", correct: false},
            {text: "Miroslav Klose", correct: true},
            {text: "Cristiano Ronaldo", correct: false},
        ]
    },
    {
        question: "English rock star Elton John was twice the owner of which football club?",
        answers: [
            {text: "Everton", correct: false},
            {text: "Watford", correct: true},
            {text: "Southampton", correct: false},
            {text: "Burnley", correct: false},
        ]
    },
    {
        question: "Ronaldo helped Portugal win the European Championship in which year?",
        answers: [
            {text: "2014", correct: false},
            {text: "2016", correct: true},
            {text: "2028", correct: false},
            {text: "2020", correct: false},
        ]
    },
    {
        question: "Who is the Champions League's top goalscorer of all time?",
        answers: [
            {text: "Erling Haaland", correct: false},
            {text: "Kylian Mbappe", correct: false},
            {text: "Cristiano Ronaldo", correct: true},
            {text: "Thomas Muller", correct: false},
        ]
    },
    {
        question: "Who is the only player to win the Champions League with three different clubs?",
        answers: [
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Kingley Coman", correct: false},
            {text: "Clarence Seedorf", correct: true},
            {text: "Luis Figo", correct: false},
        ]
    },
    {
        question: "Which club is associated with 'Galacticos'?",
        answers: [
            {text: "Atletico Madrid", correct: false},
            {text: "Real Madrid", correct: true},
            {text: "Borussia Dortmund", correct: false},
            {text: "Crystal Palace", correct: false},
        ]
    },
    {
        question: "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
        answers: [
            {text: "1982", correct: false},
            {text: "1986", correct: true},
            {text: "1990", correct: false},
            {text: "1994", correct: false},
        ]
    },
    {
        question: "Which German multinational sportswear company is Messi an ambassador for?",
        answers: [
            {text: "Nike", correct: false},
            {text: "Adidas", correct: true},
            {text: "Reebok", correct: false},
            {text: "Puma", correct: false},
        ]
    },
    {
        question: "Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid?",
        answers: [
            {text: "8", correct: false},
            {text: "9", correct: true},
            {text: "10", correct: false},
            {text: "11", correct: false},
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