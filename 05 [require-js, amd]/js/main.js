require.config({
    paths: {
        jquery: "../lib/jquery-2.1.1.min"
    }
});

define("dataStore", [], function() {
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


define("app", function(require, exports, module) {

    var $ = require("jquery");
    var dataStore = require("dataStore");

    function add() {
        dataStore.save( {value: $("#value").val()} );
        $("#value").val('');
    }

    function load() {
        var obj = dataStore.load();
        alert(obj.value);
    }

    function clear() {
        dataStore.clear();
    }

    function registerEventHandlers() {
        $("#add").on("click", add);
        $("#load").on("click", load);
        $("#clear").on("click", clear);
    }

    exports.init = function() {
        logger.log("exports.init() called.");
        registerEventHandlers();
    }
});

require(["app"], function(app) {
    app.init();
});
