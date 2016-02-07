define("dataStore", ["logger"], function(logger) {
    "use strict";

    var STORE_NAME = "datastore";

    function save (info) {
        logger.log(info.value + " saved.");
        localStorage.setItem(STORE_NAME, JSON.stringify((info)));
    }

    function load () {
        var storedTasks = localStorage.getItem(STORE_NAME);
        if(storedTasks) {
            return JSON.parse(storedTasks);
        }
        return [];
    }

    function clear () {
        localStorage.removeItem(STORE_NAME);
    }

    return {
        save: save,
        load: load,
        clear: clear
    };
    
});
