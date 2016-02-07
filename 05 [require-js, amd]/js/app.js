define(function(require, exports, module) {

    var $ = require("jquery");
    var dataStore = require("dataStore");
    var logger = require("logger");

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
