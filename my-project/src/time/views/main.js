var mode = "clock";

function setMode(input){
    mode = input;
}

function interate(){
    var valIt;
    if (mode == "clock"){
        clock();
        //setInterval(clock, 500);
        valIt = 500;
    }
    else if (mode == "stopwatch"){
        stopwatchery();
        //setInterval(stopwatchery, 1000);
        valIt = 1000;
    }
    else if (mode == "timer"){
        timer();
        valIt = 1000;
    }
    setTimeout(interate, valIt);
}

var millisecond = 0;
var second = 0;
var minute = 0;
var hour = 0;
////////////////////
var second_time = 0;
second_time = new addS();
var minute_time = 0;
minute_time = new addM();
var hour_time = 0;
hour_time = new addH();
minute = addZero(minute);
hour = addZero(hour);
millisecond = addMillZ(millisecond);
minute_time = addZero(minute_time);
hour_time = addZero(hour_time);
millisecond = addMillZ(millisecond);


function stopwatchery(){
    second++;
    /*if(millisecond > 100){
        millisecond = 0;
        second++;
    }*/
    if(second > 59){
        second = 0;
        minute++;
    }
    if(minute > 59){
        minute = 0;
        hour++;
    }
    document.getElementById('timeIt').innerHTML = hour + " : " + minute + " : " + second;
}

function addS(){
    second_time = document.getElementById('second-box').value;
}

function addM(){
    minute_time = document.getElementById('minute-box').value;
}

function addH(){
    hour_time = document.getElementById('hour-box').value;
}

function timer(){
    if(second_time >= 60){
        const strSec = second_time;
        second_time = second_time % 60;
        minute_time = Math.floor(strSec / 60);
    }
    if(minute_time >= 60){
        const strMin = minute_time;
        minute_time %= 60;
        hour_time = Math.floor(strMin / 60);
    }
    second_time--;
    if(minute_time <= 0){
       if(hour_time != 0){
           minute_time = 59;
           hour_time--;
       }
    }
    if(second_time < 0){
        if(minute_time != 0){
            second_time = 59;
            minute_time--;
        }
    }
    document.getElementById('timeIt').innerHTML = hour_time + " : " + minute_time + " : " + second_time;
    if(second_time <= 0 && minute_time == 0 && hour_time == 0){
        document.getElementById('timeIt').innerHTML = "Time's Up";
    }
    
}


var something = 500;
///////////////////////////////
function clock(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    hours = hourIt(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    var amPm = ["AM", "PM"];
    var timed = document.getElementById('timeIt');
    timed.innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm[amOrPm()];
    return seconds;
}

function hourIt(a){
    if (a > 12){
        a -= 12;
        return a;
    }
    else if(a == 0){
        a = 12;
        return a;
    }
    
    else {
        return a;
    }
}

function addZero(b){
    if (b < 10){
        b = "0" + b;
        return b;
    }
    else {
        b = b;
        return b;
    }
}

function addMillZ(c){
    c = "00" + c;
    return c;
}

function amOrPm(){
    var tod = new Date();
    var hou = tod.getHours();
    if (hou > 12){
        return 1;
    }
    else {
        return 0;
    }
}

