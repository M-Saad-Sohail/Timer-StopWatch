var min = 0;
var sec = 0;
var miliSec = 0;
var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMiliSec = document.getElementById("displayMiliSec");

var interval;

function timer() {
    miliSec++;
    if (miliSec == 10) {
        miliSec = 0;
        sec++
        if (sec == 60) {
            sec = 0;
            min++
        }
    }
    displayMiliSec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}

function startTimer() {
    interval = setInterval(function () {
        timer();
    }, 100)
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    pauseTimer()
    var min = 0;
    var sec = 0;
    var miliSec = 0;
    displayMiliSec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}


// setTimeout(function () {
//     console.log("Set Time Out")
// }, 1000)

// setTimeout(function () {
//     console.log("Set Interval")
// },1000)