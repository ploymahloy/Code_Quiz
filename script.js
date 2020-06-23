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
        question: "What is the proper file extension for external JavaScript files?",
        choices: [".js", ".script", ".jvs", ".mocha"],
        answer: ".js"
    },
    {
        question: "Which of the following properly declares a variable?",
        choices: ["I declare the following a variable: kingArthurVar", "Issa variable = 21SavageVar", "variable = issaVar", "var = camelCase"],
        answer: "var = camelCase"
    },
]

// declare vars to keep track of the quiz
     var indexOfQuestions = 0;
     var time = questions.length * 20;
     var timer;


// declare vars to grab the elements from html file
    var quesEl = document.getElementById("Question");
    var ansEl = document.getElementById("Answers");

// function to start the quiz ---> line 30-35
// function to get questions
// function to check if the user guesses right or wrong
// function to deduct time if answer is wrong 
// function for the quiz to end
// function to update time
// function to save score and initials

// declar var to start screen
// doc.elbyID
// startScreen.setAttribute("class", "hide")
// quesEl.removeAttribute("class")
// timer = setInterval(functionForTime, 1000)
// .textContent = function(getQuestions)
     // appends html 

// getquestion function
// get current question from the array
//clear out any questions choices
// loop over the choices 
// create an event listener to user choice
// display on page 
// function (var i<0; i<questions.length; i++)
// function to deduct time
// var userChoice

    var userChoice = //html btns

    if (userChoice !== answers) {
        time -= 5;
    }
    else 

// time--
//.textContent to show it on page 
// check if time ran out
// ends quiz