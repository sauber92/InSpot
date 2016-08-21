function settingButtonEvent() {
  var settingButton = document.getElementById("settingButton");
  settingButton.onclick = function() {
    location.replace("/var/www/html/setting.html");
  }
}

function logoButtonEvent() {
  var logoButton = document.getElementById("logo");
  logoButton.onclick = function() {
    location.replace("/var/www/html/index.html");
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
