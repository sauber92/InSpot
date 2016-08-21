function settingButtonEvent() {
  var settingButton2 = document.getElementById("settingButton");
  settingButton.onclick = function() {
    location.replace("setting.html");
  }
}

function logoButtonEvent() {
  var logoButton2 = document.getElementById("logo");
  logoButton.onclick = function() {
    location.replace("index.html");
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
