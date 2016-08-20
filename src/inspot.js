console.log("javascript start =====>");

var xmlHttp;

function srvTime() {
    console.log("Get server time");
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open('HEAD', window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        return xmlHttp.getResponseHeader("Date");
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        xmlHttp.open('HEAD', window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        return xmlHttp.getResponseHeader("Date");
    }
}
var st = srvTime();

var currentTime = new Date(st);

function printCurrentYear() {
    console.log("Year");
    var yearID = document.getElementById("currentYear");
    var yearName = currentTime.getFullYear();
    yearID.innerHTML = yearName;
}

function printCurrentMonth() {
    console.log("Month");
    var arrMonthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var monthID = document.getElementById("currentMonth");
    var monthName = currentTime.getMonth();
    monthID.innerHTML = arrMonthNames[monthName];
}

function printCurrentDate() {
    console.log("Date");
    var dateID = document.getElementById("currentDate");
    var dateName = currentTime.getDate();
    dateID.innerHTML = dateName;
}

function printCurrentDay() {
    console.log("Day");
    var arrDayNames = ["MON", "THU", "WED", "THR", "FRI", "SAT", "SUN"];
    var dayID = document.getElementById("currentDay");
    var dayName = currentTime.getDay();
    dayID.innerHTML = arrDayNames[dayName];
}

function printCurrentHHMM() {
    console.log("HHMM");
    var hhmmID = document.getElementById("currentHHMM");

    var hh = currentTime.getHours();
    var apm = "AM";
    if(hh < 10) {
      hh = "0" + "" + hh;
    }
    else if(hh == 12) {
      apm = "PM";
    }
    else if(hh > 12) {
      hh -= 12;
      apm = "PM";
    }
    var hhmmName = currentTime.getHours() + ":" + currentTime.getMinutes() + " " + apm;
    hhmmID.innerHTML = hhmmName;
}

window.onload = function() { // 페이지가 로딩되면 실행
    printCurrentYear();
    printCurrentMonth();
    printCurrentDate();
    printCurrentDay();
    printCurrentHHMM();
}

/*
document.write('현재 월: ' + (d.getMonth() + 1) + '<br />');
document.write('현재 일: ' + d.getDate() + '<br />');

document.write('<br />'); // 줄바꿈

document.write('현재 시: ' + d.getHours() + '<br />');
document.write('현재 분: ' + d.getMinutes() + '<br />');
document.write('현재 초: ' + d.getSeconds() + '<br />');

document.write('<br />');

document.write('오늘 요일: ' + d.getDay() + '<br />'); // 일요일 = 0
*/
