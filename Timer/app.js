// Input For Timer
var inputhrs = prompt("Enter Value to set hours");
var inputMins = prompt("Enter Value to set minutes");
var inputSec = 60;


// Default Variables
var hours = inputhrs;
var minutes = inputMins;
var seconds = 60;
var interval;

// Display
var displayHrs = document.getElementById("displayHrs");
var displayMins = document.getElementById("displayMins");
var displaySec = document.getElementById("displaySec");

// if (inputMins == "") {
//     inputMins = "00";
// }
// if (inputhrs == "") {
//     inputhrs = "00";
// }

displayHrs.innerHTML = inputhrs;
displayMins.innerHTML = inputMins;
displaySec.innerHTML = inputSec;

function timer() {
    if (hours >= 0) {
        if (minutes >= 0) {
            if (seconds > 0) {
                seconds--;
                if (seconds == 0 && minutes != 0) {
                    minutes--;
                    seconds = 59;
                    if (minutes == 0 && hours != 0) {
                        hours--;
                        minutes = 59;
                    }
                }
            }
        }
    }
    if (minutes == 0 && hours == 0 && seconds == 0) {
        pauseTimer()
        alert("Times up!")
    }
    displaySec.innerHTML = seconds
    displayMins.innerHTML = minutes
    displayHrs.innerHTML = hours
}

function startTimer() {
    interval = setInterval(function () {
        timer();
    }, 1000)
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    pauseTimer()
    var min = 0;
    var sec = 0;
    var miliSec = 0;
    displayHrs.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMins.innerHTML = min;
}


// setTimeout(function () {
//     console.log("Set Time Out")
// }, 1000)

// setTimeout(function () {
//     console.log("Set Interval")
// },1000)