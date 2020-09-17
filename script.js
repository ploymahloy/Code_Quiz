// write questions (array)

var questions = [
    {
        question: "JavaScript was created within which company?",
        choices: ["Microsoft", "Netscape", "IBM", "Apple"],
        answer: "Netscape"
    },
    {
        question: "What percentage of websites use JavaScript?",
        choices: ["100%", "97%", "92%", "89%"],
        answer: "92%"
    },
    {
        question: "In which HTML element can we store JavaScript code?",
        choices: ["<js>", "<script>", "<javascript>", "N/A"],
        answer: "<script>"
    },
    {
        question: "What is the proper file extension for JavaScript files?",
        choices: [".js", ".script", ".jvs", ".mocha"],
        answer: ".js"
    },
    {
        question: "Which of the following properly declares a variable?",
        choices: ["I declare the following a variable: kingArthurVar", 
                  "Issa variable = 21SavageVar", 
                  "variable = issaVar", 
                  "var = camelCase"],
        answer: "var = camelCase"
    },
];

// declare vars to keep track of the quiz
     
var indexOfQuestions = 0;
var time = questions.length * 20;

// declare vars to grab the elements from html file
    
var timer = document.getElementById("Timer");
var startBtn = document.getElementById("start-btn");
var Card = document.getElementById("Card");
var quesEl = document.getElementById("Question");
var ansEl = document.getElementById("Answers");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var answers = [];
var hidden = document.getElementsByClassName("hide");
var quizTimer;

// function to start the quiz 
function countdown() {
    quizTimer = setInterval(function () {
        time--;
        console.log(time);
    }, 1000)
};

function getQuestions() {
    var getQuestion = questions[indexOfQuestions];
    quesEl.textContent = getQuestion.question; 
    ansEl.innerHTML = "";
    
    getQuestion.choices.forEach(function(choice, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = choiceClick; 
        ansEl.appendChild(choiceBtn);
    });
};

function choiceClick() {
    if (this.value !== questions[indexOfQuestions].answer) {
        time -= 5;
    }
    else {
    }
    indexOfQuestions++;
    if (indexOfQuestions === questions.length) {
        endQuiz();
    }
    else {
        getQuestions();
    }
};

function startQuiz() {
    countdown()
    for (var i = 0; i < hidden.length; i += 1) {
        hidden[i].style.display = 'block';
    }
    getQuestions();
};

startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", hideStart);

function endQuiz () {
    clearInterval(quizTimer);
    Card.innerHTML = "";
    var finalScore = document.createElement("p")
    finalScore.textContent = "Congrats!...your score is " + time;
    Card.appendChild(finalScore);
    var form = document.createElement("form")
    var initials = document.createElement("input");
    form.appendChild(initials);
    Card.appendChild(form);
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var initialsAndScore = {
        initials: initials.value,
        score: time,
    }
    writeLocalStorage(initialsAndScore);
    window.open('./highscores.html'); 
    })
};

const readLocalStorage = () => (JSON.parse(localStorage.getItem("scores")) || [])

function writeLocalStorage(item) {
    var highScores = readLocalStorage();
    highScores.push(item);
    localStorage.setItem('scores', JSON.stringify(highScores)); 
}

function hideStart() {
    startBtn.style.display = 'none';
}

// add div for Response, avoid alerts