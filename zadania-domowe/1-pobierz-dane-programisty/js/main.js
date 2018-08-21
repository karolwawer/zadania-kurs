'use strict';
$(document).ready(function () {
    $('button').click(function getData() {
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: "json",
            success: function (resultJSON) {
                console.log(resultJSON);
                let programerData = resultJSON;
                let container = $('<div/>', {
                    id: 'dane-programisty',
                }).appendTo('section');

                $('#dane-programisty').text(programerData.imie + ' ' + programerData.nazwisko + ' ' + programerData.zawod + ' ' + programerData.firma);
            },
            onerror: function (msg) {
                console.log(msg);
            }
        });

    });
});
