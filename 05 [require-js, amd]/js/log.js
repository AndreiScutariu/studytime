var logger = (function (){
    "use strict";

    var log = function (message) {
        console.log(message+ " [at " + getTimeStamp() + "]");
    }

    function getTimeStamp() {
        var now = new Date();
        return ((now.getDate()) + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + " " + now.getHours() + ':'
             + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
             .getSeconds()) : (now.getSeconds())));
    }

    return {
        log: log
    };

})();
