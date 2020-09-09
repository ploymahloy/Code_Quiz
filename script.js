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
    var timer = document.getElementById("Timer");
    var startBtn = document.getElementById("start-btn");
    console.log(startBtn);

// declare vars to grab the elements from html file
    
    var quesEl = document.getElementById("Question");
    var ansEl = document.getElementById("Answers");
    var ans1 = document.getElementById("ans1");
    var ans2 = document.getElementById("ans2");
    var ans3 = document.getElementById("ans3");
    var ans4 = document.getElementById("ans4");
    var answers = [];
    var hidden = document.getElementsByClassName("hide");
    var quizTimer;

// function to cycle through questions
    
    // userChoice.addEventListener("click", function () {
    //     for (var i = 0; i < questions.length; i++) 


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
        choiceBtn.textContent = index + 1 + ") " + choice;
        choiceBtn.onclick = choiceClick; 
        ansEl.appendChild(choiceBtn);
    });
};

function choiceClick() {
    if (this.value !== questions[indexOfQuestions].answer) {
        alert("FAILURE");
        time -= 5;
    }
    else {
        alert("CORRECT");
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
    console.log("test");
    countdown()
    for (var i = 0; i < hidden.length; i += 1) {
        hidden[i].style.display = 'block';
    }
    getQuestions();
};

startBtn.addEventListener("click", startQuiz);

// function for the quiz to end (out of time or questions)

    function endQuiz () {
        clearInterval(quizTimer);
        document.getElementById("Card").innerHTML = "";
        var finalScore = document.createElement("p")
        finalScore.textContent = "Congrats!...your score is" + time;
        startBtn.appendChild(finalScore);
    };

// add div for Response, avoid alerts