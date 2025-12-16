let time = 25 * 60;
let timer;
let running = false;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("time").textContent =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (running) return;

    running = true;
    document.getElementById("status").textContent = "Focusing...";

    timer = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timer);
            running = false;
            alert("Time's up! Take a break.");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
    document.getElementById("status").textContent = "Paused";
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    time = 25 * 60;
    updateDisplay();
    document.getElementById("status").textContent = "Ready to focus";
}

updateDisplay();
