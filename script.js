let time = 25 * 60; // 25 minutes

let timerInterval;

function updateDisplay() {

  const minutes = Math.floor(time / 60);

  const seconds = time % 60;

  document.getElementById("timer").textContent =

    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

function startTimer() {

  document.getElementById("status").textContent = "Focusing...";

  timerInterval = setInterval(() => {

    time--;

    updateDisplay();

    if (time <= 0) {

      clearInterval(timerInterval);

      document.getElementById("status").textContent = "Time for a break!";

    }

  }, 1000);

}

function resetTimer() {

  clearInterval(timerInterval);

  time = 25 * 60;

  updateDisplay();

  document.getElementById("status").textContent = "Ready to focus!";

}

updateDisplay(); // Initial display