var app = (function () {
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

    return {
        init: function() {
            registerEventHandlers();
        }
    }
})();


$(function () {
    app.init();
});
