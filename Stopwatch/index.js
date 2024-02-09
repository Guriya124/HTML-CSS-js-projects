const timerEl = document.getElementById("timer");
const buttonEl = document.getElementById("buttons");
const Startbtn = document.getElementById("start");
const Stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");

function startTimer() {
    console.log("start")
}
function stopTimer() {
    console.log("stop")
}
function resetTimer() {
    console.log("reset")
}



Startbtn.addEventListener("click", startTimer)
Stopbtn.addEventListener("click", stopTimer)
resetbtn.addEventListener("click", resetTimer)