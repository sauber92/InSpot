console.log("diary");

(function(win, doc) {
    var inspotService = function() {
        this.init();
    };

    inspotService.prototype = {
        init: function() {
            console.log("==============>>> dom content loaded");
            setCurrentTime();
        }
      };

      function setCurrentTime() {
          var selectedTimeObj = doc.getElementById("currentTime");
          selectedTimeObj.innerHTML = getCurrentDate("/");
      }


})(window, document);
