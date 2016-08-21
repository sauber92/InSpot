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
    var arrMonthNames = ["JAN", "FEB", "MAR", "APL", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
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
    var mm = currentTime.getMinutes();
    var apm = "AM";
    if(hh < 10) {
      hh = "0" + hh;
    }
    else if(hh == 12) {
      apm = "PM";
    }
    else if(hh > 12) {
      hh -= 12;
      apm = "PM";
    }
    else if(mm < 10) {
      mm = "0" + mm;
    }
    var hhmmName = hh + ":" + mm + " " + apm;
    hhmmID.innerHTML = hhmmName;
}

function settingButtonEvent() {
  var settingButton = document.getElementById("settingButton");
  settingButton.onclick = function() {
    location.replace("../setting.php");
  }
}

function logoButtonEvent() {
  var logoButton = document.getElementById("logo");
  logoButton.onclick = function() {
    location.replace("../index.html");
  }
}

window.onload = function() {
    printCurrentYear();
    printCurrentMonth();
    printCurrentDate();
    printCurrentDay();
    printCurrentHHMM();
    settingButtonEvent();
    logoButtonEvent();
}
