// Variables to track time
let time = 0; // time in seconds
let running = false; // stopwatch state
let interval; // reference to the setInterval
let lapCount = 1; // to count laps

// Start or Stop the stopwatch
function startStopwatch() {
  const startStopButton = document.getElementById('startStop');
  
  if (running) {
    clearInterval(interval); // Stop the stopwatch
    startStopButton.innerHTML = "Start";
  } else {
    interval = setInterval(updateTime, 1000); // Start the stopwatch
    startStopButton.innerHTML = "Pause";
  }

  running = !running; // Toggle the running state
}

// Update the displayed time
function updateTime() {
  time++;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  document.getElementById('time').textContent = 
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

// Format the time to always show two digits (e.g., 02:09 instead of 2:9)
function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(interval);
  time = 0;
  running = false;
  document.getElementById('time').textContent = "00:00:00";
  document.getElementById('startStop').innerHTML = "Start";
  lapCount = 1;
  document.getElementById('lapList').innerHTML = ''; // Clear lap times
}

// Record a lap time
function recordLap() {
  if (running) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const lapTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    const lapList = document.getElementById('lapList');
    
    const li = document.createElement('li');
    li.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(li);

    lapCount++; // Increment lap count
  }
}
