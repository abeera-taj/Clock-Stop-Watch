weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
hour = [
  12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
];
let day = new Date();
console.log(day);
console.log(weekdays[day.getDay()]); // Show Day
console.log(month[day.getMonth()]); // Show Month

document.getElementById("demo2").innerHTML = "Day";

document.getElementById("demo").innerHTML = "Month";

document.getElementById("demo3").innerHTML = "Date";

document.getElementById("day1").innerHTML = weekdays[day.getDay()];
document.getElementById("month1").innerHTML = month[day.getMonth()];
document.getElementById("date1").innerHTML = day.getDate();

// clock3
document.getElementById("demo4").innerHTML = "Hours";
document.getElementById("demo5").innerHTML = "Minutes";
document.getElementById("demo6").innerHTML = "Seconds";

// input hours, minutes and seconds
document.getElementById("hours").innerHTML = hour[day.getHours()];
document.getElementById("minutes").innerHTML = day.getMinutes();
document.getElementById("seconds").innerHTML = day.getSeconds();

// Start STop Watch
let startTime;
let stopwatchInterval;
elapsedTime = 0;
function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedTime;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}
function updateStopwatch() {
  let currentime = new Date().getTime();
  elapsedTime = currentime - startTime;
  let currenthours = Math.floor(elapsedTime / 1000 / 60 / 60);
  let currentminutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  let currentsec = Math.floor(elapsedTime / 1000);
  let displaytime =
    show(currenthours) + ":" + show(currentminutes) + ":" + show(currentsec);
  document.getElementById("timestamp").innerHTML = displaytime;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval); // stop the interval
  elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
  stopwatchInterval = null; // reset the interval variable
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  document.getElementById("timestamp").innerHTML = "00:00:00";
}
function show(number) {
  // add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}
