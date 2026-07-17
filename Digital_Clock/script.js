// switch between different interfaces :

const clock = document.getElementById("clock-div");
const stopwatch = document.getElementById("stopwatch-div");
const timer = document.getElementById("timer-div");

const clockButton = document.getElementById("clock-button");
const stopwatchButton = document.getElementById("stopwatch-button");
const timerButton = document.getElementById("timer-button");


// Clock Functions :
let clockIntervalID = null;
const displayClock = document.getElementById("display-clock");
startClock();

function startClock() {
    if(clockIntervalID === null)
        clockIntervalID = setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    let hr = String(now.getHours()).padStart(2, "0");
    let min = String(now.getMinutes()).padStart(2, "0");
    let sec = String(now.getSeconds()).padStart(2, "0");

    displayClock.textContent = `${hr} : ${min} : ${sec}`;
}

function stopClock() {
    if(clockIntervalID !== null) {
        clearInterval(updateClock);
        clockIntervalID = null;
    }
}

// Stopwatch Function :
let elapsedTime = 0;
let watchIntervalID = null;
let start;
const displayStopwatch = document.getElementById("display-stopwatch");

const startStopwatch = document.getElementById("startStopwatch");
const stopStopwatch = document.getElementById("stopStopwatch");
const resetStopwatch = document.getElementById("resetStopwatch");
const display = document.getElementById("display-stopwatch");

// functions :
function startWatch() {
    if(watchIntervalID !== null)
        return ;

    start = Date.now();
    watchIntervalID = setInterval(updateWatch, 10);
}

function updateWatch() {
    let displayTime = elapsedTime + (Date.now() - start);
    const milli = String(displayTime%1000).padStart(3, "0");
    displayTime = Math.floor(displayTime / 1000);
    const sec = String(displayTime % 60).padStart(2, "0");
    displayTime = Math.floor(displayTime / 60);
    const min = String(displayTime % 60).padStart(2, "0");
    displayTime = Math.floor(displayTime / 60);
    const hr = String(displayTime % 60).padStart(2, "0");

    displayStopwatch.textContent = `${hr} : ${min} : ${sec} : ${milli}`;
}

function stopWatch() {
    if(watchIntervalID === null)
        return ;

    elapsedTime += (Date.now() - start);
    clearInterval(watchIntervalID);
    watchIntervalID = null;
}

function resetWatch() {
    elapsedTime = 0;
    displayStopwatch.textContent = "00 : 00 : 00 : 000";
    if(watchIntervalID !== null) {
        clearInterval(watchIntervalID);
        watchIntervalID = null;
    }
}

// adding event listener for each button :
startStopwatch.addEventListener("click", startWatch);
stopStopwatch.addEventListener("click", stopWatch);
resetStopwatch.addEventListener("click", resetWatch);

// Control Function for switching between the clock, stopwatch & timer : 

clockButton.addEventListener("click", () => {
    if(clockIntervalID === null) {
        startClock();
    }
    clock.style.display = "block";
    stopwatch.style.display = "none";
    timer.style.display = "none";
});
stopwatchButton.addEventListener("click", () => {
    stopwatch.style.display = "flex";
    clock.style.display = "none";
    timer.style.display = "none";
});
timerButton.addEventListener("click", () => {
    timer.style.display = "block";
    clock.style.display = "none";
    stopwatch.style.display = "none";
});