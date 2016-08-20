console.log("javascript start =====>");

var currentTime = new Date();

function printCurrentYear() {
  console.log("Year");
  var yearID = document.getElementById("currentYear");
  var yyyy = currentTime.getFullYear();
  yearID.innerHTML = yyyy;
}

function printCurrentMonth() {
  console.log("Month");
  var monthID = document.getElementById("currentMonth");
  var monthName = currentTime.getMonth();
  monthID.innerHTML = monthName;
}

window.onload = function() {                         // 페이지가 로딩되면 실행
  printCurrentYear();
  printCurrentMonth();
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
