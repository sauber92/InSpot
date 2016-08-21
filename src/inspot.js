console.log("javascript start =====>");

var xmlHttp;

var n_name = document.getElementById("p_name").firstChild;
var n_clouds = document.getElementById("p_clouds").firstChild;
var n_temp = document.getElementById("p_temp").firstChild;

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

function getWeather() {
  var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=e42202e66f1f003b5aa38a48f7ddbb87";
  var f_name;
  var f_temp;
  var f_weather;
  var f_clouds;

  $.ajax({
    
    url: apiURL,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(forecast) {
      console.log("function success!");
      f_name = forecast.name;
      console.log("name success!");
      f_temp = (forecast.main.temp-273.15).toFixed(0);
      console.log("clouds success!");
      f_weather = forecast.weather[0].id;
      console.log("weather success!");
      f_clouds = forecast.clouds.all;
      console.log("clouds success!");
      n_name.replaceData(0, 10, f_name);
      console.log("name change success!");
      n_clouds.replaceData(4, 2, f_clouds);
      console.log("clouds change success!");
      n_temp.replaceData(0, 2, f_temp);
      console.log("temp change success!");

      console.log("if!");

      if(f_weather == 800) {
        document.getElementById("png").src="/src/img/clearsky.png";
      }
      else if(700 <= f_weather < 800) {
        document.getElementById("png").src="/src/img/fewclouds.png";
      }
      else if(800 < f_weather < 900) {
        document.getElementById("png").src="/src/img/clouds.png";
      }
      else {
        document.getElementById("png").src="/src/img/rain.png";
      }
    },
    error: function(forecast) {
      alert("error: " + e);
    }
  });
}

window.onload = function() { // 페이지가 로딩되면 실행
    printCurrentYear();
    printCurrentMonth();
    printCurrentDate();
    printCurrentDay();
    printCurrentHHMM();
    getWeather();
}
