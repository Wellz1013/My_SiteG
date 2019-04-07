function clock(){
    var cTime = new Date();
    hours = cTime.getHours();
    minutes =cTime.getMinutes();
    hours = checkHours(hours);
    minutes = checkMinutes(minutes);
    document.getElementById("clockIt").innerHTML =
    hours + ":" + minutes + " " + checkPm();
    var t = setTimeout(clock, 500);
}

function checkHours(a){
    if (a > 12){
        a = a - 12;    
        return a;
    }
    else if(a == "0"){
        a = "12";
        return a;
    }
    else{
        return a;
    }
}

function checkMinutes(b){
    if (b < 10){
        b ="0" + b;
        return b;
    }
    else{
        return b;
    }
}

function checkPm(c){
    var today = new Date();
    c = today.getHours() -1;
    if (c => 12){
        return "PM";
    }
    else if(c < 12){
        return "AM";
    }
}

