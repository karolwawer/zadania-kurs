$(function () {
    $("#goUp").click(function () {
        $("p:last").prependTo("#container");
    });
    $("#goDown").click(function () {
        $("p:first").appendTo("#container");
    });
});
