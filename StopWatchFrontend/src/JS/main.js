// Global variables
const time_controllers = document.querySelector(".wrapper .time");
const startPause_btn = document.getElementById("startPause");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

// Event listeners
startPause_btn.addEventListener("click", Start);
reset_btn.addEventListener("click", reset);

// Updates timer
function timer() {
    seconds++;

    // Format time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - hrs * 3600) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    time_controllers.innerText = `${hrs}:${mins}:${secs}`;
}

function Start() {
    startPause.removeEventListener("click", Start);
    startPause.addEventListener("click", Pause);
    startPause.innerText = "Pause";

    if (interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

function Pause() {
    startPause.removeEventListener("click", Pause);
    startPause.addEventListener("click", Start);
    startPause.innerText = "Start";

    clearInterval(interval);
    interval = null;
}

function reset() {
    Stop();
    // seconds = 0;
    time_controllers.innerText = "00:00:00";
}