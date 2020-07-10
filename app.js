
var interval;
var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec == 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0
    }
    if(sec == 60){
        sec = 0
        min++
        secHeading.innerHTML = sec;
        minHeading.innerHTML = min;

    }
}

function start(){
    interval = setInterval(timer,10)
    document.getElementById('start').disabled = true
}

function pause(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;

}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    msecHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    minHeading.innerHTML = 0;
    clearInterval(interval);
    document.getElementById('start').disabled = false;
}