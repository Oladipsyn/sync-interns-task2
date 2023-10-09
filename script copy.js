
function startCountdown() {
    let totalSeconds = 90;
    let timerDisplay = document.getElementById("timer");

    let countdown = setInterval(function () {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60; 
        
        let timeString = minutes.toString().padStart(2, "0") + "min " + ": " + seconds.toString().padStart(2,"0") + "sec";
        timerDisplay.textContent = timeString;

        if (totalSeconds ===30){
            timerDisplay.classList.add("red");
        }

        if (totalSeconds <=0) {
            clearInterval(countdown);
            alert('Time is Up!');
        }
        totalSeconds--;
    }, 1000);
}

window.onload = startCountdown;





























// const countdownTime = 60;

// function updateTimerDisplay(seconds) {
//     document.getElementById('timer').textContent = seconds + ' seconds remaining';
// }

// function handleTimeout() {
//     alert('Time is up');
// }

// let secondsRemaining = countdownTime;
// updateTimerDisplay(secondsRemaining);

// const countdownInterval = setInterval(funtion () {
//     secondsRemaining --;
//     updateTimerDisplay(secondsRemaining);

//     if (secondsRemaining <=0) {
//         clearInterval(countdownInterval);
//         handleTimeout();
//     }
// }, 1000);