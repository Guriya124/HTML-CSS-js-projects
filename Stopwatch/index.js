const timerEl = document.getElementById("timer");
const buttonEl = document.getElementById("buttons");
const Startbtn = document.getElementById("start");
const Stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Start Function
function startTimer() {
    // console.log("start")
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10)

    Startbtn.disabled = true;
    Stopbtn.disabled = false;
}

// Format Time
function formatTime(elapsedTime) {
    const miliSeconds = Math.floor((elapsedTime % 1000) / 10);

    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const mintues = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":" +
        (mintues ? (mintues > 9 ? mintues : "0" + mintues) : "00")
        + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        + "." +
        (miliSeconds > 9 ? miliSeconds : "0" + miliSeconds)
    )
}

// stop function

function stopTimer() {
    clearInterval(timerInterval);
    Startbtn.disabled = false;
    Stopbtn.disabled = true;
}

// Reset the timer function
function resetTimer() {
    clearInterval(timerInterval);

    elapsedTime = 0;
    timerEl.textContent = "00:00:00"
    Startbtn.disabled = false;
    Stopbtn.disabled = true;
}



Startbtn.addEventListener("click", startTimer)
Stopbtn.addEventListener("click", stopTimer)
resetbtn.addEventListener("click", resetTimer)