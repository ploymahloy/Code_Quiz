var timeleft = 15;

function sample() {
    var downloadTimer = setInterval(function
        function1() {
        document.getElementById("countdown").innerHTML = timeleft + "&nbsp" + "seconds remaining";

        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);

            document.getElementById("countdown").innerHTML = "Time is up!"
        }
    }, 1000);

    console.log(countdown)
}