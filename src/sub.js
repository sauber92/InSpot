function settingButtonEvent2() {
  var settingButton2 = document.getElementById("settingButton2");
  settingButton.onclick = function() {
    location.replace("setting.html");
  }
}

function logoButtonEvent2() {
  var logoButton2 = document.getElementById("logo2");
  logoButton.onclick = function() {
    location.replace("../index.html");
  }
}

window.onload = function() {
    settingButtonEvent2();
    logoButtonEvent2();
}
